const TRANSLATIONS = {
    UA: {
        // Навігація
        home: 'Головна',
        opportunities: 'Можливості',
        aboutUs: 'Про нас',
        trainings: 'Навчання',
        team: 'Команда',
        news: 'Новини',
        contacts: 'Контакти',
        
        // Hero секція
        heroTitle: 'Змінюй себе, змінюй світ',
        heroText: 'Ми - молодіжна організація, яка об\'єднує активних, творчих та амбітних молодих людей. Наша мета - створювати умови для розвитку, навчання та реалізації потенціалу кожної молодої людини.',
        learnMore: 'Дізнатися більше',
        contactUs: 'Зв\'язатися з нами',
        
        // Про нас
        aboutTitle: 'Про нас',
        aboutText1: 'Ми — Молодіжна рада при Чорноморській селищній раді. Наша команда ентузіастів вірить у силу молоді та її здатність змінювати світ на краще. Ми об\'єднуємо молодих людей, які прагнуть розвиватися, навчатися нового та реалізовувати свої ідеї.',
        aboutText2: 'Ми створюємо простір, де кожен може отримати підтримку, здобути нові знання та знайти однодумців для спільних проєктів. Наша місія — розкривати потенціал кожної молодої людини та надавати їй можливості для особистого та професійного зростання.',
        aboutText3: 'Через наші ініціативи ми прагнемо сприяти розвитку громади та створювати умови, де молодь може вільно висловлювати свої думки, пропонувати ідеї та брати активну участь у житті суспільства.',
        
        // Можливості
        opportunitiesTitle: 'Наші можливості',
        educationTitle: 'Освітні програми',
        educationDesc: 'Курси, воркшопи, лекції для розвитку знань та навичок.',
        sportsTitle: 'Спортивні заходи',
        sportsDesc: 'Тренування, змагання та активний відпочинок для здоров\'я і драйву.',
        cultureTitle: 'Культурні події',
        cultureDesc: 'Концерти, виставки, театральні вистави — все для натхнення.',
        volunteeringTitle: 'Волонтерство',
        volunteeringDesc: 'Допомога спільноті, благодійність, соціальні проєкти.',
        careerTitle: 'Кар\'єрний розвиток',
        careerDesc: 'Менторство, стажування, консультації для побудови кар\'єри.',
        creativityTitle: 'Творчі майстерні',
        creativityDesc: 'Малювання, музика, рукоділля — розкрий свій талант.',
        
        // Навчання
        trainingsTitle: 'Як проходили наші навчання',
        trainingsText1: 'На протязі всього часу ми зустрічалися з різними людьми та навчалися новому. Ми проводили майстер-класи, воркшопи, лекції та практичні заняття з професіоналами різних галузей. Кожна зустріч була унікальною можливістю отримати цінні знання, розвинути навички та знайти нових друзів-однодумців.',
        trainingsText2: 'Наші навчання охоплювали різноманітні теми: від лідерства та комунікації до цифрових навичок та креативного мислення. Ми віримо, що безперервне навчання - це ключ до особистого та професійного зростання.',
        
        // Команда
        teamTitle: 'Наша Команда',
        
        // Новини
        newsTitle: 'Новини',
        allNews: 'Дивитися всі новини',
        news1Title: 'ФОРМУВАННЯ МОЛОДІЖНОЇ РАДИ',
        news1Desc: 'У Чорноморській селищній громаді відбулися установчі збори з формування Молодіжної ради при Чорноморській селищній раді.',
        news2Title: 'Молодіжна рада – за чисте та зелене Чорноморське!',
        news2Desc: 'Вчора Молодіжна рада Чорноморської селищної громади провела одразу кілька добрих справ у межах екологічних акцій "Треш на вихід", "Чисті узбережжя" та "Посади – дерево".',
        news3Title: 'Оновлений дитячий майданчик у селі Змієнкове',
        news3Desc: 'Нещодавно наша згуртована громада ще раз довела, що разом ми можемо зробити своє село кращим. Завдяки активності молоді та небайдужим мешканцям було проведено справжній Upgrade дитячого майданчика.',
        
        // Контакти
        contactsTitle: 'Зв\'яжіться з нами',
        contactsText: 'Ми завжди раді новим знайомствам, співпраці та вашим ідеям. Слідкуйте за нашими проєктами в соціальних мережах та приєднуйтесь до нашої молодіжної спільноти!',
        followUs: 'Слідкуйте за нами',
        facebook: 'Facebook',
        instagram: 'Instagram',
        
        // ПЕРЕКЛАДИ ДЛЯ КАРТОК КОМАНДИ
        teamArtem: 'Голова Молодіжної ради при Чорноморській селищній раді. Тренер з Кіокушин карате та вчитель фізичної культури. Активно працює з молоддю нашої громади.',
        teamVeronika: 'Заступниця голови Молодіжної ради при Чорноморській селищній раді. Працює над проєктами, які допомагають молоді розкривати потенціал, підтримувати ініціативи та створювати нові традиції, що об\'єднують громаду.',
        teamTetiana: 'Керівник танцювального колективу «Індіра», обожнює працювати з дітьми та надихати їх на розвиток і творчість. В молодіжній раді реалізовує корисні ідеї та створює більше можливостей для молоді.',
        teamVladymyra: 'Студентка Одеської державної академії будівництва та архітектури. Хоче бути частиною молодіжної спільноти та підтримувати цікаві ідеї.',
        teamAnnaBelko: 'Мета в молодіжній раді: впливати на розвиток громади, брати участь у прийнятті рішень, щоб життя в нашій громаді ставало дедалі комфортнішим.',
        teamPolinaTuranska: 'Хоче бути активною учасницею змін у своїй громаді, реалізовувати корисні ініціативи, допомагати людям та розвивати креатив.',
        teamArtemKliebus: 'Веброзробник та учасник ІТ-команди. Допомагає створювати сучасні цифрові рішення, розвивати простір та робити його зручнішим для молоді.',
        teamYevhen: 'Займається кіокушин-карате, має оранжевий пояс. Хоче зробити кращим місто, де живе.',
        teamPolinaPokaliuk: 'Приймає активну участь у житті громади. Прагне змінювати наше середовище та вдосконалювати його разом з іншими.',
        teamDenys: 'Любить створювати щось своє, нове та унікальне.',
        teamAnnaMarchuk: 'Активна, творча та креативна. Пропонує цікаві проєкти. Член танцювального колективу "Ritmix".',
        teamDaria: 'Майбутній психолог. Активна та цілеспрямована, бере участь у молодіжних ініціативах та проєктах.',
        teamNatalia: 'Мріє стати дизайнером. Хоче робити місто кращим, брати участь у розвитку молодіжних проєктів.',
        teamAnnaTverdokhlib: 'Хоче робити внесок у розвиток громади та представляти інтереси молоді. Вірить, що молодь здатна бути рушійною силою змін.',
        teamAnastasiaPetko: 'Хоче розвивати себе, представляти інтереси молоді, втілювати корисні ідеї для громади та робити життя цікавішим і кращим.',
        teamAnastasiaHrabova: 'Займається музикою, танцями та спортом. Хоче, щоб голос молоді був почутий, а молодь мала можливість впливати на життя громади.',
        teamAlesia: 'Хоче бути в курсі всіх подій громади, брати активну участь у її розвитку та робити свій внесок у життя громади.',
        teamNikita: 'Вступив до Молодіжної ради, щоб бути частиною молодіжної спільноти та брати участь у її діяльності.'
    },
    
    EN: {
        // Navigation
        home: 'Home',
        opportunities: 'Opportunities',
        aboutUs: 'About Us',
        trainings: 'Trainings',
        team: 'Team',
        news: 'News',
        contacts: 'Contacts',
        
        // Hero section
        heroTitle: 'Change Yourself, Change the World',
        heroText: 'We are a youth organization that brings together active, creative and ambitious young people. Our goal is to create conditions for development, learning and realization of the potential of every young person.',
        learnMore: 'Learn More',
        contactUs: 'Contact Us',
        
        // About Us
        aboutTitle: 'About Us',
        aboutText1: 'We are the Youth Council at the Chornomorsk settlement council. Our team of enthusiasts believes in the power of youth and their ability to change the world for the better. We unite young people who want to develop, learn new things and implement their ideas.',
        aboutText2: 'We create a space where everyone can get support, gain new knowledge and find like-minded people for joint projects. Our mission is to reveal the potential of every young person and provide opportunities for personal and professional growth.',
        aboutText3: 'Through our initiatives, we aim to contribute to community development and create conditions where young people can freely express their opinions, propose ideas and take an active part in society.',
        
        // Opportunities
        opportunitiesTitle: 'Our Opportunities',
        educationTitle: 'Educational Programs',
        educationDesc: 'Courses, workshops, lectures for skill development.',
        sportsTitle: 'Sports Events',
        sportsDesc: 'Training, competitions and active recreation for health and drive.',
        cultureTitle: 'Cultural Events',
        cultureDesc: 'Concerts, exhibitions, theater performances - everything for inspiration.',
        volunteeringTitle: 'Volunteering',
        volunteeringDesc: 'Community help, charity, social projects.',
        careerTitle: 'Career Development',
        careerDesc: 'Mentoring, internships, career consultations.',
        creativityTitle: 'Creative Workshops',
        creativityDesc: 'Drawing, music, handicrafts - reveal your talent.',
        
        // Trainings
        trainingsTitle: 'How Our Trainings Were Conducted',
        trainingsText1: 'Throughout the time, we met with different people and learned new things. We conducted master classes, workshops, lectures and practical classes with professionals from various fields. Each meeting was a unique opportunity to gain valuable knowledge, develop skills and find new like-minded friends.',
        trainingsText2: 'Our trainings covered various topics: from leadership and communication to digital skills and creative thinking. We believe that continuous learning is the key to personal and professional growth.',
        
        // Team
        teamTitle: 'Our Team',
        
        // News
        newsTitle: 'News',
        allNews: 'View All News',
        news1Title: 'YOUTH COUNCIL FORMATION',
        news1Desc: 'Constituent meeting of the Youth Council at the Chornomorsk settlement council.',
        news2Title: 'Youth Council for Clean Chornomorske!',
        news2Desc: 'The Youth Council conducted several good deeds within the environmental actions "Trash on the Weekend", "Clean Coasts" and "Plant a Tree".',
        news3Title: 'Updated Playground in Zmiienkove',
        news3Desc: 'Our community proved that together we can make our village better. Thanks to the activity of young people and caring residents, a real Upgrade of the playground was carried out.',
        
        // Contacts
        contactsTitle: 'Contact Us',
        contactsText: 'We are always happy to meet new people, collaborate and hear your ideas. Follow our projects on social media and join our youth community!',
        followUs: 'Follow Us',
        facebook: 'Facebook',
        instagram: 'Instagram',
        
        // TEAM MEMBERS TRANSLATIONS
        teamArtem: 'Head of the Youth Council at the Chornomorsk settlement council. Trainer in Kyokushin karate and physical education teacher. Actively works with the youth of our community.',
        teamVeronika: 'Deputy Head of the Youth Council at the Chornomorsk settlement council. Works on projects that help young people realize their potential, support initiatives and create new traditions that unite the community.',
        teamTetiana: 'Leader of the dance group "Indira", loves working with children and inspiring them to develop and be creative. In the youth council, she implements useful ideas and creates more opportunities for young people.',
        teamVladymyra: 'Student at Odesa State Academy of Civil Engineering and Architecture. Wants to be part of the youth community and support interesting ideas.',
        teamAnnaBelko: 'Her goal in the youth council is to influence the development of the community, participate in decision-making, to make life in our community more comfortable.',
        teamPolinaTuranska: 'Wants to be an active participant in changes in her community, implement useful initiatives, help people and develop creativity.',
        teamArtemKliebus: 'Web developer and member of the IT team. Helps create modern digital solutions, develop our space and make it more convenient for young people.',
        teamYevhen: 'Practices kyokushin karate, has an orange belt. Wants to make the city where he lives better.',
        teamPolinaPokaliuk: 'Takes an active part in community life. Strives to change our environment and improve it together with others.',
        teamDenys: 'Loves to create something of his own, new and unique.',
        teamAnnaMarchuk: 'Active, creative and innovative. Proposes interesting projects. Member of the dance group "Ritmix".',
        teamDaria: 'Future psychologist. Active and goal-oriented, participates in various youth initiatives and projects.',
        teamNatalia: 'Dreams of becoming a designer. Wants to make our city better, participate in the development of youth projects.',
        teamAnnaTverdokhlib: 'Wants to contribute to the development of the community and represent the interests of young people. Believes that young people can be a driving force for change.',
        teamAnastasiaPetko: 'Wants to develop herself, represent the interests of young people, implement useful ideas for the community and make our life more interesting and better.',
        teamAnastasiaHrabova: 'Studies music, dance and sports. Wants the voice of young people to be heard and for them to have the opportunity to influence community life.',
        teamAlesia: 'Wants to be aware of all events in the community, take an active part in its development and make her contribution to community life.',
        teamNikita: 'Joined the Youth Council to be part of the youth community and participate in its activities.'
    }
};
