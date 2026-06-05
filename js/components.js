class Components {
    static escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
    
    static createTrainingItem(src, placeholder) {
        const item = document.createElement('div');
        item.className = 'training-item';
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Training session';
        img.loading = 'lazy';
        img.onerror = () => { img.src = placeholder; };
        item.appendChild(img);
        return item;
    }
    
    static createTeamCard(member, placeholder, onClick) {
        const card = document.createElement('div');
        card.className = 'member-card';
        
        const img = document.createElement('img');
        img.className = 'member-photo';
        img.src = member.img;
        img.alt = member.name;
        img.loading = 'lazy';
        img.onerror = function() {
            this.src = placeholder;
            this.alt = 'Фото тимчасово недоступне';
        };
        
        const info = document.createElement('div');
        info.className = 'member-info';
        info.innerHTML = `<h3>${Components.escapeHtml(member.name)}</h3>`;
        
        card.appendChild(img);
        card.appendChild(info);
        card.addEventListener('click', () => onClick(member));
        
        return card;
    }
    
    static createOpportunityCard(opp, t) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-icon" style="background: ${opp.color}">
                <i class="fas ${opp.icon}"></i>
            </div>
            <h3>${t(opp.titleKey)}</h3>
            <p>${t(opp.descKey)}</p>
        `;
        return card;
    }
    
    static createNewsItem(news, t, currentLang) {
        const item = document.createElement('div');
        item.className = 'news-item';
        
        const date = new Date(news.date).toLocaleDateString(
            currentLang === 'UA' ? 'uk-UA' : 'en-US'
        );
        
        item.innerHTML = `
            <img src="${news.img}" alt="${t(news.titleKey)}" loading="lazy">
            <div class="news-content">
                <div class="news-date">${date}</div>
                <h3>${t(news.titleKey)}</h3>
                <p>${t(news.descKey)}</p>
                <a href="${news.link}" target="_blank" class="btn" style="display: inline-block; padding: 0.7rem 1.5rem; font-size: 0.9rem;">
                    ${currentLang === 'UA' ? 'Детальніше' : 'Read More'}
                </a>
            </div>
        `;
        
        const img = item.querySelector('img');
        img.onerror = () => { img.src = CONFIG.imagePlaceholder; };
        
        return item;
    }
}