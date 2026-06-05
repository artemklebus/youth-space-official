class YouthSpaceApp {
    constructor(data, i18n) {
        this.data = data;
        this.i18n = i18n;
        this.modal = null;
        this.modalPhoto = null;
        this.modalName = null;
        this.modalDesc = null;
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.renderAll();
        this.setupModal();
        this.initMobileMenu();
        this.initSmoothScroll();
        this.i18n.on('languageChanged', () => this.renderAll());
    }
    
    setupEventListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = btn.getAttribute('data-lang');
                if (lang) {
                    this.i18n.setLanguage(lang);
                    this.updateActiveLangButton(lang);
                }
            });
        });
    }
    
    updateActiveLangButton(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }
    
    renderAll() {
        this.renderOpportunities();
        this.renderTrainings();
        this.renderTeam();
        this.renderNews();
        this.updateTextContent();
    }
    
    renderOpportunities() {
        const container = document.getElementById('opportunitiesGrid');
        if (!container) return;
        container.innerHTML = '';
        
        this.data.opportunities.forEach(opp => {
            const card = Components.createOpportunityCard(opp, (key) => this.i18n.t(key));
            container.appendChild(card);
        });
    }
    
    renderTrainings() {
        const container = document.getElementById('trainingsGrid');
        if (!container) return;
        container.innerHTML = '';
        
        this.data.trainings.forEach(src => {
            const item = Components.createTrainingItem(src, CONFIG.imagePlaceholder);
            container.appendChild(item);
        });
    }
    
    renderTeam() {
        const container = document.getElementById('teamGrid');
        if (!container) return;
        container.innerHTML = '';
        
        this.data.team.forEach(member => {
            const card = Components.createTeamCard(
                member, 
                CONFIG.imagePlaceholder, 
                (m) => this.openModal(m)
            );
            container.appendChild(card);
        });
    }
    
    renderNews() {
        const container = document.getElementById('newsGrid');
        if (!container) return;
        container.innerHTML = '';
        
        this.data.news.forEach(news => {
            const item = Components.createNewsItem(
                news, 
                (key) => this.i18n.t(key),
                this.i18n.getCurrentLanguage()
            );
            container.appendChild(item);
        });
    }
    
    updateTextContent() {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (key) {
                el.textContent = this.i18n.t(key);
            }
        });
    }
    
    setupModal() {
        this.modal = document.getElementById('memberModal');
        this.modalPhoto = document.getElementById('modalPhoto');
        this.modalName = document.getElementById('modalName');
        this.modalDesc = document.getElementById('modalDesc');
        
        document.getElementById('closeModal')?.addEventListener('click', () => this.closeModal());
        this.modal?.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
        
        document.addEventListener('keydown', (e) => {
            if (this.modal?.classList.contains('active') && e.key === 'Escape') {
                this.closeModal();
            }
        });
    }
    
    openModal(member) {
        this.modalPhoto.style.backgroundImage = `url(${member.img})`;
        this.modalPhoto.style.backgroundSize = 'cover';
        this.modalPhoto.style.backgroundPosition = 'center';
        this.modalName.textContent = member.name;
        this.modalDesc.textContent = member.desc;
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        const img = new Image();
        img.src = member.img;
        img.onerror = () => {
            this.modalPhoto.style.backgroundImage = `url(${CONFIG.imagePlaceholder})`;
        };
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    initMobileMenu() {
        const burger = document.getElementById('burger');
        const mobileMenu = document.getElementById('mobileMenu');
        
        burger?.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            burger.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        mobileMenu?.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                burger?.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const i18n = new I18nManager(TRANSLATIONS, CONFIG.defaultLanguage);
    const app = new YouthSpaceApp(DATA, i18n);
    
    const currentLang = i18n.getCurrentLanguage();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        }
    });
});