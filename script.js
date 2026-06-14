// ==========================================================================
// 1. DICIONÁRIO DE IDIOMAS (ATUALIZADO E COMPLETADO)
// ==========================================================================
const translations = {
    pt: {
        "nav-inicio": "Início", "nav-sobre": "Sobre Nós", "nav-tec": "Tecnologia", 
        "nav-praticas": "Práticas Regenerativas", "nav-precisao": "Agricultura de Precisão", "nav-contato": "Contato",
        "badge-blue": "Recomendado", 
        "slide1-title": "Agro Forte, Futuro Sustentável", "slide1-desc": "O equilíbrio perfeito entre a tecnologia que avança e a terra que nos alimenta.",
        "slide2-title": "A Voz do Chão que Pisamos", "slide2-desc": "Educar as novas gerações é semear a consciência de que o solo é um organism vivo.",
        "slide3-title": "Inteligência a Serviço da Natureza", "slide3-desc": "Drones e dados trabalhando juntos para aplicar insumos com precisão cirúrgica.",
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
        "p1-title": "Plantio Direto", 
        "p1-desc": "Considerado a maior revolução conservacionista da agricultura tropical, o Sistema Plantio Direto (SPD) elimina as operações tradicionais de aração e gradagem. A semeadura ocorre diretamente sobre os resíduos da safra anterior, estabelecendo uma cobertura morta permanente que atua como escudo térmico, diminui a erosão hídrica em até 90% e aumenta a matéria orgânica.",
        "p2-title": "Rotação de Culturas", 
        "p2-desc": "Consiste na alternância planejada de espécies vegetais no tempo em uma mesma área. O consórcio entre plantas com raízes distintas promove a descompactação biológica do solo, interrompe o ciclo de pragas, reduz plantas daninhas por alelopatia e otimiza a ciclagem natural de nutrientes minerais.",
        "regen-metrics-title": "Impacto Mensurável na Regeneração do Ecossistema",
        "m1": "Economia de Água", "m2": "Redução de Carbono", "m3": "Mais Saúde do Solo",
        "precisao-title": "Inovações na Agricultura de Precisão", "precisao-subtitle": "Tecnologia de ponta moldando uma nova era de eficiência e preservação no agronegócio.",
        "precisao-p-main": "Os drones revolucionaram o setor agrícola brasileiro, substituindo gradativamente tarefas pesadas e reduzindo impactos ambientais drásticos. Suas principais vantagens incluem:",
        "drone-v1-title": "Economia Hídrica", "drone-v1-desc": "Podem reduzir o uso de água em até 95% em comparação com os pulverizadores terrestres convencionais.",
        "drone-v2-title": "Sem Amassamento", "drone-v2-desc": "Como flutuam sobre a plantação, evitam completamente a perda física de plantas por pisoteio de pneus.",
        "contato-title": "Contato", "contato-subtitle": "Entre em contato conosco",
        "label-nome": "Nome", "label-email": "E-mail", "label-msg": "Mensagem", "btn-enviar": "Enviar",
        "footer-rights": "Todos os direitos reservados.",
        "placeholder-nome": "Digite seu nome completo...", "placeholder-email": "seu.email@exemplo.com", "placeholder-msg": "Escreva sua mensagem aqui..."
    },
    en: {
        "nav-inicio": "Home", "nav-sobre": "About Us", "nav-tec": "Technology", 
        "nav-praticas": "Regenerative Practices", "nav-precisao": "Precision Agriculture", "nav-contato": "Contact",
        "badge-blue": "Recommended",
        "slide1-title": "Strong Agro, Sustainable Future", "slide1-desc": "The perfect balance between advancing technology and the land that feeds us.",
        "slide2-title": "The Voice of the Soil We Walk On", "slide2-desc": "Educating new generations means sowing the awareness that soil is a living organism.",
        "slide3-title": "Intelligence Serving Nature", "slide3-desc": "Drones and data working together to apply inputs with surgical precision.",
        "boasvindas-title": "Welcome to the Sustainable Agro Journey", "boasvindas-desc": "Explore our platform and understand how the union of earth knowledge and tomorrow's technology will shape our planet.",
        "sobre-title": "The Educational Purpose: Why do we exist?", "sobre-subtitle": "Soil is not just dirt under our feet. It is the beating heart of life on earth.",
        "sobre-motivacional": "Daily, thoughtless actions and incorrect management degrade tons of fertile soil through erosion and compaction. This space was born as an educational manifesto for the Agrinho Contest. Our goal goes far beyond informing: we want to touch hearts and awaken minds to restore our ground.",
        "impacto-title": "The Alert: The Weight That Suffocates", "impacto-desc": "Heavy machinery traffic crushes soil structures, forcing air out and blocking water. Weak roots make weak crops. Recognizing mistakes is the first step to change.",
        "solucao-title": "The Hope: Healing Through Nature", "solucao-desc": "When we adopt ecological techniques, we give the earth a chance to breathe again. A biodiverse soil stores water, mitigates droughts, captures carbon, and thrives.",
        "tec-tag": "Digital Innovation", "tec-title": "High Technology for the Fields", "tec-subtitle": "Drones, data, and precision for smart and sustainable decision-making.",
        "tech1-title": "Aerial Monitoring", "tech1-desc": "State-of-the-art drones capture high-resolution multispectral imagery, pinpointing pest infestations and hydric stress before they spread.",
        "tech2-title": "Data Decisions", "tech2-desc": "Intelligent algorithms process field data in real-time. Producers visualize heatmaps and predictive reports right from their hands.",
        "tech3-title": "Smart Applications", "tech3-desc": "Telemetry systems guide surgical spraying. Resources are only applied where necessary, shielding the ecosystem and avoiding waste.",
        "prat-title": "Regenerative Farming Practices", "prat-subtitle": "Small coordinated actions that generate big transformations in crop health.",
        "p1-title": "No-Till Farming", 
        "p1-desc": "Considered the greatest conservationist revolution in tropical agriculture, the No-Till System eliminates traditional plowing. Sowing directly over residues creates a permanent organic shield, cutting water erosion by 90%.",
        "p2-title": "Crop Rotation", 
        "p2-desc": "Planned alternation of plant species over time in the same area. Intercropping deep fibrous roots and taproots creates biological decompaction, blocks pests, and optimizes nutrient cycling.",
        "regen-metrics-title": "Measurable Impact on Ecosystem Regeneration",
        "m1": "Water Savings", "m2": "Carbon Reduction", "m3": "Better Soil Health",
        "precisao-title": "Innovations in Precision Agriculture", "precisao-subtitle": "State-of-the-art technology shaping a new era of efficiency and preservation in agribusiness.",
        "precisao-p-main": "Drones have revolutionized the Brazilian agricultural sector, gradually replacing heavy machinery and reducing drastic environmental impacts. Their main advantages include:",
        "drone-v1-title": "Water Economy", "drone-v1-desc": "They can reduce water use by up to 95% compared to conventional ground sprayers.",
        "drone-v2-title": "No Trampling", "drone-v2-desc": "As they float above the crops, they completely avoid physical plant damage from tires.",
        "contato-title": "Contact", "contato-subtitle": "Get in touch with us",
        "label-nome": "Name", "label-email": "E-mail", "label-msg": "Message", "btn-enviar": "Send",
        "footer-rights": "All rights reserved.",
        "placeholder-nome": "Your full name...", "placeholder-email": "your.email@example.com", "placeholder-msg": "Type your message here..."
    },
    es: {
        "nav-inicio": "Inicio", "nav-sobre": "Nosotros", "nav-tec": "Tecnología", 
        "nav-praticas": "Prácticas Regenerativas", "nav-precisao": "Agricultura de Precisión", "nav-contato": "Contacto",
        "badge-blue": "Recomendado",
        "slide1-title": "Agro Fuerte, Futuro Sostenible", "slide1-desc": "El equilibrio perfecto entre la tecnología que avanza y la tierra que nos alimenta.",
        "slide2-title": "La Voz del Suelo que Pisamos", "slide2-desc": "Educar a las novas generaciones es sembrar la conciencia de que el suelo es un organismo vivo.",
        "slide3-title": "Inteligencia al Servicio de la Naturaleza", "slide3-desc": "Drones y datos trabajando juntos para aplicar insumos con precisión quirúrgica.",
        "boasvindas-title": "Bienvenido a la Jornada del Agro Sostenible", "boasvindas-desc": "Explore nuestra plataforma y comprenda cómo la unión de los saberes de la tierra y las tecnologías del mañana moldearán nuestro planeta.",
        "sobre-title": "El Propósito Educativo: ¿Por qué existimos?", "sobre-subtitle": "El suelo no es sólo tierra bajo nuestros pies. Es el corazón palpitante de la vida en el planeta.",
        "sobre-motivacional": "Diariamente, acciones irresponsables y manejos incorrectos degradan toneladas de suelos fértiles por erosión y compactación. Este espacio nació como un manifiesto educativo para el Concurso Agrinho. ¡Amar la tierra es proteger nuestra existencia!",
        "impacto-title": "La Alerta: El Peso que Asfixia", "impacto-desc": "El tráfico de tractores pesados aplasta las estructuras del suelo, expulsando el aire y bloqueando el agua. Raíces débiles generan plantas frágiles. Reconocer el error es el primer paso.",
        "solucao-title": "La Esperanza: La Cura por la Naturaleza", "solucao-desc": "Cuando adoptamos técnicas ecológicas, le damos a la tierra la oportunidad de respirar. Un suelo rico en biodiversidad almacena agua, mitiga sequías, captura carbono y florece.",
        "tec-tag": "Innovación Digital", "tec-title": "Alta Tecnología a Favor del Campo", "tec-subtitle": "Drones, datos y precisión para la toma de decisiones inteligentes y sostenibles.",
        "tech1-title": "Monitoreo Aéreo", "tech1-desc": "Drones de última generación capturan imágenes multiespectrais de alta resolución, identificando focos de pragas y estrés hídrico antes de que se propaguen.",
        "tech2-title": "Decisões com Dados", "tech2-desc": "Algoritmos inteligentes procesan datos del campo en tiempo real. Los productores visualizan mapas de calor e informes predictivos directamente en la palma de su mano.",
        "tech3-title": "Aplicaciones Inteligentes", "tech3-desc": "Sistemas de telemetria guían pulverizaciones quirúrgicas. Los insumos se aplican solo donde es necesario, protegiendo el ecosistema y evitando desperdicios.",
        "prat-title": "Práticas de Agricultura Regenerativa", "prat-subtitle": "Pequeñas acciones coordenadas que generan grandes transformaciones en la salud del cultivo.",
        "p1-title": "Siembra Directa", 
        "p1-desc": "Considerada la mayor revolución conservacionista, elimina el arado tradicional. Al sembrar sobre rastrojo, se crea un mantillo que mitiga la oscilación térmica y frena la erosión hídrica en un 90%.",
        "p2-title": "Rotación de Cultivos", 
        "p2-desc": "Alternancia planificada de cultivos en el tiempo. Combinar raíces profundas y superficiales genera una descompactación biológica natural, reduce malezas y optimiza la nutrición.",
        "regen-metrics-title": "Impacto Medible en la Regeneración del Ecosistema",
        "m1": "Ahorro de Agua", "m2": "Reducción de Carbono", "m3": "Mejor Salud del Suelo",
        "precisao-title": "Innovaciones en Agricultura de Precisón", "precisao-subtitle": "Tecnología de vanguardia que da forma a una era de eficiencia y preservación en el sector agrícola.",
        "precisao-p-main": "Los drones revolucionaron el sector agrícola brasileiro, sustituyendo gradualmente tareas pesadas y reduciendo drásticos impactos ambientales. Sus principales ventajas incluyen:",
        "drone-v1-title": "Economía Hídrica", "drone-v1-desc": "Pueden reducir el uso de agua hasta en un 95% en comparación con los pulverizadores terrestres convencionales.",
        "drone-v2-title": "Sin Aplastamiento", "drone-v2-desc": "Como vuelan sobre la plantación, evitan por completo la pérdida física de plantas por pisoteio de neumáticos.",
        "info-water": "Reducción del Consumo de Agua Potable", "info-damage": "Preservación contra el Compactamiento del Suelo", "info-carbon": "Reducción de la Emisión de Carbono (Combustible)",
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
    sections.forEach(section => section.classList.remove('active'));

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
        activeSection(link.getAttribute('href'));
    });
});

if (logoHome) {
    logoHome.addEventListener('click', (e) => {
        e.preventDefault();
        activeSection('#inicio');
    });
}

// Inicializa marcador ativo
const defaultActive = document.querySelector('.nav-menu a[href="#inicio"]');
if (defaultActive) defaultActive.classList.add('active-link');


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
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
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
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang]?.[key] || translations['pt'][key];
    });

    document.querySelectorAll('[data-i18n-holder]').forEach(element => {
        const key = element.getAttribute('data-i18n-holder');
        const text = translations[lang]?.[key] || translations['pt'][key];
        if (text) element.setAttribute('placeholder', text);
    });
}

// Inicializa a página em português
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
