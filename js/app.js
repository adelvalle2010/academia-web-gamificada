// Escapa texto antes de insertarlo con innerHTML (las etiquetas como <body> deben verse, no interpretarse)
function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Controlador principal de la aplicación y lógica de interacción
class AppController {
    constructor() {
        this.editor = null;
        this.currentLevel = 1;
        this.currentMode = 'guided'; // 'guided' | 'intermediate'
        this.selectedTheme = 'space';
        this.previewDebounceTimer = null;
        this.toastTimeout = null;
        this.init();
    }

    init() {
        // Cargar estado guardado
        this.selectedTheme = window.gameStorage.getTheme();
        this.currentLevel = window.gameStorage.getCurrentLevel();
        const savedUiMode = window.gameStorage.getUiMode();

        // Aplicar modo visual
        document.documentElement.setAttribute('data-theme', savedUiMode);
        const uiIcon = document.getElementById('theme-toggle-icon');
        if (uiIcon) uiIcon.textContent = savedUiMode === 'dark' ? '🌙' : '☀️';

        // Inicializar CodeMirror
        this.setupEditor();

        // Configurar Event Listeners
        this.bindEvents();

        // Si ya hay sesión previa guardada, ir a la pantalla de selección de niveles; si no, a la bienvenida
        const hasStarted = localStorage.getItem('edu_code_adventure_save_v1');
        if (hasStarted) {
            this.showLevelsScreen();
        } else {
            this.showWelcome();
        }
    }

    setupEditor() {
        const textarea = document.getElementById('code-editor-area');
        if (!textarea) return;

        this.editor = CodeMirror.fromTextArea(textarea, {
            mode: 'htmlmixed',
            theme: 'dracula',
            lineNumbers: true,
            lineWrapping: true,
            autoCloseTags: true,
            autoCloseBrackets: true,
            tabSize: 2,
            indentUnit: 2
        });

        // Actualización en tiempo real del iframe al teclear (con debounce de 400ms)
        this.editor.on('change', () => {
            clearTimeout(this.previewDebounceTimer);
            this.previewDebounceTimer = setTimeout(() => {
                this.updatePreview();
                // Guardar borrador del código según el modo activo
                window.gameStorage.saveCurrentCode(this.currentLevel, this.editor.getValue(), this.currentMode);
            }, 400);
        });

        // Refrescar al cargar fuentes web (JetBrains Mono)
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => {
                if (this.editor) this.editor.refresh();
            });
        }

        // Observar cambios de tamaño del contenedor para reajustar gutters automáticamente
        const container = document.querySelector('.code-editor-container');
        if (container && window.ResizeObserver) {
            const ro = new ResizeObserver(() => {
                if (this.editor) this.editor.refresh();
            });
            ro.observe(container);
        }

        // Interceptar pegado del ejemplo en el editor
        this.editor.on('paste', (cm, e) => {
            const clipboardData = (e.clipboardData || window.clipboardData);
            if (!clipboardData) return;
            const pastedText = clipboardData.getData('text') || '';
            const levelData = window.LEVELS_DATA.find(l => l.id === this.currentLevel);
            if (!levelData || !levelData.exampleCode) return;

            const normalize = (s) => (s || '')
                .replace(/<!--[\s\S]*?-->/g, '')
                .replace(/\/\*[\s\S]*?\*\//g, '')
                .replace(/\s+/g, ' ')
                .trim()
                .toLowerCase();

            const cleanPasted = normalize(pastedText);
            const cleanExample = normalize(levelData.exampleCode);

            if (cleanPasted && (cleanPasted === cleanExample || (cleanExample.length > 20 && cleanPasted.includes(cleanExample)))) {
                e.preventDefault();
                if (window.soundFX) window.soundFX.playError();
                this.showFeedbackToast('error', '🚫 ¡No pegues el ejemplo de sintaxis! Debes escribir el código tú mismo adaptado a tu misión.');
            }
        });
    }

    bindEvents() {
        // Selector de Temáticas en Pantalla de Bienvenida
        document.querySelectorAll('.theme-card').forEach(card => {
            card.addEventListener('click', () => {
                const themeId = card.getAttribute('data-theme-id');
                this.selectTheme(themeId);
            });
        });

        // Botón "Volver a Temáticas" desde la pantalla de niveles
        const backToThemesBtn = document.getElementById('back-to-themes-btn');
        if (backToThemesBtn) {
            backToThemesBtn.addEventListener('click', () => {
                window.soundFX.playClick();
                this.showWelcome();
            });
        }

        // Botón "Volver al Mapa de Niveles" desde la cabecera del Workspace
        const backToLevelsBtn = document.getElementById('back-to-levels-btn');
        if (backToLevelsBtn) {
            backToLevelsBtn.addEventListener('click', () => {
                window.soundFX.playClick();
                this.showLevelsScreen();
            });
        }

        // Botón para volver al mapa desde el Modal de Victoria
        const modalToLevelsBtn = document.getElementById('modal-to-levels-btn');
        if (modalToLevelsBtn) {
            modalToLevelsBtn.addEventListener('click', () => {
                window.soundFX.playClick();
                document.getElementById('success-modal').classList.remove('open');
                this.showLevelsScreen();
            });
        }

        // Botón para cambiar de temática desde el Header
        const changeThemeBtn = document.getElementById('change-theme-btn');
        if (changeThemeBtn) {
            changeThemeBtn.addEventListener('click', () => {
                window.soundFX.playClick();
                this.showWelcome();
            });
        }

        // Toggle Modo Claro / Oscuro
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                window.soundFX.playClick();
                this.toggleUiMode();
            });
        }

        // Botón "Ver Resultado" (actualiza manualmente el iframe)
        const runPreviewBtn = document.getElementById('run-preview-btn');
        if (runPreviewBtn) {
            runPreviewBtn.addEventListener('click', () => {
                window.soundFX.playClick();
                this.updatePreview();
            });
        }

        // Botón "Validar Respuesta / Comprobar"
        const validateBtn = document.getElementById('validate-code-btn');
        if (validateBtn) {
            validateBtn.addEventListener('click', () => {
                this.validateCurrentLevel();
            });
        }

        // Botón "Pista"
        const hintBtn = document.getElementById('get-hint-btn');
        if (hintBtn) {
            hintBtn.addEventListener('click', () => {
                this.revealHint();
            });
        }

        // Cerrar modales con botones de cerrar o backdrop
        document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
            backdrop.addEventListener('click', (e) => {
                if (e.target === backdrop) {
                    if (backdrop.id === 'mission-modal') {
                        this.closeMissionBriefingModal();
                    } else {
                        backdrop.classList.remove('open');
                    }
                }
            });
        });

        document.querySelectorAll('.modal-close-icon').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                const modal = closeBtn.closest('.modal-backdrop');
                if (modal && modal.id === 'mission-modal') {
                    this.closeMissionBriefingModal();
                } else if (modal) {
                    modal.classList.remove('open');
                }
            });
        });

        // Botón "¡Entendido! Comenzar Misión" en Modal de Briefing
        const startCodingBtn = document.getElementById('start-coding-btn');
        if (startCodingBtn) {
            startCodingBtn.addEventListener('click', () => {
                window.soundFX.playClick();
                this.closeMissionBriefingModal();
            });
        }

        // Navegación secuencial de los 3 pasos (Misión -> Objetivo -> Concepto)
        const stepNextBtn = document.getElementById('mission-step-next-btn');
        if (stepNextBtn) {
            stepNextBtn.addEventListener('click', () => {
                this.setMissionModalStep((this.currentMissionStep || 1) + 1);
            });
        }

        const stepPrevBtn = document.getElementById('mission-step-prev-btn');
        if (stepPrevBtn) {
            stepPrevBtn.addEventListener('click', () => {
                this.setMissionModalStep((this.currentMissionStep || 1) - 1);
            });
        }

        const stepSkipBtn = document.getElementById('mission-step-skip-btn');
        if (stepSkipBtn) {
            stepSkipBtn.addEventListener('click', () => {
                this.closeMissionBriefingModal();
            });
        }

        // Clic directo en cualquiera de los 3 pasos del stepper
        document.querySelectorAll('.stepper-step').forEach(stepBtn => {
            stepBtn.addEventListener('click', () => {
                const step = parseInt(stepBtn.getAttribute('data-step'), 10);
                if (step) {
                    this.setMissionModalStep(step);
                }
            });
        });

        // Botón miniatura en barra lateral para re-abrir el modal de misión
        const openMissionModalBtn = document.getElementById('open-mission-modal-btn');
        if (openMissionModalBtn) {
            openMissionModalBtn.addEventListener('click', () => {
                window.soundFX.playClick();
                this.showMissionBriefingModal(1);
            });
        }

        // Cerrar modal de misión con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const missionModal = document.getElementById('mission-modal');
                if (missionModal && missionModal.classList.contains('open')) {
                    this.closeMissionBriefingModal();
                }
            }
        });

        // Botón Siguiente Nivel en Modal de Victoria
        const nextLevelBtn = document.getElementById('next-level-modal-btn');
        if (nextLevelBtn) {
            nextLevelBtn.addEventListener('click', () => {
                window.soundFX.playClick();
                document.getElementById('success-modal').classList.remove('open');
                if (this.currentLevel < 25) {
                    this.loadLevel(this.currentLevel + 1, 'guided');
                    this.showMissionBriefingModal();
                } else {
                    alert("¡Felicitaciones! Has completado los 25 niveles de la Academia Web.");
                }
            });
        }

        // Botón "Pasar a Reto Intermedio" tras validar correctamente en guiado
        const goToIntermediateBtn = document.getElementById('go-to-intermediate-btn');
        if (goToIntermediateBtn) {
            goToIntermediateBtn.addEventListener('click', () => {
                window.soundFX.playClick();
                this.switchMode('intermediate');
            });
        }

        // Botón Reiniciar Código del Nivel Actual
        const resetLevelBtn = document.getElementById('reset-code-btn');
        if (resetLevelBtn) {
            resetLevelBtn.addEventListener('click', () => {
                if (confirm('¿Deseas reiniciar el código de este nivel al estado original?')) {
                    window.soundFX.playClick();
                    this.resetCurrentLevelCode();
                }
            });
        }

        // Botones para descargar código del ejercicio actual (.html)
        const downloadCurrentBtn = document.getElementById('download-current-btn');
        if (downloadCurrentBtn) {
            downloadCurrentBtn.addEventListener('click', () => {
                this.downloadCurrentLevelCode();
            });
        }

        const toolbarDownloadCurrentBtn = document.getElementById('toolbar-download-current-btn');
        if (toolbarDownloadCurrentBtn) {
            toolbarDownloadCurrentBtn.addEventListener('click', () => {
                this.downloadCurrentLevelCode();
            });
        }

        const modalDownloadCodeBtn = document.getElementById('modal-download-code-btn');
        if (modalDownloadCodeBtn) {
            modalDownloadCodeBtn.addEventListener('click', () => {
                this.downloadCurrentLevelCode();
            });
        }

        // Botones para descargar todos los códigos realizados (.zip)
        const downloadAllBtn = document.getElementById('download-all-btn');
        if (downloadAllBtn) {
            downloadAllBtn.addEventListener('click', () => {
                this.downloadAllLevelsCode();
            });
        }

        const toolbarDownloadAllBtn = document.getElementById('toolbar-download-all-btn');
        if (toolbarDownloadAllBtn) {
            toolbarDownloadAllBtn.addEventListener('click', () => {
                this.downloadAllLevelsCode();
            });
        }

        const levelsDownloadAllBtn = document.getElementById('levels-download-all-btn');
        if (levelsDownloadAllBtn) {
            levelsDownloadAllBtn.addEventListener('click', () => {
                this.downloadAllLevelsCode();
            });
        }

        // Selector de Dificultad: Nivel Guiado vs Nivel Intermedio
        const modeGuidedBtn = document.getElementById('mode-guided-btn');
        if (modeGuidedBtn) {
            modeGuidedBtn.addEventListener('click', () => {
                this.switchMode('guided');
            });
        }

        const modeIntermediateBtn = document.getElementById('mode-intermediate-btn');
        if (modeIntermediateBtn) {
            modeIntermediateBtn.addEventListener('click', () => {
                this.switchMode('intermediate');
            });
        }

        const returnToGuidedBtn = document.getElementById('return-to-guided-btn');
        if (returnToGuidedBtn) {
            returnToGuidedBtn.addEventListener('click', () => {
                this.switchMode('guided');
            });
        }

        // Protección contra copiado en la caja de ejemplo de sintaxis
        const exampleBox = document.getElementById('mission-example-code');
        if (exampleBox) {
            const blockCopy = (e) => {
                e.preventDefault();
                if (window.soundFX) window.soundFX.playError();
                this.showFeedbackToast('error', '✍️ ¡Entrena tu memoria muscular! Escribe el código tú mismo en el editor para fijar la sintaxis.');
            };
            exampleBox.addEventListener('copy', blockCopy);
            exampleBox.addEventListener('cut', blockCopy);
            exampleBox.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                this.showFeedbackToast('error', '✍️ Este bloque es una guía de referencia visual. Escribe tu solución en el editor.');
            });
        }
    }

    showWelcome() {
        document.getElementById('welcome-screen').style.display = 'flex';
        const levelsScreen = document.getElementById('levels-screen');
        if (levelsScreen) levelsScreen.style.display = 'none';
        document.getElementById('app-workspace').style.display = 'none';

        // Marcar tarjeta activa
        document.querySelectorAll('.theme-card').forEach(card => {
            if (card.getAttribute('data-theme-id') === this.selectedTheme) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    showLevelsScreen() {
        document.getElementById('welcome-screen').style.display = 'none';
        const levelsScreen = document.getElementById('levels-screen');
        if (levelsScreen) levelsScreen.style.display = 'flex';
        document.getElementById('app-workspace').style.display = 'none';

        const themeConfig = window.THEMES_CONFIG[this.selectedTheme] || window.THEMES_CONFIG.space;
        const themeIcons = { space: '🚀', vet: '🐾', cafe: '☕', rock: '🎸' };

        const iconElem = document.getElementById('levels-theme-icon');
        if (iconElem) iconElem.textContent = themeIcons[this.selectedTheme] || '🚀';

        const titleElem = document.getElementById('levels-theme-title');
        if (titleElem) titleElem.textContent = themeConfig.name || themeConfig.brand;

        const starsElem = document.getElementById('levels-total-stars');
        if (starsElem) starsElem.textContent = window.gameStorage.getTotalStars();

        const scoreElem = document.getElementById('levels-total-score');
        if (scoreElem) scoreElem.textContent = window.gameStorage.getTotalScore();

        this.renderLevelsGrid();
    }

    renderLevelsGrid() {
        const grid = document.getElementById('levels-selection-grid');
        if (!grid) return;
        grid.innerHTML = '';

        const themeConfig = window.THEMES_CONFIG[this.selectedTheme] || window.THEMES_CONFIG.space;
        const themeIcons = { space: '🚀', vet: '🐾', cafe: '☕', rock: '🎸' };
        const currentThemeIcon = themeIcons[this.selectedTheme] || '🚀';

        window.LEVELS_DATA.forEach(lvl => {
            const card = document.createElement('article');
            const guidedProgress = window.gameStorage.getLevelData(lvl.id, 'guided');
            const interProgress = window.gameStorage.getLevelData(lvl.id, 'intermediate');
            const isGuidedDone = guidedProgress && guidedProgress.completed;
            const isInterDone = interProgress && interProgress.completed;
            const isCompleted = isGuidedDone || isInterDone;
            const isCurrent = lvl.id === this.currentLevel;

            const visual = (window.LEVEL_VISUALS && window.LEVEL_VISUALS[lvl.id]) || {
                icon: '⚡',
                shortTitle: lvl.title,
                tag: lvl.badge
            };

            const catClass = lvl.category === 'table' ? 'badge-table' 
                          : (lvl.category === 'css' ? 'badge-css' 
                          : (lvl.category === 'flexbox' ? 'badge-flexbox' : 'badge-html'));

            card.className = `level-select-card ${isCurrent ? 'current' : ''} ${isCompleted ? 'completed' : ''}`;
            if (themeConfig.accentColor) {
                card.style.setProperty('--card-accent', themeConfig.accentColor);
            }

            let footerHtml = '';
            if (isInterDone && isGuidedDone) {
                footerHtml = `
                    <div class="level-card-stars">
                        ${'⭐'.repeat(guidedProgress.stars)} <span class="inter-done-badge" title="Nivel Intermedio completado">⚡🏆 Maestro</span>
                    </div>
                    <div class="level-card-action">
                        <span>Repasar</span> ➔
                    </div>
                `;
            } else if (isInterDone) {
                footerHtml = `
                    <div class="level-card-stars">
                        <span class="inter-done-badge" title="Nivel Intermedio superado en hoja en blanco">⚡🏆 Intermedio</span>
                    </div>
                    <div class="level-card-action">
                        <span>Continuar</span> ➔
                    </div>
                `;
            } else if (isGuidedDone && guidedProgress.stars) {
                footerHtml = `
                    <div class="level-card-stars">
                        ${'⭐'.repeat(guidedProgress.stars)} <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">(${guidedProgress.score} pts)</span>
                    </div>
                    <div class="level-card-action">
                        <span>Repasar</span> ➔
                    </div>
                `;
            } else {
                footerHtml = `
                    <div class="level-card-status-label">
                        <span>✨</span> <span>Listo para jugar</span>
                    </div>
                    <div class="level-card-action">
                        <span>Jugar</span> ➔
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="level-card-top">
                    <div class="level-sticker-box">
                        <div class="level-sticker sticker-${catClass}">
                            <span class="sticker-emoji">${visual.icon}</span>
                        </div>
                        <span class="level-mini-badge" title="Misión ${themeConfig.name}">${currentThemeIcon}</span>
                    </div>
                    <div class="level-card-meta">
                        <div class="level-card-num-row">
                            <span class="level-card-number">Nivel ${lvl.id}</span>
                            <span class="level-card-badge ${catClass}">${escapeHtml(lvl.badge)}</span>
                        </div>
                        <div class="level-card-short-title">${escapeHtml(visual.shortTitle)}</div>
                    </div>
                </div>
                <div class="level-card-concept-box">
                    <div class="level-card-code-tag"><code>${escapeHtml(visual.tag)}</code></div>
                    <div class="level-card-desc">${escapeHtml(lvl.title)}</div>
                </div>
                <div class="level-card-footer">
                    ${footerHtml}
                </div>
            `;

            // Libertad total para jugar cualquier nivel en cualquier orden
            card.addEventListener('click', () => {
                window.soundFX.playClick();
                this.showWorkspace(lvl.id);
            });

            grid.appendChild(card);
        });
    }

    showWorkspace(levelNum, mode = 'guided') {
        if (levelNum) {
            this.currentLevel = levelNum;
        }
        this.currentMode = mode || 'guided';

        document.getElementById('welcome-screen').style.display = 'none';
        const levelsScreen = document.getElementById('levels-screen');
        if (levelsScreen) levelsScreen.style.display = 'none';
        document.getElementById('app-workspace').style.display = 'flex';

        this.loadLevel(this.currentLevel, this.currentMode);

        // Mostrar inicialmente Misión, Objetivo y Concepto en modal
        this.showMissionBriefingModal();

        // Múltiples pasadas de refresco para garantizar cálculo exacto tras cambios de visibilidad
        [10, 80, 200].forEach(delay => {
            setTimeout(() => {
                if (this.editor) {
                    this.editor.refresh();
                }
            }, delay);
        });
    }

    switchMode(newMode) {
        if (newMode === this.currentMode) return;

        // 1. Guardar código actual antes del cambio para no perder borradores
        if (this.editor) {
            window.gameStorage.saveCurrentCode(this.currentLevel, this.editor.getValue(), this.currentMode);
        }

        // 2. Cambiar modo y recargar nivel
        this.currentMode = newMode;
        this.loadLevel(this.currentLevel, newMode);

        if (window.soundFX) window.soundFX.playClick();
        if (newMode === 'intermediate') {
            this.showFeedbackToast('success', '⚡ Modo Intermedio activado: Hoja en blanco. Construye el HTML completo sin ejemplos.');
        } else {
            this.showFeedbackToast('success', '🌱 Modo Guiado activado: Código inicial y ejemplos disponibles.');
        }
    }

    selectTheme(themeId) {
        window.soundFX.playClick();
        this.selectedTheme = themeId;
        window.gameStorage.setTheme(themeId);
        this.showLevelsScreen();
    }

    toggleUiMode() {
        const currentMode = document.documentElement.getAttribute('data-theme') || 'dark';
        const newMode = currentMode === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newMode);
        window.gameStorage.setUiMode(newMode);

        const icon = document.getElementById('theme-toggle-icon');
        if (icon) {
            icon.textContent = newMode === 'dark' ? '🌙' : '☀️';
        }
    }

    loadLevel(levelNum, mode = this.currentMode) {
        this.currentLevel = levelNum;
        this.currentMode = mode || 'guided';
        window.gameStorage.setCurrentLevel(levelNum);

        const levelData = window.LEVELS_DATA.find(l => l.id === levelNum) || window.LEVELS_DATA[0];
        const themeConfig = window.THEMES_CONFIG[this.selectedTheme] || window.THEMES_CONFIG.space;
        const themeLevelInfo = levelData.themes[this.selectedTheme] || levelData.themes.space;
        const visual = (window.LEVEL_VISUALS && window.LEVEL_VISUALS[levelNum]) || { icon: '🎯' };

        const isIntermediate = this.currentMode === 'intermediate';

        // Actualizar pestañas del selector de dificultad
        const guidedBtn = document.getElementById('mode-guided-btn');
        const intermediateBtn = document.getElementById('mode-intermediate-btn');
        if (guidedBtn) {
            guidedBtn.classList.toggle('active', !isIntermediate);
            guidedBtn.setAttribute('aria-selected', !isIntermediate ? 'true' : 'false');
        }
        if (intermediateBtn) {
            intermediateBtn.classList.toggle('active', isIntermediate);
            intermediateBtn.setAttribute('aria-selected', isIntermediate ? 'true' : 'false');
        }

        // Actualizar Header
        document.getElementById('header-brand-name').textContent = themeConfig.brand;
        document.getElementById('header-level-badge').textContent = isIntermediate
            ? `${visual.icon} Nivel ${levelData.id}/25 ⚡ Intermedio`
            : `${visual.icon} Nivel ${levelData.id}/25`;
        document.getElementById('header-total-score').textContent = window.gameStorage.getTotalScore();
        document.getElementById('header-total-stars').textContent = window.gameStorage.getTotalStars();

        // Actualizar Panel de Instrucciones
        const missionInfo = (isIntermediate && themeLevelInfo.intermediate)
            ? themeLevelInfo.intermediate
            : themeLevelInfo;

        document.getElementById('mission-category-badge').textContent = isIntermediate
            ? `⚡ ${levelData.badge} (Reto Intermedio)`
            : `${visual.icon} ${levelData.badge}`;
        document.getElementById('mission-title').textContent = isIntermediate
            ? `⚡ ${missionInfo.missionTitle}`
            : `${visual.icon} ${missionInfo.missionTitle}`;
        document.getElementById('mission-instructions').textContent = missionInfo.instructions;
        
        // Objetivo: en intermedio se enfatiza la estructura completa desde cero
        const targetDesc = isIntermediate
            ? `Construye el documento HTML5 completo desde cero (<!DOCTYPE html>, <html>, <head> con <title> y <body>) y resuelve: ${missionInfo.targetDescription}`
            : missionInfo.targetDescription;
        document.getElementById('mission-target').textContent = targetDesc;
        document.getElementById('mission-theory').textContent = levelData.theory;
        document.getElementById('mission-example-code').textContent = levelData.exampleCode;

        // Mostrar u ocultar sección de ejemplo vs tarjeta informativa del modo intermedio
        const exampleSection = document.getElementById('mission-example-section');
        const intermediateBox = document.getElementById('intermediate-guide-box');
        if (exampleSection) exampleSection.style.display = isIntermediate ? 'none' : 'block';
        if (intermediateBox) intermediateBox.style.display = isIntermediate ? 'flex' : 'none';

        // Actualizar Pistas y Contador de Intentos para el modo activo
        const hintBox = document.getElementById('hint-content-box');
        hintBox.textContent = missionInfo.hint;
        hintBox.classList.remove('visible');

        const isHintAlreadyUsed = window.gameStorage.isHintUsed(this.currentLevel);
        const hintBtn = document.getElementById('get-hint-btn');
        if (isHintAlreadyUsed) {
            hintBox.classList.add('visible');
            hintBtn.style.opacity = '0.6';
            hintBtn.innerHTML = `💡 Pista desbloqueada`;
        } else {
            hintBtn.style.opacity = '1';
            hintBtn.innerHTML = `💡 Pista <span class="hint-cost-badge">-10 pts</span>`;
        }

        const attempts = window.gameStorage.getLevelAttempts(this.currentLevel, this.currentMode);
        document.getElementById('current-attempts-count').textContent = `Intento: #${attempts}`;

        // Cargar código en Editor:
        // Si es modo intermedio: carga borrador guardado o deja hoja en blanco ""
        // Si es modo guiado: carga borrador guiado o el starterCode
        const savedData = window.gameStorage.getLevelData(this.currentLevel, this.currentMode);
        let codeToLoad = '';
        if (isIntermediate) {
            codeToLoad = (savedData && savedData.code !== undefined) ? savedData.code : '';
        } else {
            codeToLoad = (savedData && savedData.code !== undefined) ? savedData.code : themeLevelInfo.starterCode;
        }

        if (this.editor) {
            this.editor.setValue(codeToLoad);
            this.editor.clearHistory();
            setTimeout(() => {
                if (this.editor) this.editor.refresh();
            }, 30);
        }

        // Ocultar toasts previos
        this.hideFeedbackToast();

        // Actualizar visibilidad del botón "Pasar a Reto Intermedio"
        const interBtn = document.getElementById('go-to-intermediate-btn');
        if (interBtn) {
            if (isIntermediate) {
                interBtn.style.display = 'none';
            } else {
                const guidedData = window.gameStorage.getLevelData(this.currentLevel, 'guided');
                const isGuidedCompleted = guidedData && guidedData.completed;
                interBtn.style.display = isGuidedCompleted ? 'inline-flex' : 'none';
            }
        }

        // Actualizar preview en iframe
        this.updatePreview();
    }

    resetCurrentLevelCode() {
        const levelData = window.LEVELS_DATA.find(l => l.id === this.currentLevel);
        if (!levelData) return;
        const themeLevelInfo = levelData.themes[this.selectedTheme] || levelData.themes.space;
        if (this.editor) {
            const resetVal = this.currentMode === 'intermediate' ? '' : themeLevelInfo.starterCode;
            this.editor.setValue(resetVal);
        }
        this.updatePreview();
    }

    updatePreview() {
        const iframe = document.getElementById('preview-iframe');
        if (!iframe || !this.editor) return;

        const code = this.editor.getValue() || '';
        const lower = code.toLowerCase();
        let finalHtml = code;

        // Si el estudiante escribe etiquetas sueltas sin <html> o <body>,
        // envolverlas automáticamente en la estructura estándar HTML5
        if (!lower.includes('<html') && !lower.includes('<body')) {
            finalHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Vista Previa</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 16px;
      margin: 0;
      color: #1e293b;
      line-height: 1.5;
    }
  </style>
</head>
<body>
${code}
</body>
</html>`;
        }

        // 1. Intentar actualizar vía contentDocument directamente (inmediato y sin parpadeo)
        try {
            const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
            if (doc) {
                doc.open();
                doc.write(finalHtml);
                doc.close();
                return;
            }
        } catch (e) {
            // Fallback en caso de bloqueo de sandbox
        }

        // 2. Fallback estándar mediante srcdoc
        iframe.srcdoc = finalHtml;
    }

    revealHint() {
        const hintBox = document.getElementById('hint-content-box');
        if (hintBox.classList.contains('visible')) return;

        const isAlreadyUsed = window.gameStorage.isHintUsed(this.currentLevel);
        if (!isAlreadyUsed) {
            window.gameStorage.setHintUsed(this.currentLevel);
        }

        window.soundFX.playHint();
        hintBox.classList.add('visible');

        const hintBtn = document.getElementById('get-hint-btn');
        hintBtn.style.opacity = '0.6';
        hintBtn.innerHTML = `💡 Pista desbloqueada`;
    }

    validateCurrentLevel() {
        const levelData = window.LEVELS_DATA.find(l => l.id === this.currentLevel);
        if (!levelData) return;

        const rawCode = this.editor.getValue();
        const result = window.codeValidator.validate(levelData, rawCode, this.selectedTheme, this.currentMode);

        const currentAttempts = window.gameStorage.getLevelAttempts(this.currentLevel, this.currentMode);

        if (!result.valid) {
            // Error en la validación
            window.soundFX.playError();
            const nextAttempts = window.gameStorage.incrementAttempts(this.currentLevel, this.currentMode);
            document.getElementById('current-attempts-count').textContent = `Intento: #${nextAttempts}`;
            this.showFeedbackToast('error', `❌ ${result.error}`);
            return;
        }

        // ¡Código Válido!
        window.soundFX.playSuccess();
        this.hideFeedbackToast();

        // Cálculo de Puntuación
        let stars = 5;
        let baseScore = 100;

        if (currentAttempts === 1) {
            stars = 5;
            baseScore = 100;
        } else if (currentAttempts === 2) {
            stars = 4;
            baseScore = 80;
        } else if (currentAttempts === 3) {
            stars = 3;
            baseScore = 60;
        } else if (currentAttempts === 4) {
            stars = 2;
            baseScore = 40;
        } else {
            stars = 1;
            baseScore = 40;
        }

        // Bonificación especial por resolver el nivel en modo Intermedio (hoja en blanco)
        if (this.currentMode === 'intermediate') {
            baseScore += 25;
        }

        // Descuento de pista si se utilizó en este nivel
        const usedHint = window.gameStorage.isHintUsed(this.currentLevel);
        const hintDeduction = usedHint ? 10 : 0;
        const finalScore = Math.max(10, baseScore - hintDeduction);

        // Guardar progreso en localStorage para el modo actual
        window.gameStorage.saveLevelCompletion(this.currentLevel, stars, finalScore, rawCode, this.currentMode);

        // Actualizar datos del header
        document.getElementById('header-total-score').textContent = window.gameStorage.getTotalScore();
        document.getElementById('header-total-stars').textContent = window.gameStorage.getTotalStars();

        if (this.currentMode === 'guided') {
            // En modo guiado: mostrar botón "Pasar a Reto Intermedio" y notificar sin abrir el modal de victoria todavía
            const interBtn = document.getElementById('go-to-intermediate-btn');
            if (interBtn) {
                interBtn.style.display = 'inline-flex';
            }

            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 75,
                    spread: 65,
                    origin: { y: 0.65 }
                });
            }

            this.showFeedbackToast('success', `🎉 ¡Respuesta guiada correcta (+${finalScore} pts)! Haz clic en «Pasar a Reto Intermedio ➔» para continuar.`);
        } else {
            // En modo intermedio: el nivel está completamente superado. Ocultar botón y recién ahí mostrar la ventana de éxito con estrellas y puntaje
            const interBtn = document.getElementById('go-to-intermediate-btn');
            if (interBtn) {
                interBtn.style.display = 'none';
            }

            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 130,
                    spread: 85,
                    origin: { y: 0.6 }
                });
            }

            // Mostrar Modal de Victoria con estrellas y desglose de puntos
            this.showSuccessModal(stars, finalScore, currentAttempts, hintDeduction);
        }
    }

    showSuccessModal(stars, scoreEarned, attempts, hintDeduction) {
        const modal = document.getElementById('success-modal');
        const starsContainer = document.getElementById('modal-stars-wrapper');
        starsContainer.innerHTML = '';

        for (let i = 1; i <= 5; i++) {
            const starSpan = document.createElement('span');
            starSpan.className = 'star-pop';
            starSpan.style.animationDelay = `${i * 0.1}s`;
            starSpan.textContent = i <= stars ? '⭐' : '☆';
            starsContainer.appendChild(starSpan);
        }

        const titleElem = document.getElementById('success-modal-title');
        if (titleElem) {
            titleElem.textContent = `¡Nivel ${this.currentLevel} Completado! 🎉`;
        }
        const descElem = document.getElementById('success-modal-desc');
        if (descElem) {
            descElem.textContent = '¡Excelente trabajo! Has superado el reto intermedio en hoja en blanco.';
        }

        document.getElementById('modal-earned-score').textContent = `+${scoreEarned} pts`;
        document.getElementById('modal-attempts-summary').textContent = attempts;
        document.getElementById('modal-hint-summary').textContent = hintDeduction > 0 ? `-${hintDeduction} pts` : '0';

        const nextBtn = document.getElementById('next-level-modal-btn');
        if (this.currentLevel >= 25) {
            nextBtn.textContent = '🏆 ¡Juego Completado!';
        } else {
            nextBtn.textContent = `Avanzar al Nivel ${this.currentLevel + 1} ➔`;
        }

        modal.classList.add('open');
    }

    showFeedbackToast(type, message) {
        const toast = document.getElementById('feedback-toast');
        if (!toast) return;
        toast.className = `feedback-toast ${type}`;
        document.getElementById('feedback-toast-message').textContent = message;
        toast.style.display = 'flex';
        if (type === 'success') {
            clearTimeout(this.toastTimeout);
            this.toastTimeout = setTimeout(() => this.hideFeedbackToast(), 4500);
        }
    }

    hideFeedbackToast() {
        const toast = document.getElementById('feedback-toast');
        if (toast) toast.style.display = 'none';
    }

    setMissionModalStep(stepNumber) {
        const step = Math.max(1, Math.min(3, stepNumber));
        this.currentMissionStep = step;

        // 1. Actualizar botones del stepper
        for (let i = 1; i <= 3; i++) {
            const stepBtn = document.getElementById(`stepper-step-${i}`);
            if (stepBtn) {
                stepBtn.classList.toggle('active', i === step);
                stepBtn.classList.toggle('completed', i < step);
            }

            const view = document.getElementById(`mission-step-view-${i}`);
            if (view) {
                view.style.display = i === step ? 'flex' : 'none';
                view.classList.toggle('active', i === step);
            }
        }

        // 2. Actualizar botones de navegación en el footer
        const prevBtn = document.getElementById('mission-step-prev-btn');
        const nextBtn = document.getElementById('mission-step-next-btn');
        const startBtn = document.getElementById('start-coding-btn');

        if (prevBtn) {
            if (step === 1) {
                prevBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'inline-flex';
                prevBtn.innerHTML = step === 2
                    ? '<span>⬅</span> <span>Anterior: Misión</span>'
                    : '<span>⬅</span> <span>Anterior: Objetivo</span>';
            }
        }

        if (nextBtn) {
            if (step < 3) {
                nextBtn.style.display = 'inline-flex';
                nextBtn.innerHTML = step === 1
                    ? '<span>Siguiente: Ver Objetivo</span> <span>➔</span>'
                    : '<span>Siguiente: Ver Concepto</span> <span>➔</span>';
            } else {
                nextBtn.style.display = 'none';
            }
        }

        if (startBtn) {
            startBtn.style.display = step === 3 ? 'inline-flex' : 'none';
        }

        if (window.soundFX) {
            window.soundFX.playClick();
        }
    }

    showMissionBriefingModal(startStep = 1) {
        const modal = document.getElementById('mission-modal');
        if (!modal) return;

        const levelData = window.LEVELS_DATA.find(l => l.id === this.currentLevel) || window.LEVELS_DATA[0];
        const themeLevelInfo = levelData.themes[this.selectedTheme] || levelData.themes.space;
        const visual = (window.LEVEL_VISUALS && window.LEVEL_VISUALS[this.currentLevel]) || { icon: '🎯' };
        const isIntermediate = this.currentMode === 'intermediate';

        const missionInfo = (isIntermediate && themeLevelInfo.intermediate)
            ? themeLevelInfo.intermediate
            : themeLevelInfo;

        const targetDesc = isIntermediate
            ? `Construye el documento HTML5 completo desde cero (<!DOCTYPE html>, <html>, <head> con <title> y <body>) y resuelve: ${missionInfo.targetDescription}`
            : missionInfo.targetDescription;

        // Poblar contenido del modal
        const levelTag = document.getElementById('mission-modal-level-tag');
        if (levelTag) {
            levelTag.textContent = `Nivel ${levelData.id}/25 ${isIntermediate ? '⚡ Intermedio' : '🌱 Guiado'}`;
        }

        const catBadge = document.getElementById('mission-modal-cat-badge');
        if (catBadge) {
            catBadge.textContent = `${visual.icon} ${levelData.badge}`;
        }

        const titleElem = document.getElementById('mission-modal-title');
        if (titleElem) {
            titleElem.textContent = `${visual.icon} ${missionInfo.missionTitle}`;
        }

        const instrElem = document.getElementById('mission-modal-instructions');
        if (instrElem) {
            instrElem.textContent = missionInfo.instructions;
        }

        const targetElem = document.getElementById('mission-modal-target');
        if (targetElem) {
            targetElem.textContent = targetDesc;
        }

        const theoryElem = document.getElementById('mission-modal-theory');
        if (theoryElem) {
            theoryElem.textContent = levelData.theory;
        }

        // Posicionar en el paso 1 (Misión) inicialmente
        this.setMissionModalStep(startStep || 1);

        // Abrir modal con estado limpio
        modal.classList.remove('docking-to-sidebar');
        modal.classList.add('open');

        if (window.soundFX) {
            window.soundFX.playHint();
        }
    }

    closeMissionBriefingModal() {
        const modal = document.getElementById('mission-modal');
        if (!modal || !modal.classList.contains('open')) return;

        // Efecto visual de docking hacia el panel lateral izquierdo
        modal.classList.add('docking-to-sidebar');

        const lateralPanel = document.querySelector('.instructions-panel');
        if (lateralPanel) {
            lateralPanel.classList.add('dock-target-pulse');
            setTimeout(() => {
                lateralPanel.classList.remove('dock-target-pulse');
            }, 1400);
        }

        setTimeout(() => {
            modal.classList.remove('open');
            modal.classList.remove('docking-to-sidebar');
            if (this.editor) {
                this.editor.refresh();
                this.editor.focus();
            }
        }, 320);
    }

    openLevelsModal() {
        const modal = document.getElementById('levels-modal');
        const grid = document.getElementById('levels-grid-container');
        grid.innerHTML = '';

        const maxUnlocked = Math.min(25, Math.max(...Object.keys(window.gameStorage.state.levelProgress).map(Number), 1) + 1);

        window.LEVELS_DATA.forEach(lvl => {
            const card = document.createElement('div');
            const progress = window.gameStorage.getLevelData(lvl.id);
            const isCompleted = progress && progress.completed;
            const isCurrent = lvl.id === this.currentLevel;
            const isUnlocked = lvl.id <= maxUnlocked || isCompleted;

            card.className = `level-grid-card ${isCurrent ? 'current' : ''} ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''}`;

            let starsText = '';
            if (isCompleted && progress.stars) {
                starsText = '⭐'.repeat(progress.stars);
            } else if (isUnlocked) {
                starsText = 'Desbloqueado';
            } else {
                starsText = '🔒 Bloqueado';
            }

            card.innerHTML = `
                <div class="num">#${lvl.id}</div>
                <div style="font-size:0.75rem; font-weight:600; line-height:1.2; text-overflow:ellipsis;">${escapeHtml(lvl.badge)}</div>
                <div class="stars">${starsText}</div>
            `;

            if (isUnlocked) {
                card.addEventListener('click', () => {
                    window.soundFX.playClick();
                    modal.classList.remove('open');
                    this.loadLevel(lvl.id, 'guided');
                    this.showMissionBriefingModal();
                });
            }

            grid.appendChild(card);
        });

        modal.classList.add('open');
    }

    // =========================================================
    // MÉTODOS DE DESCARGA DE CÓDIGO (INDIVIDUAL Y COMPLETO EN ZIP)
    // =========================================================

    sanitizeFilename(str) {
        if (!str) return 'ejercicio';
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "") || 'ejercicio';
    }

    formatDownloadableHtml(levelNum, code, themeId) {
        const levelData = (window.LEVELS_DATA && window.LEVELS_DATA.find(l => l.id === levelNum)) || { title: `Nivel ${levelNum}`, badge: 'HTML' };
        const themeConfig = (window.THEMES_CONFIG && window.THEMES_CONFIG[themeId || this.selectedTheme]) || { brand: 'Academia Web', name: 'Web Dev' };
        const raw = code || '';
        const lower = raw.toLowerCase();

        // Si el estudiante ya escribió <!doctype o <html o <body, preservar su código original
        if (lower.includes('<!doctype') || lower.includes('<html') || lower.includes('<body')) {
            return `<!-- ========================================================
     ACADEMIA WEB - CÓDIGO DEL ESTUDIANTE
     Misión: ${themeConfig.name} (${themeConfig.brand})
     Nivel ${levelNum}: ${levelData.title} [${levelData.badge}]
     ======================================================== -->
${raw}`;
        }

        // Si es un fragmento, envolverlo en plantilla HTML5 completa con UTF-8 para apertura directa
        return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nivel ${levelNum}: ${levelData.title} | ${themeConfig.name}</title>
  <style>
    /* Estilos base para visualización limpia */
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 24px;
      margin: 0;
      color: #1e293b;
      line-height: 1.6;
      background-color: #ffffff;
    }
  </style>
</head>
<body>
<!-- ========================================================
     ACADEMIA WEB - CÓDIGO DEL ESTUDIANTE
     Misión: ${themeConfig.name} (${themeConfig.brand})
     Nivel ${levelNum}: ${levelData.title} [${levelData.badge}]
     ======================================================== -->

${raw}

</body>
</html>`;
    }

    triggerFileDownload(filename, content, mimeType = 'text/html;charset=utf-8') {
        const blob = (content instanceof Blob) ? content : new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1500);
    }

    downloadCurrentLevelCode() {
        const levelData = (window.LEVELS_DATA && window.LEVELS_DATA.find(l => l.id === this.currentLevel)) || { id: this.currentLevel, title: `Nivel ${this.currentLevel}` };
        const currentCode = this.editor ? this.editor.getValue() : (window.gameStorage.getLevelData(this.currentLevel)?.code || '');

        if (!currentCode.trim()) {
            this.showFeedbackToast('error', '⚠️ No hay código para descargar en este nivel.');
            return;
        }

        const fullHtml = this.formatDownloadableHtml(this.currentLevel, currentCode, this.selectedTheme);
        const safeTitle = this.sanitizeFilename(levelData.title);
        const filename = `nivel-${String(this.currentLevel).padStart(2, '0')}-${safeTitle}.html`;

        this.triggerFileDownload(filename, fullHtml, 'text/html;charset=utf-8');

        if (window.soundFX) window.soundFX.playSuccess();
        this.showFeedbackToast('success', `📥 ¡Descargado! Archivo: ${filename}`);

        // Animación breve en los botones de descarga
        document.querySelectorAll('#download-current-btn, #toolbar-download-current-btn, #modal-download-code-btn').forEach(btn => {
            btn.classList.add('btn-download-success');
            setTimeout(() => btn.classList.remove('btn-download-success'), 1500);
        });
    }

    async downloadAllLevelsCode() {
        if (typeof JSZip === 'undefined') {
            alert('La librería para comprimir archivos ZIP no está cargada. Por favor recarga la página.');
            return;
        }

        const themeConfig = window.THEMES_CONFIG[this.selectedTheme] || window.THEMES_CONFIG.space;
        const zip = new JSZip();

        // 1. Guardar primero el código actual del editor para asegurar que incluya los últimos cambios
        if (this.editor) {
            window.gameStorage.saveCurrentCode(this.currentLevel, this.editor.getValue());
        }

        let completedCount = 0;
        let modifiedCount = 0;
        const levelsSummary = [];

        window.LEVELS_DATA.forEach(lvl => {
            const savedData = window.gameStorage.getLevelData(lvl.id);
            const themeInfo = (lvl.themes && (lvl.themes[this.selectedTheme] || lvl.themes.space)) || {};
            const isCurrent = lvl.id === this.currentLevel;
            
            let code = '';
            let isUserCode = false;
            let isCompleted = false;
            let stars = 0;
            let score = 0;

            if (isCurrent && this.editor) {
                code = this.editor.getValue();
                isUserCode = true;
                if (savedData) {
                    isCompleted = !!savedData.completed;
                    stars = savedData.stars || 0;
                    score = savedData.score || 0;
                }
            } else if (savedData && savedData.code) {
                code = savedData.code;
                isUserCode = true;
                isCompleted = !!savedData.completed;
                stars = savedData.stars || 0;
                score = savedData.score || 0;
            } else {
                code = themeInfo.starterCode || '';
                isUserCode = false;
                isCompleted = false;
            }

            if (isCompleted) completedCount++;
            if (isUserCode) modifiedCount++;

            const safeTitle = this.sanitizeFilename(lvl.title);
            const filename = `nivel-${String(lvl.id).padStart(2, '0')}-${safeTitle}.html`;

            // Si el nivel tiene código realizado por el estudiante o está completado, va en la raíz
            if (isUserCode) {
                const fullHtml = this.formatDownloadableHtml(lvl.id, code, this.selectedTheme);
                zip.file(filename, fullHtml);
            } else {
                // Si aún no lo ha tocado, lo incluimos en la carpeta de plantillas pendientes
                const starterHtml = this.formatDownloadableHtml(lvl.id, code, this.selectedTheme);
                zip.file(`plantillas_pendientes/${filename}`, starterHtml);
            }

            levelsSummary.push({
                id: lvl.id,
                title: lvl.title,
                badge: lvl.badge,
                filename: filename,
                isUserCode: isUserCode,
                isCompleted: isCompleted,
                stars: stars,
                score: score
            });
        });

        // 2. Generar el reporte interactivo resumen_progreso.html en la raíz del ZIP
        const reportHtml = this.generateProgressReportHtml({
            themeName: themeConfig.name,
            themeBrand: themeConfig.brand,
            totalStars: window.gameStorage.getTotalStars(),
            totalScore: window.gameStorage.getTotalScore(),
            completedCount: completedCount,
            modifiedCount: modifiedCount,
            levels: levelsSummary
        });
        zip.file('resumen_progreso.html', reportHtml);

        // 3. Generar LEEME.txt informativo
        const readmeText = `========================================================
ACADEMIA WEB JUVENIL - PORTAFOLIO DE CÓDIGO
========================================================
Misión: ${themeConfig.name} (${themeConfig.brand})
Fecha de descarga: ${new Date().toLocaleDateString('es-ES')} ${new Date().toLocaleTimeString('es-ES')}
Puntaje total: ${window.gameStorage.getTotalScore()} pts
Estrellas obtenidas: ${window.gameStorage.getTotalStars()} ⭐
Niveles completados: ${completedCount} de 25
Ejercicios con código propio: ${modifiedCount} de 25

CONTENIDO DE ESTA CARPETA:
1. resumen_progreso.html -> Haz doble clic para ver tu panel visual de logros y abrir tus ejercicios.
2. nivel-XX-[nombre].html -> Tus soluciones a los ejercicios que resolviste. Puedes abrirlos con cualquier navegador (Chrome, Edge, Firefox).
3. plantillas_pendientes/ -> Plantillas de los ejercicios que aún tienes pendientes de resolver.

¡Felicitaciones por tus avances en desarrollo web con HTML y CSS!
========================================================`;
        zip.file('LEEME.txt', readmeText);

        // Notificar inicio de empaquetado
        this.showFeedbackToast('success', '📦 Comprimiendo todos tus ejercicios en ZIP...');

        try {
            const zipBlob = await zip.generateAsync({ type: 'blob' });
            const dateStr = new Date().toISOString().slice(0, 10);
            const zipFilename = `codigos-academia-web-${this.selectedTheme}-${dateStr}.zip`;

            this.triggerFileDownload(zipFilename, zipBlob, 'application/zip');

            if (window.soundFX) window.soundFX.playSuccess();
            this.showFeedbackToast('success', `🎉 ¡ZIP descargado con éxito! (${modifiedCount} ejercicios realizados)`);

            document.querySelectorAll('#download-all-btn, #toolbar-download-all-btn, #levels-download-all-btn').forEach(btn => {
                btn.classList.add('btn-download-success');
                setTimeout(() => btn.classList.remove('btn-download-success'), 1500);
            });
        } catch (err) {
            console.error('Error al generar archivo ZIP:', err);
            this.showFeedbackToast('error', '❌ Ocurrió un error al generar el archivo ZIP.');
        }
    }

    generateProgressReportHtml(data) {
        const rowsHtml = data.levels.map(lvl => {
            const statusBadge = lvl.isCompleted 
                ? `<span style="display:inline-block; padding:3px 10px; border-radius:12px; font-weight:700; font-size:12px; background:#dcfce7; color:#15803d; border:1px solid #86efac;">✅ Completado</span>`
                : (lvl.isUserCode 
                    ? `<span style="display:inline-block; padding:3px 10px; border-radius:12px; font-weight:700; font-size:12px; background:#fef9c3; color:#a16207; border:1px solid #fde047;">📝 En Progreso</span>`
                    : `<span style="display:inline-block; padding:3px 10px; border-radius:12px; font-weight:700; font-size:12px; background:#f1f5f9; color:#64748b; border:1px solid #cbd5e1;">⏳ Pendiente</span>`);

            const starsHtml = lvl.isCompleted ? '⭐'.repeat(lvl.stars) : '—';
            const linkHref = lvl.isUserCode ? lvl.filename : `plantillas_pendientes/${lvl.filename}`;
            const linkText = lvl.isUserCode ? '🚀 Ver Solución' : '📄 Ver Plantilla';

            return `
            <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px; font-weight: 700; color: #0284c7;">#${lvl.id}</td>
                <td style="padding: 12px; font-weight: 600; color: #1e293b;">${escapeHtml(lvl.title)}</td>
                <td style="padding: 12px;"><span style="background:#f1f5f9; color:#475569; padding:2px 8px; border-radius:6px; font-size:12px; font-family:monospace;">${escapeHtml(lvl.badge)}</span></td>
                <td style="padding: 12px;">${statusBadge}</td>
                <td style="padding: 12px; font-size: 14px;">${starsHtml}</td>
                <td style="padding: 12px; font-weight: 600; color: #0284c7;">${lvl.score > 0 ? lvl.score + ' pts' : '—'}</td>
                <td style="padding: 12px;"><a href="${linkHref}" style="display:inline-block; padding:5px 12px; background:#0284c7; color:#ffffff; text-decoration:none; border-radius:6px; font-size:12px; font-weight:600;" target="_blank">${linkText}</a></td>
            </tr>`;
        }).join('');

        return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio de Logros | ${data.themeName}</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #f8fafc; padding: 32px 16px; line-height: 1.5; }
        .container { max-width: 1000px; margin: 0 auto; background: #1e293b; border-radius: 16px; padding: 32px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid #334155; }
        .header { text-align: center; margin-bottom: 28px; }
        .header h1 { font-size: 28px; color: #38bdf8; margin-bottom: 8px; }
        .header p { color: #94a3b8; font-size: 15px; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-bottom: 28px; }
        .stat-card { background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 16px; text-align: center; }
        .stat-val { font-size: 26px; font-weight: 800; color: #38bdf8; margin-bottom: 4px; }
        .stat-lbl { font-size: 13px; color: #94a3b8; text-transform: uppercase; font-weight: 600; }
        .table-wrap { overflow-x: auto; background: #ffffff; border-radius: 12px; }
        table { width: 100%; border-collapse: collapse; text-align: left; }
        th { background: #f8fafc; padding: 14px 12px; font-size: 12px; color: #475569; text-transform: uppercase; font-weight: 700; border-bottom: 2px solid #e2e8f0; }
        .footer { text-align: center; margin-top: 24px; color: #64748b; font-size: 13px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏆 Academia Web Juvenil — Reporte de Avances</h1>
            <p>Misión: <strong>${data.themeBrand}</strong> | Generado el ${new Date().toLocaleDateString('es-ES')}</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-val">⭐ ${data.totalStars}</div>
                <div class="stat-lbl">Estrellas Ganadas</div>
            </div>
            <div class="stat-card">
                <div class="stat-val">🏆 ${data.totalScore}</div>
                <div class="stat-lbl">Puntos Totales</div>
            </div>
            <div class="stat-card">
                <div class="stat-val">✅ ${data.completedCount}/25</div>
                <div class="stat-lbl">Niveles Completados</div>
            </div>
            <div class="stat-card">
                <div class="stat-val">📝 ${data.modifiedCount}/25</div>
                <div class="stat-lbl">Ejercicios Realizados</div>
            </div>
        </div>

        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Desafío</th>
                        <th>Concepto</th>
                        <th>Estado</th>
                        <th>Estrellas</th>
                        <th>Puntaje</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
            </table>
        </div>

        <div class="footer">
            Academia Web Gamificada — Desafíos interactivos de HTML, CSS, Tablas y Flexbox.
        </div>
    </div>
</body>
</html>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.appController = new AppController();
});
