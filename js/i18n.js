class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(cb => cb(data));
        }
    }
}

class I18nManager extends EventEmitter {
    constructor(translations, defaultLang) {
        super();
        this.translations = translations;
        this.currentLang = localStorage.getItem(CONFIG.localStorageKey) || defaultLang;
    }
    
    t(key) {
        return this.translations[this.currentLang]?.[key] || key;
    }
    
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem(CONFIG.localStorageKey, lang);
            this.emit('languageChanged', lang);
        }
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
}