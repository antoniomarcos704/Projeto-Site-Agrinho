// ==========================================================================
// 1. DICIONÁRIO DE IDIOMAS (REVISADO E CORRIGIDO COM BASE EMBRAPA)
// ==========================================================================
const translations = {
    pt: {
        "nav-inicio": "Início", "nav-sobre": "Sobre Nós", "nav-tec": "Tecnologia", 
        "nav-praticas": "Práticas Regenerativas", "nav-precisao": "Agricultura de Precisão", "nav-contato": "Contato",
        "badge-recommended": "Recomendado", // Corrigido de badge-recomendado para manter consistência se necessário
        "badge-blue": "Recomendado", 
        "slide1-title": "Agro Forte, Futuro Sustentável", "slide1-desc": "O equilíbrio perfeito entre a tecnologia que avança e a terra que nos alimenta.",
        "slide2-title": "A Voz do Chão que Pisamos", "slide2-desc": "Educar as novas gerações é semear a consciência de que o solo é um organismo vivo.",
        "slide3-title": "Inteligência a Serviço da Natureza", "slide3-desc": "Drones e dados trabalhando juntos para aplicar insumos com precisão cirúrgica.",
        "slide4-title": "Cuidar, Proteger e Curar O Solo", "slide4-desc": "O Plantio Direto e a rotação devolvem a vida e os nutrientes que a terra precisa.",
        "slide5-title": "Produtividade de Alta Performance", "slide5-desc": "Preservar o meio ambiente não reduz colheitas; garante a alimentação do amanhã.",
        "boasvindas-title": "Bem-vindo à Jornada do Agro Sustentável", "boasvindas-desc": "Explore nossa plataforma e entenda como a união entre os saberes da terra e as tecnologias do amanhã moldarão o destino do nosso planeta.",
        "sobre-title": "O Propósito Educacional: Por que existimos?", "sobre-subtitle": "O solo não é apenas terra sob nossos pés. Ele é o coração pulsante da vida no planeta.",
        "sobre-motivacional": "Diariamente, ações impensadas e o manejo incorreto degradam toneladas de solos férteis através da erosão e da compactação mecânica. Este espaço nasceu como um manifesto educacional para o Concurso Agrinho. Nosso objetivo vai muito além de informar: queremos tocar corações e despertar mentes para a urgente missão de restaurar a saúde do nosso chão. Amar a terra é proteger nossa própria existência!",
        "impacto-title": "O Alerta: O Peso que Sufoca", "impacto-desc": "O tráfego de tratores pesados esmaga as estruturas do solo, expulsando o ar e impedindo a água de penetrar. Raízes fracas geram plantas frágeis. Reconhecer o erro é o primeiro passo para a mudança.",
        "solucao-title": "A Esperança: A Cura pela Natureza", "solucao-desc": "Quando adotamos técnicas ecológicas, damos à terra a chance de respirar novamente. Um solo rico em biodiversidade armazena água, mitiga secas, captura carbono e floresce em fartura.",
        "tec-tag": "Inovação Digital", "tec-title": "Alta Tecnologia a Favor do Campo", "tec-subtitle": "Drones, inteligência de dados e conectividade moldando tomadas de decisões rápidas, inteligentes e sustentáveis.",
        "tech1-title": "Monitoramento Aéreo", "tech1-desc": "Drones de última geração capturam imagens multiespectrais de alta resolução, identificando focos de pragas e estresse hídrico antes que se espalhem.",
        "tech2-title": "Decisões com Dados", "tech2-desc": "Algoritmos inteligentes processam dados em tempo real. O produtor visualiza mapas de calor e relatórios preditivos na palma da mão para agir no momento exato.",
        "tech3-title": "Aplicações Inteligentes", "tech3-desc": "Sistemas de telemetria guiam pulverizações cirúrgicas. O insumo é aplicado apenas onde é necessário, blindando o ecossistema e reduzindo desperdícios.",
        "prat-title": "Práticas de Agricultura Regenerativa", "prat-subtitle": "Pequenas ações coordenadas que geram grandes transformações na saúde da lavoura.",
        
        // TEXTOS TÉCNICOS AMPLIADOS (BASE EMBRAPA)
        "p1-title": "Plantio Direto", 
        "p1-desc": "Considerado a maior revolução conservacionista da agricultura tropical, o Sistema Plantio Direto (SPD) elimina as operações tradicionais de aração e gradagem, que rompem a estrutura agregada da terra. A semeadura ocorre diretamente sobre os resíduos da safra anterior, estabelecendo uma cobertura morta (palhada) permanente. De acordo com dados técnicos da Embrapa, essa camada de fitomassa atua como um escudo térmico, diminuindo a evaporação direta da água e atenuando as amplitudes térmicas no perfil do solo. Além disso, amortece mecanicamente o impacto cinético das gotas de chuva (efeito 'splash'), reduzindo drasticamente as perdas de solo por erosão hídrica em até 90% e promovendo o incremento contínuo da matéria orgânica e da Capacidade de Troca de Cátions (CTC).",
        "p2-title": "Rotação de Culturas", 
        "p2-desc": "Diferente da sucessão simples (como o ciclo contínuo soja-milho), a Rotação de Culturas consiste na alternância planejada de diferentes espécies vegetais no decorrer do tempo em uma mesma área. O fundamento técnico exige o consórcio entre plantas de sistemas radiculares distintos, intercalando gramíneas de raízes fasciculadas profundas (como a braquiária e o milheto) com leguminosas de raiz pivotante. Esse processo promove uma descompactação biológica natural do solo através da abertura de macroporos, melhorando a taxa de infiltração hídrica profunda. Cientificamente, a rotação interrompe o ciclo biológico de fitopatógenos e nematoides hospedeiros, reduces a pressão de plantas daninhas por alelopatia e otimiza a ciclagem de nutrientes, extraindo minerais de diferentes estratos e elevando a estabilidade microbiológica da lavoura.",
        
        "regen-metrics-title": "Impacto Mensurável na Regeneração do Ecossistema",
        "m1": "Economia de Água", "m2": "Redução de Carbono", "m3": "Mais Saúde do Solo",
        "precisao-title": "Inovações na Agricultura de Precisão", "precisao-subtitle": "Tecnologia de ponta moldando uma nova era de eficiência e preservação no agronegócio.",
        "precisao-p-main": "Os drones revolucionaram o setor agrícola brasileiro, substituindo gradativamente tarefas pesadas e reduzindo impactos ambientais drásticos. Suas principais vantagens incluem:",
        "drone-v1-title": "Economia Hídrica", "drone-v1-desc": "Podem reduzir o uso de água em até 95% em comparação com os pulverizadores terrestres convencionais.",
        "drone-v2-title": "Sem Amassamento", "drone-v2-desc": "Como flutuam sobre a plantação, evitam completamente a perda física de plantas por pisoteio de pneus.",
        "drone-v3-title": "Acesso Total", "drone-v3-desc": "Operam perfeitamente em áreas montanhosas, encostas inclinadas e locais inacessíveis para tratores.",
        "drone-v4-title": "Operação Contínua", "drone-v4-desc": "Trabalham eficientemente em terrenos totalmente encharcados ou durante o período noturno.",
        "info-title": "Contribuição Ecológica e Sustentabilidade", "info-water": "Redução do Consumo de Água Potável", "info-damage": "Preservação contra Amassamento do Solo", "info-carbon": "Redução na Emissão de Carbono (Combustível)",
        "contato-title": "Contato", "contato-subtitle": "Entre em contato conosco",
        "label-nome": "Nome", "label-email": "E-mail", "label-msg": "Mensagem", "btn-enviar": "Enviar",
        "footer-rights": "Todos os direitos reservados.",
        "placeholder-nome": "Digite seu nome completo...", "placeholder-email": "seu.email@exemplo.com", "placeholder-msg": "Escreva sua mensagem aqui..."
    },
    en: {
        "nav-inicio": "Home", "nav-sobre": "About Us", "nav-tec": "Technology", 
        "nav-praticas": "Regenerative Practices", "nav-precisao": "Precision Agriculture", "nav-contato": "Contact",
        "badge-recommended": "Recommended",
        "badge-blue": "Recommended",
        "slide1-title": "Strong Agro, Sustainable Future", "slide1-desc": "The perfect balance between advancing technology and the land that feeds us.",
        "slide2-title": "The Voice of the Soil We Walk On", "slide2-desc": "Educating new generations means sowing the awareness that soil is a living organism.",
        "slide3-title": "Intelligence Serving Nature", "slide3-desc": "Drones and data working together to apply inputs with surgical precision.",
        "slide4-title": "Care, Protect and Heal the Soil", "slide4-desc": "No-Till farming and rotation restore the life and nutrients the earth needs.",
        "slide5-title": "High-Performance Productivity", "slide5-desc": "Preserving the environment does not reduce harvests; it secures tomorrow's food supply.",
        "boasvindas-title": "Welcome to the Sustainable Agro Journey", "boasvindas-desc": "Explore our platform and understand how the union of earth knowledge and tomorrow's technology will shape our planet.",
        "sobre-title": "The Educational Purpose: Why do we exist?", "sobre-subtitle": "Soil is not just dirt under our feet. It is the beating heart of life on earth.",
        "sobre-motivacional": "Daily, thoughtless actions and incorrect management degrade tons of fertile soil through erosion and compaction. This space was born as an educational manifesto for the Agrinho Contest. Our goal goes far beyond informing: we want to touch hearts and awaken minds to restore our ground. Loving the earth is protecting our own existence!",
        "impacto-title": "The Alert: The Weight That Suffocates", "impacto-desc": "Heavy machinery traffic crushes soil structures, forcing air out and blocking water. Weak roots make weak crops. Recognizing mistakes is the first step to change.",
        "solucao-title": "The Hope: Healing Through Nature", "solucao-desc": "When we adopt ecological techniques, we give the earth a chance to breathe again. A biodiverse soil stores water, mitigates droughts, captures carbon, and thrives.",
        "tec-tag": "Digital Innovation", "tec-title": "High Technology for the Fields", "tec-subtitle": "Drones, data, and precision for smart and sustainable decision-making.",
        "tech1-title": "Aerial Monitoring", "tech1-desc": "State-of-the-art drones capture high-resolution multispectral imagery, pinpointing pest infestations and hydric stress before they spread.",
        "tech2-title": "Data Decisions", "tech2-desc": "Intelligent algorithms process field data in real-time. Producers visualize heatmaps and predictive reports right from their hands.",
        "tech3-title": "Smart Applications", "tech3-desc": "Telemetry systems guide surgical spraying. Resources are only applied where necessary, shielding the ecosystem and avoiding waste.",
        "prat-title": "Regenerative Farming Practices", "prat-subtitle": "Small coordinated actions that generate big transformations in crop health.",
        
        "p1-title": "No-Till Farming", 
        "p1-desc": "Considered the greatest conservationist revolution in tropical agriculture, the No-Till System (NTS) eliminates traditional plowing and harrowing operations, which disrupt the aggregated structure of the earth. Sowing occurs directly over the residues of the previous harvest, establishing a permanent mulch. According much to technical data from Embrapa, this phytomass layer acts as a thermal shield, decreasing direct water evaporation and mitigating temperature fluctuations within the soil profile. Furthermore, it mechanically dampens the kinetic impact of raindrops (the 'splash' effect), drastically reducing soil losses from water erosion by up to 90% while promoting the continuous increase of organic matter and Cation Exchange Capacity (CEC).",
        "p2-title": "Crop Rotation", 
        "p2-desc": "Distinct from simple crop succession (such as the continuous soy-corn cycle), Crop Rotation consists of the planned alternation of different plant species over time in the same area. The technical foundation requires combining plants with distinct root systems, intercropping grasses with deep fibrous roots (such as brachiaria and millet) alongside legumes with taproots. This process promotes a natural biological decompaction of the soil through the opening of macropores, improving the deep water infiltration rate. Scientifically, rotation interrupts the life cycle of host phytopathogens and nematodes, reduces weed pressure via allelopathy, and optimizes nutrient cycling by extracting minerals from different strata, elevating stability.",
        
        "regen-metrics-title": "Measurable Impact on Ecosystem Regeneration",
        "m1": "Water Savings", "m2": "Carbon Reduction", "m3": "Better Soil Health",
        "precisao-title": "Innovations in Precision Agriculture", "precisao-subtitle": "State-of-the-art technology shaping a new era of efficiency and preservation in agribusiness.",
        "precisao-p-main": "Drones have revolutionized the Brazilian agricultural sector, gradually replacing heavy machinery and reducing drastic environmental impacts. Their main advantages include:",
        "drone-v1-title": "Water Economy", "drone-v1-desc": "They can reduce water use by up to 95% compared to conventional ground sprayers.",
        "drone-v2-title": "No Trampling", "drone-v2-desc": "As they float above the crops, they completely avoid physical plant damage from tires.",
        "drone-v3-title": "Total Access", "drone-v3-desc": "They operate perfectly in mountainous areas, steep slopes, and places inaccessible to tractors.",
        "drone-v4-title": "Continuous Operation", "drone-v4-desc": "They work efficiently in completely waterlogged fields or during the night shift.",
        "info-title": "Ecological Contribution and Sustainability", "info-water": "Reduction of Drinking Water Consumption", "info-damage": "Preservation against Soil Compaction", "info-carbon": "Reduction in Carbon Emissions (Fuel)",
        "contato-title": "Contact", "contato-subtitle": "Get in touch with us",
        "label-nome": "Name", "label-email": "E-mail", "label-msg": "Message", "btn-enviar": "Send",
        "footer-rights": "All rights reserved.",
        "placeholder-nome": "Your full name...", "placeholder-email": "your.email@example.com", "placeholder-msg": "Type your message here..."
    },
    es: {
        "nav-inicio": "Inicio", "nav-sobre": "Nosotros", "nav-tec": "Tecnología", 
        "nav-praticas": "Prácticas Regenerativas", "nav-precisao": "Agricultura de Precisión", "nav-contato": "Contacto",
        "badge-recommended": "Recomendado",
        "badge-blue": "Recomendado",
        "slide1-title": "Agro Fuerte, Futuro Sostenible", "slide1-desc": "El equilibrio perfecto entre la tecnología que avanza y la tierra que nos alimenta.",
        "slide2-title": "La Voz del Suelo que Pisamos", "slide2-desc": "Educar a las nuevas generaciones es sembrar la conciencia de que el suelo es un organismo vivo.",
        "slide3-title": "Inteligencia al Servicio de la Naturaleza", "slide3-desc": "Drones y datos trabajando juntos para aplicar insumos con precisión quirúrgica.",
        "slide4-title": "Cuidar, Proteger y Curar el Suelo", "slide4-desc": "La siembra directa y la rotación devuelven a la vida y los nutrientes que la tierra necesita.",
        "slide5-title": "Productividad de Alto Rendimiento", "slide5-desc": "Preservar el medio ambiente no reduce las cosechas; garantiza la alimentación del mañana.",
        "boasvindas-title": "Bienvenido a la Jornada del Agro Sostenible", "boasvindas-desc": "Explore nuestra plataforma y comprenda cómo la unión de los saberes de la tierra y las tecnologías del mañana moldearán nuestro planeta.",
        "sobre-title": "El Propósito Educativo: ¿Por qué existimos?", "sobre-subtitle": "El suelo no es sólo tierra bajo nuestros pies. Es el corazón palpitante de la vida en el planeta.",
        "sobre-motivacional": "Diariamente, acciones irresponsables y manejos incorrectos degradan toneladas de suelos fértiles por erosión y compactación. Este espacio nació como un manifiesto educativo para el Concurso Agrinho. Nuestro objetivo va más allá de informar: ¡queremos tocar corazones y despertar mentes para restaurar nuestro suelo! ¡Amar la tierra es proteger nuestra existencia!",
        "impacto-title": "La Alerta: El Peso que Asfixia", "impacto-desc": "El tráfico de tractores pesados aplasta las estructuras del suelo, expulsando el aire y bloqueando el agua. Raíces débiles generan plantas frágiles. Reconocer el error es el primer paso.",
        "solucao-title": "La Esperanza: La Cura por la Naturaleza", "solucao-desc": "Cuando adoptamos técnicas ecológicas, le damos a la tierra la oportunidad de respirar. Un suelo rico en biodiversidad almacena agua, mitiga sequías, captura carbono y florece.",
        "tec-tag": "Innovación Digital", "tec-title": "Alta Tecnología a Favor del Campo", "tec-subtitle": "Drones, datos y precisión para la toma de decisiones inteligentes y sostenibles.",
        "tech1-title": "Monitoreo Aéreo", "tech1-desc": "Drones de última generación capturan imágenes multiespectrais de alta resolución, identificando focos de pragas y estrés hídrico antes de que se propaguen.",
        "tech2-title": "Decisiones con Datos", "tech2-desc": "Algoritmos inteligentes procesan datos del campo en tiempo real. Los productores visualizan mapas de calor e informes predictivos directamente en la palma de su mano.",
        "tech3-title": "Aplicaciones Inteligentes", "tech3-desc": "Sistemas de telemetria guían pulverizaciones quirúrgicas. Los insumos se aplican solo donde es necesario, protegiendo el ecosistema y evitando desperdicios.",
        "prat-title": "Práticas de Agricultura Regenerativa", "prat-subtitle": "Pequeñas acciones coordenadas que generan grandes transformaciones en la salud del cultivo.",
        
        "p1-title": "Siembra Directa", 
        "p1-desc": "Considerada la mayor revolución conservacionista de la agricultura tropical, el Sistema de Siembra Directa (SSD) elimina las operaciones tradicionales de arado y rastrillado, que rompen la estructura agregada de la tierra. La siembra se realiza directamente sobre los residuos de la cosecha anterior, estableciendo un mantillo permanente. Según datos técnicos de Embrapa, esta capa de fitomasa actúa como un escudo térmico, disminuyendo la evaporación directa del agua y mitigando las oscilaciones térmicas en el perfil del suelo. Además, amortigua mecánicamente el impacto cinético de las gotas de lluvia (efeito 'splash'), reduciendo drásticamente las pérdidas de suelo por erosión hídrica hasta en un 90% y promoviendo el incremento continuo de materia orgánica y Capacidad de Intercambio Catiónico (CIC).",
        "p2-title": "Rotación de Cultivos", 
        "p2-desc": "A diferencia de la sucesión simple (como el ciclo continuo soja-maíz), la Rotación de Cultivos consiste en la alternancia planificada de diferentes especies vegetales a lo largo del tiempo en una misma superficie. El fundamento técnico exige el consorcio entre plantas con sistemas radiculares distintos, intercalando gramíneas con raíces fasciculadas profundas (como la braquiaria y el mijo) junto con leguminosas de raíz pivotante. Este proceso promueve una descompactación biológica natural del suelo mediante la apertura de macroporos, mejorando la tasa de infiltración hídrica profunda. Científicamente, la rotación interrumpe el ciclo biológico de fitopatógenos y nematodos hospedadores, reduce la presión de malezas por alelopatía y optimiza el ciclo de nutrientes.",
        
        "regen-metrics-title": "Impacto Medible en la Regeneración del Ecosistema",
        "m1": "Ahorro de Agua", "m2": "Reducción de Carbono", "m3": "Mejor Salud del Suelo",
        "precisao-title": "Innovaciones en Agricultura de Precisión", "precisao-subtitle": "Tecnología de vanguardia que da forma a una era de eficiencia y preservación en el sector agrícola.",
        "precisao-p-main": "Los drones revolucionaron el sector agrícola brasileiro, sustituyendo gradualmente tareas pesadas y reduciendo drásticos impactos ambientales. Sus principales ventajas incluyen:",
        "drone-v1-title": "Economía Hídrica", "drone-v1-desc": "Pueden reducir el uso de agua hasta en un 95% en comparación con los pulverizadores terrestres convencionales.",
        "drone-v2-title": "Sin Aplastamiento", "drone-v2-desc": "Como vuelan sobre la plantación, evitan por completo la pérdida física de plantas por pisoteio de neumáticos.",
        "drone-v3-title": "Acceso Total", "drone-v3-desc": "Operan perfectamente en áreas montañosas, laderas inclinadas y lugares inaccesibles para tractores.",
        "drone-v4-title": "Operación Continua", "drone-v4-desc": "Trabajan eficientemente en terrenos totalmente inundados o durante el período nocturno.",
        // CORREGIDO: Textos traducidos correctamente del portugués al español
        "info-water": "Reducción del Consumo de Agua Potable", 
        "info-damage": "Preservación contra el Compactamiento del Suelo", 
        "info-carbon": "Reducción de la Emisión de Carbono (Combustible)",
        "contato-title": "Contacto", "contato-subtitle": "Póngase en contacto con nosotros",
        "label-nome": "Nombre", "label-email": "E-mail", "label-msg": "Mensaje", "btn-enviar": "Enviar",
        "footer-rights": "Todos los derechos reservados.",
        "placeholder-nome": "Su nombre completo...", "placeholder-email": "su.correo@ejemplo.com", "placeholder-msg": "Escriba su mensaje aquí..."
    }
};

// ==========================================================================
// 2. LÓGICA DE NAVEGAÇÃO SPA
// ==========================================================================
const menuLinks = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('.spa-section');
const logoHome = document.getElementById('logoHome');

function activeSection(targetId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuLinks.forEach(link => {
        link.classList.remove('active-link');
        if(link.getAttribute('href') === targetId) {
            link.classList.add('active-link');
        }
    });

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    if (targetId === '#inicio') {
        resetCarouselTimer();
    } else {
        clearInterval(carouselTimer);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        activeSection(targetId);
    });
});

if (logoHome) {
    logoHome.addEventListener('click', (e) => {
        e.preventDefault();
        activeSection('#inicio');
    });
}

// Inicializa a primeira aba ativa com segurança
const defaultActive = document.querySelector('.nav-menu a[href="#inicio"]');
if (defaultActive) {
    defaultActive.classList.add('active-link');
}


// ==========================================================================
// 3. MECÂNICA DO CARROSSEL DE IMAGENS
// ==========================================================================
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');
let currentSlideIndex = 0;
let carouselTimer;

if (dotsContainer && slides.length > 0) {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => jumpToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

const dots = document.querySelectorAll('.carousel-dot');

function updateCarouselVisuals() {
    if (slides.length === 0) return;
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    if (slides.length === 0) return;
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateCarouselVisuals();
    resetCarouselTimer();
}

function prevSlide() {
    if (slides.length === 0) return;
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateCarouselVisuals();
    resetCarouselTimer();
}

function jumpToSlide(index) {
    currentSlideIndex = index;
    updateCarouselVisuals();
    resetCarouselTimer();
}

function resetCarouselTimer() {
    clearInterval(carouselTimer);
    const inicioSection = document.getElementById('inicio');
    if (inicioSection && inicioSection.classList.contains('active') && slides.length > 0) {
        carouselTimer = setInterval(nextSlide, 6000);
    }
}

if(nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    resetCarouselTimer();
}


// ==========================================================================
// 4. ALTERNADOR DE TEMA (DARK / LIGHT MODE)
// ==========================================================================
const themeToggleBtn = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}


// ==========================================================================
// 5. TRADUTOR DINÂMICO
// ==========================================================================
const langSelect = document.getElementById('langSelect');

if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });
}

function changeLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-i18n');
        element.textContent = translations[lang]?.[translationKey] || translations['pt'][translationKey];
    });

    const elementsWithPlaceholders = document.querySelectorAll('[data-i18n-holder]');
    elementsWithPlaceholders.forEach(element => {
        const holderKey = element.getAttribute('data-i18n-holder');
        const translatedHolder = translations[lang]?.[holderKey] || translations['pt'][holderKey];
        if (translatedHolder) {
            element.setAttribute('placeholder', translatedHolder);
        }
    });
}

// Inicializa a página carregando o dicionário em português
changeLanguage('pt');


// ==========================================================================
// 6. FORMULÁRIO DE CONTATO
// ==========================================================================
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameField = document.getElementById('userName');
        const emailField = document.getElementById('userEmail');
        
        const clientName = nameField ? nameField.value : '';
        const clientEmail = emailField ? emailField.value : '';
        
        formFeedback.classList.remove('hidden');
        formFeedback.classList.add('success');
        
        const currentLang = langSelect ? langSelect.value : 'pt';
        if (currentLang === 'en') {
            formFeedback.textContent = `Thank you, ${clientName}! Our team will contact you at ${clientEmail}.`;
        } else if (currentLang === 'es') {
            formFeedback.textContent = `¡Gracias, ${clientName}! Nuestro equipo responderá a: ${clientEmail}.`;
        } else {
            formFeedback.textContent = `Obrigado, ${clientName}! Nossa equipe responderá no e-mail: ${clientEmail}.`;
        }
        
        contactForm.reset();
    });
}
