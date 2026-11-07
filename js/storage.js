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

class GameStorage {
    constructor() {
        this.state = this.loadState();
    }

    loadState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                return { ...defaultState, ...parsed };
            }
        } catch (e) {
            console.error('Error al cargar datos de localStorage:', e);
        }
        return { ...defaultState };
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
        this.state = { ...defaultState };
        this.saveState();
    }
}

window.gameStorage = new GameStorage();
