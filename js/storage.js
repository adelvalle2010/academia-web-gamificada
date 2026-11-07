// Manejo de persistencia con localStorage para la academia web
const STORAGE_KEY = 'edu_code_adventure_save_v1';

const defaultState = {
    selectedTheme: 'space', // 'space' | 'vet' | 'cafe' | 'rock'
    uiMode: 'dark',        // 'dark' | 'light'
    currentLevel: 1,
    totalScore: 0,
    totalStars: 0,
    hintsUsed: {},         // { [levelId]: boolean }
    levelAttempts: {},     // { [levelId]: number }
    levelProgress: {},     // { [levelId]: { completed: boolean, stars: number, score: number, code: string } }
};

// Identificación del archivo de progreso (.json) que se baja y se vuelve a cargar
const PROGRESS_FILE_APP = 'academia-web-gamificada';
const PROGRESS_FILE_VERSION = 1;
const VALID_THEMES = ['space', 'vet', 'cafe', 'rock'];

// Copia nueva del estado inicial (evita compartir los objetos internos entre partidas)
function freshDefaultState() {
    return JSON.parse(JSON.stringify(defaultState));
}

function isPlainObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function toSafeNumber(value, fallback = 0) {
    const n = Number(value);
    return Number.isFinite(n) && n >= 0 ? n : fallback;
}

class GameStorage {
    constructor() {
        this.state = this.loadState();
    }

    loadState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                return { ...freshDefaultState(), ...parsed };
            }
        } catch (e) {
            console.error('Error al cargar datos de localStorage:', e);
        }
        return freshDefaultState();
    }

    saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        } catch (e) {
            console.error('Error al guardar datos en localStorage:', e);
        }
    }

    getTheme() {
        return this.state.selectedTheme || 'space';
    }

    setTheme(theme) {
        this.state.selectedTheme = theme;
        this.saveState();
    }

    getUiMode() {
        return this.state.uiMode || 'dark';
    }

    setUiMode(mode) {
        this.state.uiMode = mode;
        this.saveState();
    }

    getCurrentLevel() {
        return this.state.currentLevel || 1;
    }

    setCurrentLevel(level) {
        this.state.currentLevel = Math.max(1, Math.min(25, level));
        this.saveState();
    }

    getTotalScore() {
        return this.state.totalScore || 0;
    }

    getTotalStars() {
        return this.state.totalStars || 0;
    }

    getKey(levelId, mode = 'guided') {
        return mode === 'intermediate' ? `${levelId}_intermediate` : String(levelId);
    }

    getLevelAttempts(levelId, mode = 'guided') {
        const key = this.getKey(levelId, mode);
        return this.state.levelAttempts[key] || 1;
    }

    incrementAttempts(levelId, mode = 'guided') {
        const key = this.getKey(levelId, mode);
        const current = this.getLevelAttempts(levelId, mode);
        this.state.levelAttempts[key] = current + 1;
        this.saveState();
        return this.state.levelAttempts[key];
    }

    isHintUsed(levelId) {
        return !!this.state.hintsUsed[levelId];
    }

    setHintUsed(levelId) {
        this.state.hintsUsed[levelId] = true;
        this.saveState();
    }

    getLevelData(levelId, mode = 'guided') {
        const key = this.getKey(levelId, mode);
        return this.state.levelProgress[key] || null;
    }

    saveLevelCompletion(levelId, stars, scoreEarned, code, mode = 'guided') {
        const key = this.getKey(levelId, mode);
        const prev = this.state.levelProgress[key];
        const isAlreadyCompleted = prev && prev.completed;

        // Solo sumamos puntuación si es la primera vez que se completa o si superó las estrellas anteriores
        if (!isAlreadyCompleted) {
            this.state.totalScore += scoreEarned;
            this.state.totalStars += stars;
        } else if (stars > prev.stars) {
            // Recompensa adicional si mejora estrellas
            const starsDiff = stars - prev.stars;
            const scoreDiff = Math.max(0, scoreEarned - (prev.score || 0));
            this.state.totalStars += starsDiff;
            this.state.totalScore += scoreDiff;
        }

        this.state.levelProgress[key] = {
            completed: true,
            stars: Math.max(stars, prev ? prev.stars : 0),
            score: Math.max(scoreEarned, prev ? prev.score : 0),
            code: code,
            mode: mode
        };

        this.saveState();
    }

    saveCurrentCode(levelId, code, mode = 'guided') {
        const key = this.getKey(levelId, mode);
        if (!this.state.levelProgress[key]) {
            this.state.levelProgress[key] = { completed: false, stars: 0, score: 0, code: code, mode: mode };
        } else {
            this.state.levelProgress[key].code = code;
        }
        this.saveState();
    }

    isIntermediateCompleted(levelId) {
        const data = this.state.levelProgress[`${levelId}_intermediate`];
        return !!(data && data.completed);
    }

    isGuidedCompleted(levelId) {
        const data = this.state.levelProgress[String(levelId)];
        return !!(data && data.completed);
    }

    resetAll() {
        this.state = freshDefaultState();
        this.saveState();
    }

    // ---------- Archivo de progreso: guardar y cargar en otra computadora ----------

    // Devuelve el contenido del archivo .json con todo el avance actual
    exportProgress() {
        return {
            app: PROGRESS_FILE_APP,
            version: PROGRESS_FILE_VERSION,
            exportedAt: new Date().toISOString(),
            progress: JSON.parse(JSON.stringify(this.state))
        };
    }

    // Lee el texto de un archivo de progreso y devuelve { ok, state, exportedAt } o { ok: false, error }
    parseProgressFile(text) {
        let parsed;
        try {
            parsed = JSON.parse(text);
        } catch (e) {
            return { ok: false, error: 'El archivo no es un archivo de progreso válido (no se pudo leer).' };
        }

        if (!isPlainObject(parsed) || parsed.app !== PROGRESS_FILE_APP || !isPlainObject(parsed.progress)) {
            return { ok: false, error: 'Este archivo no es un progreso de la Academia Web. Elegí el archivo que bajaste con «Guardar progreso».' };
        }

        const src = parsed.progress;
        const state = freshDefaultState();

        if (VALID_THEMES.includes(src.selectedTheme)) state.selectedTheme = src.selectedTheme;
        if (src.uiMode === 'dark' || src.uiMode === 'light') state.uiMode = src.uiMode;
        state.currentLevel = Math.max(1, Math.min(25, Math.round(toSafeNumber(src.currentLevel, 1)) || 1));
        state.totalScore = toSafeNumber(src.totalScore);
        state.totalStars = toSafeNumber(src.totalStars);

        if (isPlainObject(src.hintsUsed)) {
            Object.keys(src.hintsUsed).forEach(key => {
                state.hintsUsed[key] = !!src.hintsUsed[key];
            });
        }

        if (isPlainObject(src.levelAttempts)) {
            Object.keys(src.levelAttempts).forEach(key => {
                state.levelAttempts[key] = Math.max(1, Math.round(toSafeNumber(src.levelAttempts[key], 1)));
            });
        }

        if (isPlainObject(src.levelProgress)) {
            Object.keys(src.levelProgress).forEach(key => {
                const lvl = src.levelProgress[key];
                if (!isPlainObject(lvl)) return;
                state.levelProgress[key] = {
                    completed: !!lvl.completed,
                    stars: Math.min(5, toSafeNumber(lvl.stars)),
                    score: toSafeNumber(lvl.score),
                    code: typeof lvl.code === 'string' ? lvl.code : '',
                    mode: lvl.mode === 'intermediate' ? 'intermediate' : 'guided'
                };
            });
        }

        return { ok: true, state, exportedAt: parsed.exportedAt || null };
    }

    // Resumen para mostrar antes de cargar (o del avance actual)
    summarizeProgress(state = this.state) {
        const entries = Object.entries(state.levelProgress || {});
        const guided = entries.filter(([key, lvl]) => !key.includes('_intermediate') && lvl.completed).length;
        const intermediate = entries.filter(([key, lvl]) => key.includes('_intermediate') && lvl.completed).length;
        return {
            guidedCompleted: guided,
            intermediateCompleted: intermediate,
            totalStars: state.totalStars || 0,
            totalScore: state.totalScore || 0
        };
    }

    hasAnyProgress() {
        const sum = this.summarizeProgress();
        const hasCode = Object.values(this.state.levelProgress || {}).some(lvl => lvl.code);
        return sum.guidedCompleted > 0 || sum.intermediateCompleted > 0 || sum.totalScore > 0 || hasCode;
    }

    // Reemplaza todo el avance de esta computadora por el del archivo
    importProgress(state) {
        this.state = state;
        this.saveState();
    }
}

window.gameStorage = new GameStorage();
