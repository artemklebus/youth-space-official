const TRANSLATIONS = {
    UA: {
        home: 'Головна',
        opportunities: 'Можливості',
        aboutUs: 'Про нас',
        trainings: 'Навчання',
        team: 'Команда',
        news: 'Новини',
        contacts: 'Контакти',
        
        heroTitle: 'Змінюй себе, змінюй світ',
        heroText: 'Ми - молодіжна організація, яка об\'єднує активних, творчих та амбітних молодих людей. Наша мета - створювати умови для розвитку, навчання та реалізації потенціалу кожної молодої людини.',
        learnMore: 'Дізнатися більше',
        contactUs: 'Зв\'язатися з нами',
        
        aboutTitle: 'Про нас',
        aboutText1: 'Ми — Молодіжна рада при Чорноморській селищній раді. Наша команда ентузіастів вірить у силу молоді та її здатність змінювати світ на краще. Ми об\'єднуємо молодих людей, які прагнуть розвиватися, навчатися нового та реалізовувати свої ідеї.',
        aboutText2: 'Ми створюємо простір, де кожен може отримати підтримку, здобути нові знання та знайти однодумців для спільних проєктів. Наша місія — розкривати потенціал кожної молодої людини та надавати їй можливості для особистого та професійного зростання.',
        aboutText3: 'Через наші ініціативи ми прагнемо сприяти розвитку громади та створювати умови, де молодь може вільно висловлювати свої думки, пропонувати ідеї та брати активну участь у житті суспільства.',
        
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
        
        trainingsTitle: 'Як проходили наші навчання',
        trainingsText1: 'На протязі всього часу ми зустрічалися з різними людьми та навчалися новому. Ми проводили майстер-класи, воркшопи, лекції та практичні заняття з професіоналами різних галузей. Кожна зустріч була унікальною можливістю отримати цінні знання, розвинути навички та знайти нових друзів-однодумців.',
        trainingsText2: 'Наші навчання охоплювали різноманітні теми: від лідерства та комунікації до цифрових навичок та креативного мислення. Ми віримо, що безперервне навчання - це ключ до особистого та професійного зростання.',
        
        teamTitle: 'Наша Команда',
        
        newsTitle: 'Новини',
        allNews: 'Дивитися всі новини',
        news1Title: 'ФОРМУВАННЯ МОЛОДІЖНОЇ РАДИ',
        news1Desc: 'У Чорноморській селищній громаді відбулися установчі збори з формування Молодіжної ради при Чорноморській селищній раді.',
        news2Title: 'Молодіжна рада – за чисте та зелене Чорноморське!',
        news2Desc: 'Вчора Молодіжна рада Чорноморської селищної громади провела одразу кілька добрих справ у межах екологічних акцій "Треш на вихід", "Чисті узбережжя" та "Посади – дерево".',
        news3Title: 'Оновлений дитячий майданчик у селі Змієнкове',
        news3Desc: 'Нещодавно наша згуртована громада ще раз довела, що разом ми можемо зробити своє село кращим. Завдяки активності молоді та небайдужим мешканцям було проведено справжній Upgrade дитячого майданчика.',
        
        contactsTitle: 'Зв\'яжіться з нами',
        contactsText: 'Ми завжди раді новим знайомствам, співпраці та вашим ідеям. Слідкуйте за нашими проєктами в соціальних мережах та приєднуйтесь до нашої молодіжної спільноти!',
        followUs: 'Слідкуйте за нами',
        facebook: 'Facebook',
        instagram: 'Instagram',
        
        // ОПИСИ УЧАСНИКІВ (УКРАЇНСЬКОЮ) - ВАШІ ОРИГІНАЛЬНІ ТЕКСТИ
        teamArtem: 'Голова Молодіжної ради при Чорноморській селищній раді. Тренер з Кіокушин карате та вчитель фізичної культури. Активно працює з молоддю нашої громади.',
        
        teamVeronika: 'Мене звати Вероніка Філончик, я — заступниця голови Молодіжної ради при Чорноморській селищній раді. Для мене Молодіжна рада — це не просто організація, а можливість втілювати ідеї, які роблять наше життя кращим. Я приєдналася, бо хочу, щоб молодь мала простір для розвитку, творчості та самовираження, щоб кожен відчував, що саме від нас залежить майбутнє нашої громади. Моя мета — працювати над проєктами, які допоможуть молодим людям розкривати свій потенціал, підтримувати ініціативи та створювати нові традиції, що об\'єднають громаду.',
        
        teamTetiana: 'Мене звати Карпач Тетяна. Я керівник танцювального колективу «Індіра», обожнюю працювати з дітьми та надихати їх на розвиток і творчість. Активність та бажання змінювати наше життя на краще привели мене до молодіжної ради. Тут я хочу реалізовувати корисні ідеї та створювати більше можливостей для молоді.',
        
        teamVladymyra: 'Мене звати Владимира. Я студентка 4-го курсу «Одеської державної академії будівництва та архітектури». Я в Молодіжній раді, бо хочу бути частиною молодіжної спільноти та підтримувати цікаві ідеї.',
        
        teamAnnaBelko: 'Моя мета в молодіжній раді: Впливати на розвиток нашої громади, брати участь у прийняттях рішень, щоб життя в нашій громаді ставало дедалі комфортнішим.',
        
        teamPolinaTuranska: 'Я вирішила вступити до молодіжної спілки нашої громади "Молодіжна рада", тому що хочу бути активною учасницею змін у своїй громаді. Мені цікаво реалізовувати корисні ініціативи, допомагати людям та розвивати креатив. Це чудова можливість отримати досвід, знайти однодумців і зробити наш край кращим.',
        
        teamArtemKliebus: 'Я — Артем, веброзробник та учасник ІТ-команди. Долучився до Молодіжної ради, щоб допомагати створювати сучасні цифрові рішення, розвивати наш простір та робити його зручнішим для молоді.',
        
        teamYevhen: 'Я Чижиков Євген Дмитрович вирішив вступити в молодіжну раду для того щоб зробити свою громаду краще. Хоббі займаюсь киокушин-карате маю оранжевий пояс, хочу зробити краще місто де живу.',
        
        teamPolinaPokaliuk: 'Я Покалюк Поліна, учасник Молодіжної ради. Приймаю активну участь у житті громади. Я прагну змінювати наше середовище та вдосконалювати його разом з іншими.',
        
        teamDenys: 'Мене звати Качмар Денис Вадимович, в молодіжній раді я, тому що люблю створювати щось своє ,нове ,унікальне!',
        
        teamAnnaMarchuk: 'Марчук Анна Віталіївна, 16 років. Навчаюся в ліцеї «Крижанівський», в одинадцятому класі. Дуже активна, творча та креативна. Пропоную цікаві проєкти та активно беру участь в їх реалізації. Активно вивчаю англійську мову та є членом танцювального колективу "Ritmix", де показую свою пластичність та уміння працювати в команді.',
        
        teamDaria: 'Дар\'я Хаустова Олексіївна, 19 років Майбутній психолог. Активна та цілеспрямована дівчина, бере участь у різних молодіжних ініціативах та проектах. Є членом молодіжної ради, де реалізує свої ідеї та долучається до розвитку громади. Займається танцями в колективі "Ritmix", що допомагає поєднувати творчість, спорт і самовираження.',
        
        teamNatalia: 'Наталія Дячук Учениця 11-Б класу Чорноморського ліцею. Активна, цілеспрямована та креативна дівчина, яка мріє стати дизайнером. Чому я в Молодіжній раді? Тому що хочу робити наше місто кращим, брати участь у розвитку молодіжних проєктів і реалізовувати ідеї, які допоможуть молоді. Для мене важливо, щоб голос молоді було почуто, а наше покоління мало можливість впливати на життя громади.',
        
        teamAnnaTverdokhlib: 'Я в молодіжній раді, тому що хочу робити свій внесок у розвиток громади та представляти інтереси молоді. Для мене це можливість не лише висловлювати власні ідеї, а й перетворювати їх на конкретні справи. Я вірю, що молодь здатна бути рушійною силою змін, і саме в молодіжній раді можна об\'єднати ініціативних людей, щоб разом створювати позитивні проєкти та впливати на прийняття важливих рішень.',
        
        teamAnastasiaPetko: 'Привіт, я Настя Петько, навчаюсь в 9 класі в Чорноморському ліцеї. Я хочу бути в молодіжній раді, щоб розвивати себе, представляти інтереси молоді, втілювати корисні ідеї для громади та робити наше життя цікавішим і кращим.',
        
        teamAnastasiaHrabova: 'Грабова Анастасія. Навчаюсь в Чорноморському ліцеї. Займаюсь музику танцями та спортом. Люблю навчатися чомусь новому. Я вступила до Молодіжної ради, бо хочу, щоб голос молоді був почутий. Для мене важливо розвивати своє місто та робити його кращим для підлітків і молодих людей. Тут я можу втілювати ідеї, знайомитися з активними людьми та вчитися створювати реальні зміни.',
        
        teamAlesia: 'Я Алеся Дмитренко, учениця 10 класу Чорноморського ліцеї. Я в молодіжній раді, тому що хочу бути в курсі всіх подій нашого містечка, брати активну участь у його розвитку та робити свій внесок у життя громади, а Молодіжна рада дає можливість бути ближче до нього.',
        
        teamNikita: 'Я вступив до Молодіжної ради, щоб бути частиною молодіжної спільноти та брати участь у її діяльності.'
    },
    
    EN: {
        home: 'Home',
        opportunities: 'Opportunities',
        aboutUs: 'About Us',
        trainings: 'Trainings',
        team: 'Team',
        news: 'News',
        contacts: 'Contacts',
        
        heroTitle: 'Change Yourself, Change the World',
        heroText: 'We are a youth organization that brings together active, creative and ambitious young people. Our goal is to create conditions for development, learning and realization of the potential of every young person.',
        learnMore: 'Learn More',
        contactUs: 'Contact Us',
        
        aboutTitle: 'About Us',
        aboutText1: 'We are the Youth Council at the Chornomorsk settlement council. Our team of enthusiasts believes in the power of youth and their ability to change the world for the better. We unite young people who want to develop, learn new things and implement their ideas.',
        aboutText2: 'We create a space where everyone can get support, gain new knowledge and find like-minded people for joint projects. Our mission is to reveal the potential of every young person and provide opportunities for personal and professional growth.',
        aboutText3: 'Through our initiatives, we aim to contribute to community development and create conditions where young people can freely express their opinions, propose ideas and take an active part in society.',
        
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
        
        trainingsTitle: 'How Our Trainings Were Conducted',
        trainingsText1: 'Throughout the time, we met with different people and learned new things. We conducted master classes, workshops, lectures and practical classes with professionals from various fields. Each meeting was a unique opportunity to gain valuable knowledge, develop skills and find new like-minded friends.',
        trainingsText2: 'Our trainings covered various topics: from leadership and communication to digital skills and creative thinking. We believe that continuous learning is the key to personal and professional growth.',
        
        teamTitle: 'Our Team',
        
        newsTitle: 'News',
        allNews: 'View All News',
        news1Title: 'YOUTH COUNCIL FORMATION',
        news1Desc: 'Constituent meeting of the Youth Council at the Chornomorsk settlement council.',
        news2Title: 'Youth Council for Clean Chornomorske!',
        news2Desc: 'The Youth Council conducted several good deeds within the environmental actions "Trash on the Weekend", "Clean Coasts" and "Plant a Tree".',
        news3Title: 'Updated Playground in Zmiienkove',
        news3Desc: 'Our community proved that together we can make our village better. Thanks to the activity of young people and caring residents, a real Upgrade of the playground was carried out.',
        
        contactsTitle: 'Contact Us',
        contactsText: 'We are always happy to meet new people, collaborate and hear your ideas. Follow our projects on social media and join our youth community!',
        followUs: 'Follow Us',
        facebook: 'Facebook',
        instagram: 'Instagram',
        
        teamArtem: 'Head of the Youth Council at the Chornomorsk settlement council. Trainer in Kyokushin karate and physical education teacher. Actively works with the youth of our community.',
        
        teamVeronika: 'My name is Veronika Filonchyk, I am the Deputy Head of the Youth Council at the Chornomorsk settlement council. For me, the Youth Council is not just an organization, but an opportunity to implement ideas that make our lives better. I joined because I want young people to have a space for development, creativity and self-expression, so that everyone feels that our community\'s future depends on us. My goal is to work on projects that help young people realize their potential, support initiatives and create new traditions that unite the community.',
        
        teamTetiana: 'My name is Tetiana Karpach. I am the head of the dance group "Indira", I love working with children and inspiring them to develop and be creative. Activity and the desire to make our lives better brought me to the youth council. Here I want to implement useful ideas and create more opportunities for young people.',
        
        teamVladymyra: 'My name is Vladymyra. I am a 4th year student at the Odesa State Academy of Civil Engineering and Architecture. I am in the Youth Council because I want to be part of the youth community and support interesting ideas.',
        
        teamAnnaBelko: 'My goal in the youth council: To influence the development of our community, participate in decision-making, to make life in our community more comfortable.',
        
        teamPolinaTuranska: 'I decided to join the youth union of our community "Youth Council" because I want to be an active participant in changes in my community. I am interested in implementing useful initiatives, helping people and developing creativity. This is a great opportunity to gain experience, find like-minded people and make our region better.',
        
        teamArtemKliebus: 'I am Artem, a web developer and member of the IT team. I joined the Youth Council to help create modern digital solutions, develop our space and make it more convenient for young people.',
        
        teamYevhen: 'I am Yevhen Chyzhykov. I decided to join the youth council to make my community better. I practice kyokushin karate and have an orange belt. I want to make the city where I live better.',
        
        teamPolinaPokaliuk: 'I am Polina Pokaliuk, a member of the Youth Council. I take an active part in community life. I strive to change our environment and improve it together with others.',
        
        teamDenys: 'My name is Denys Kachmar. I am in the youth council because I love creating something of my own, new and unique!',
        
        teamAnnaMarchuk: 'Anna Marchuk, 16 years old. I study at the Kryzhanivskyi Lyceum, in the eleventh grade. I am very active, creative and innovative. I propose interesting projects and actively participate in their implementation. I actively study English and am a member of the dance group "Ritmix", where I show my flexibility and ability to work in a team.',
        
        teamDaria: 'Daria Haustova, 19 years old. Future psychologist. An active and goal-oriented girl, participates in various youth initiatives and projects. She is a member of the youth council, where she implements her ideas and contributes to community development. She dances in the group "Ritmix", which helps combine creativity, sports and self-expression.',
        
        teamNatalia: 'Natalia Diachuk, an 11th grade student at the Chornomorsk Lyceum. An active, determined and creative girl who dreams of becoming a designer. Why am I in the Youth Council? Because I want to make our city better, participate in the development of youth projects and implement ideas that will help young people. It is important for me that the voice of young people is heard and that our generation has the opportunity to influence community life.',
        
        teamAnnaTverdokhlib: 'I am in the youth council because I want to contribute to the development of the community and represent the interests of young people. For me, this is an opportunity not only to express my own ideas, but also to turn them into concrete actions. I believe that young people can be a driving force for change, and it is in the youth council that we can unite proactive people to create positive projects together and influence important decisions.',
        
        teamAnastasiaPetko: 'Hello, I am Nastia Petko, I study in the 9th grade at the Chornomorsk Lyceum. I want to be in the youth council to develop myself, represent the interests of young people, implement useful ideas for the community and make our lives more interesting and better.',
        
        teamAnastasiaHrabova: 'Anastasia Hrabova. I study at the Chornomorsk Lyceum. I do music, dance and sports. I love learning new things. I joined the Youth Council because I want the voice of young people to be heard. It is important for me to develop my city and make it better for teenagers and young people. Here I can implement ideas, meet active people and learn to create real changes.',
        
        teamAlesia: 'I am Alesia Dmytrenko, a 10th grade student at the Chornomorsk Lyceum. I am in the youth council because I want to be aware of all the events in our town, take an active part in its development and make my contribution to community life, and the Youth Council gives me the opportunity to be closer to it.',
        
        teamNikita: 'I joined the Youth Council to be part of the youth community and participate in its activities.'
    }
};
