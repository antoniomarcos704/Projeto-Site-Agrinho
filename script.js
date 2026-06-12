document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. DICIONÁRIO DE IDIOMAS (INTERNACIONALIZAÇÃO i18n)
       ========================================================================== */
    const languages = {
        pt: {
            logoHighlight: "Futuro",
            navInicio: "Início", navSobre: "Sobre", navTecnologia: "Tecnologia", navPraticas: "Agricultura Regenerativa", navPrecisao: "Agricultura de Precisão", navContato: "Contato",
            slide1Title: "Agricultura Sustentável", slide1Desc: "O equilíbrio perfeito entre a produção de alimentos e a preservação do meio ambiente.",
            slide2Title: "Tecnologia no Campo", slide2Desc: "Inovações digitais que transformam a gestão e a eficiência da sua lavoura.",
            slide3Title: "Educação e Conhecimento", slide3Desc: "Capacitando as novas gerações para liderar o futuro do agronegócio consciente.",
            slide4Title: "Preservação de Recursos", slide4Desc: "Técnicas avançadas para economizar água e manter o solo sempre fértil.",
            slide5Title: "Carbono Neutro", slide5Desc: "Práticas que reduzem a emissão de gases e combatem as mudanças climáticas.",
            welcomeTitle: "Bem-vindo ao AgroFuturo", welcomeText: "Plataforma dedicada a disseminar conhecimento técnico, prático e inovador para o desenvolvimento sustentável das nossas plantações.",
            aboutBannerTitle: "Cultivar a Mente para Colher o Amanhã", aboutBannerDesc: "A educação é a semente mais poderosa para a transformação do campo.",
            cardDangerTitle: "O Perigo: Compactação do Solo", 
            cardDangerDesc: "A compactação do solo é um fenômeno complexo e que pode ocorrer devido a causas naturais ou a intervenção do homem. Quando um solo se torna mais compactado, suas propriedades e características físicas e químicas se alteram.<br><br>Os principais fatores envolvidos na ocorrência da compactação do solo são:<br><ul style='margin-left: 20px; margin-bottom: 15px;'><li>Tráfego intenso de máquinas;</li><li>Preparo de solo com umidade inadequada;</li><li>Histórico da área (compactação subsuperficial);</li><li>Mobilização desnecessária do solo.</li></ul>Na agricultura, as principais consequências de um solo compactado são sentidas no crescimento das raízes das plantas, pois existe a redução no armazenamento de água e oxigênio no solo.<br><br>Essas consequências foram apontadas no artigo <em>Compactação do solo no desenvolvimento radicular e na produtividade da soja</em>, pelos pesquisadores Amauri Nelson Beulter e José Frederico Centurion.<br><br>O estudo apontou que nos solos compactados há diminuição da porosidade, da disponibilidade de água e da difusão de gases, parâmetros que têm relações fundamentais com o desenvolvimento das raízes.<br><br>A compactação pode ocorrer no solo em duas principais formas: superficial e subsuperficial. A primeira é causada principalmente pela pressão em área com o tráfego de máquinas e animais. Já a segunda, popularmente conhecida como “pé-de-grade” ou “pé-de-arado”, é atribuída à pressão localizada de implementos agrícolas.<br><br>Com raízes menos desenvolvidas, as plantas ficam mais vulneráveis a situações de estresse hídrico. Isso acontece porque as raízes têm um impedimento físico para o seu pleno desenvolvimento e acabam ficando concentradas das camadas mais superficiais do solo.<br><br>Geralmente, as plantas que sofrem mais severamente com os efeitos do estresse hídrico potencializado pela compactação do solo são aquelas com sistemas radiculares mais profundos. Além disso, o baixo desenvolvimento do sistema radicular também limita o acesso da planta a nutrientes pouco móveis no solo, como o fósforo, o cálcio e o magnésio. Se essa limitação for combinada com uma baixa diversidade de microrganismos no solo, o potencial da planta em responder aos programas de adubação se torna mínimo.<br><br>Isso acontece porque os microrganismos têm um papel essencial no estabelecimento de relações simbióticas com as raízes das plantas, para aumentar a sua área de contato com o solo e consequentemente com a água e os nutrientes.<br><br>E a manutenção da saúde do ecossistema do solo (vida no solo) também é diretamente dependente das raízes. Elas também exercem um papel essencial na manutenção do ciclo da matéria orgânica, propiciando a existência de microrganismos benéficos com o fornecimento de exsudatos radiculares, como os carboidratos, que servem de alimento para essas populações.<br><br>Pesquisas sobre os microrganismos presentes no solo têm comprovado uma série de relações e efeitos benéficos que eles têm com o solo e as plantas, como apresentados no documento <em>Microrganismos promotores do crescimento de plantas</em>:<br><ul style='margin-left: 20px; margin-bottom: 15px;'><li>Atuando na mobilização e transporte de nutrientes;</li><li>Realizando a fixação, solubilização e mineralização de nutrientes, como o nitrogênio e fósforo;</li><li>Aumentando a área de absorção das raízes;</li><li>Produção de fito-hormônios e de compostos orgânicos voláteis que estimulam o desenvolvimento vegetal;</li><li>Protegendo as plantas contra pragas e doenças.</li></ul><br><small><em>Fonte: blog.verde</em></small>",
            cardSuccessTitle: "A Solução: Regeneração e Fertilidade Ativa", 
            cardSuccessDesc: "A regeneration do solo é o processo de melhorar sua qualidade e devolver nutrientes por meio da adição de matéria orgânica, restaurando sua fertilidade e produtividade natural. Para reverter os danos da compactação e melhorar a drenagem e a nutrição das plantas, o manejo regenerativo atua diretamente na restauração de áreas degradadas ao seu estado natural e na introdução de espécies nativas.<br><br>Essa recuperação prática é viabilizada pelo uso de compostos, adubos verdes e culturas de cobertura (como trigo ou milho plantados entre as safras principais). Essas plantas protegem a terra contra a erosão, controlam a umidade e sombreiam o solo, impedindo o avanço de plantas daninhas. Embora seja um processo longo e gradual, as recompensas são definitivas: o ecossistema prospera, os custos com fertilizantes e pesticidas caem drasticamente e o produtor garante uma lavoura resiliente e de alto valor de mercado.<br><br><small><em>Fonte: geopard.tech</em></small>",
            techTitle: "Inovação e Tecnologia Digital", techBadge: "Recomendado",
            techCard1Title: "Monitoramento Aéreo", techCard1Desc: "Imagens multiespectrais identificam pragas e anomalias térmicas antes que se espalhem.",
            techCard2Title: "Decisões com Dados", techCard2Desc: "Algoritmos de Big Data analisam o clima e o histórico da área para indicar o momento exato do plantio.",
            techCard3Title: "Aplicações Inteligentes", techCard3Desc: "Sistemas de taxa variável aplicam insumos apenas onde é necessário, eliminando desperdícios.",
            praticasTitle: "Práticas de Agricultura Regenerativa", pratCard1Title: "Plantio Direto na Palha", pratCard1Desc: "Sem revolver a terra, a matéria orgânica antiga protege o solo contra erosões e mantém a umidade ideal por muito mais tempo.",
            pratCard2Title: "Rotação de Culturas", pratCard2Desc: "Alternar espécies diferentes na mesma safra quebra o ciclo biológico de pragas e enriquece os nutrientes do solo naturalmente.",
            metric1: "Economia de Água", metric2: "Redução de Carbono", metric3: "Mais Saúde do Solo",
            precisaoTitle: "Drones Agrícolas de Alta Precisão", precisaoDesc: "A evolução robótica aérea garante a máxima proteção da lavoura com impacto ambiental mínimo e precisão cirúrgica de gota.",
            vantage1Title: "Economia Hídrica", vantage1Desc: "Redução drástica no volume de água por hectare.",
            vantage2Title: "Sem Amassamento", vantage2Desc: "Zero perdas por esmagamento de plantas na esteira.",
            vantage3Title: "Acesso Total", vantage3Desc: "Alcança áreas íngremes ou solos encharcados facilmente.",
            vantage4Title: "Operação Contínua", vantage4Desc: "Planos automatizados dia e noite com precisão centimétrica.",
            infoTitle: "Indicadores de Eficiência Ecológica", chart1Label: "Precisão de Pulverização", chart2Label: "Segurança Operacional", chart3Label: "Redução de Desperdício",
            contactTitle: "Fale Conosco", formNameLabel: "Nome completo", formNameHolder: "Digite seu nome", formEmailLabel: "E-mail corporativo/pessoal", formEmailHolder: "nome@exemplo.com", formMsgLabel: "Sua mensagem ou proposta", formMsgHolder: "Como podemos ajudar no seu projeto rural?", formSubmitBtn: "Enviar Mensagem",
            successFeedback: "Obrigado, {name}! Sua mensagem foi enviada com sucesso no idioma selecionado."
        },
        en: {
            logoHighlight: "Future",
            navInicio: "Home", navSobre: "About", navTecnologia: "Technology", navPraticas: "Practices", navPrecisao: "Precision", navContato: "Contact",
            slide1Title: "Sustainable Agriculture", slide1Desc: "The perfect balance between food production and environmental preservation.",
            slide2Title: "Technology in Fields", slide2Desc: "Digital innovations transforming management and your crop's efficiency.",
            slide3Title: "Education & Knowledge", slide3Desc: "Empowering new generations to lead the future of conscious agribusiness.",
            slide4Title: "Resource Preservation", slide4Desc: "Advanced techniques to save water and keep soil consistently fertile.",
            slide5Title: "Carbon Neutral", slide5Desc: "Practices reducing greenhouse gases and fighting climate changes.",
            welcomeTitle: "Welcome to AgroFuturo", welcomeText: "A platform dedicated to spreading technical, practical, and innovative knowledge for the sustainable development of crops.",
            aboutBannerTitle: "Cultivate Minds to Harvest Tomorrow", aboutBannerDesc: "Education is the most powerful seed for transforming rural horizons.",
            cardDangerTitle: "The Hazard: Soil Compaction", 
            cardDangerDesc: "Soil compaction is a complex phenomenon that can occur due to natural causes or human intervention. When soil becomes compacted, its physical and chemical properties alter.<br><br>The primary factors leading to soil compaction include:<br><ul style='margin-left: 20px; margin-bottom: 15px;'><li>Intense machinery traffic;</li><li>Soil preparation under inadequate moisture;</li><li>Field history (subsurface compaction);</li><li>Unnecessary soil mobilization.</li></ul>In agriculture, the main consequences of compacted soil hit root growth, as water and oxygen storage capacity drops.<br><br>These impacts were detailed in the study <em>Soil compaction in root development and soybean yield</em> by researchers Amauri Nelson Beulter and José Frederico Centurion.<br><br>The research showed that compacted soils face decreased porosity, water availability, and gas diffusion—parameters critical to roots.<br><br>Compaction manifests in two main forms: surface and subsurface. The first stems from machinery and livestock pressure, while the second, known as 'plow pan', is tied to direct localized pressures from tillage implements.<br><br>With limited root zones, crops become vulnerable to drought stresses. Roots face physical blocks and get trapped in shallow surface layers.<br><br>Deep-rooted crops suffer the most from drought stresses worsened by compaction. Furthermore, poor root zones limit plant access to static soil nutrients like phosphorus, calcium, and magnesium. Combined with low microbial diversity, the crop's ability to respond to fertilizers minimizes.<br><br>Soil microbes play a critical role in establishing symbiotic relationships with roots, extending their reach to capture water and inputs.<br><br>Sustaining soil biology balances are entirely dependent on roots. They drive organic matter cycles and feed helpful microbes via root exudates, like carbohydrates.<br><br>Studies published in <em>Plant growth-promoting microorganisms</em> confirmed various beneficial relationships:<br><ul style='margin-left: 20px; margin-bottom: 15px;'><li>Mobilizing and transporting nutrients;</li><li>Fixing, solubilizing, and mineralizing nitrogen and phosphorus;</li><li>Expanding root absorption surfaces;</li><li>Producing phytohormones and volatile compounds that boost growth;</li><li>Protecting crops against pests and diseases.</li></ul><br><small><em>Source: blog.verde</em></small>",
            cardSuccessTitle: "The Solution: Active Regeneration & Fertility", 
            cardSuccessDesc: "Soil regeneration aims to improve quality and restock nutrients by adding organic matter, restoring natural fertility and yields. To reverse compaction damage and boost drainage and crop nutrition, regenerative management targets restoring degraded spaces and introducing native species.<br><br>This practical recovery uses composts, green manures, and cover crops (like wheat or corn between main cash crops). These plants safeguard topsoil from erosion, control moisture, and shade fields to halt weeds. Although a gradual process, the returns are definitive: ecosystems thrive, fertilizer and pesticide bills drop sharply, and farmers secure resilient, high-value harvests.<br><br><small><em>Source: geopard.tech</em></small>",
            techTitle: "Innovation & Digital Tech", techBadge: "Featured",
            techCard1Title: "Aerial Monitoring", techCard1Desc: "Multispectral imagery detects crop pests and thermal shifts before spreading.",
            techCard2Title: "Data-Driven Decisions", techCard2Desc: "Big Data algorithms analyze weather historical charts to deliver optimal planting days.",
            techCard3Title: "Smart Application", techCard3Desc: "Variable-rate systems apply inputs exactly where needed, avoiding chemical wastes.",
            praticasTitle: "Regenerative Farming Methods", pratCard1Title: "No-Till Farming", pratCard1Desc: "Without turning over the earth, crop residue safeguards topsoil against erosion and retains ambient humidity.",
            pratCard2Title: "Crop Rotation", pratCard2Desc: "Alternating biological botanical families disrupts insect lifecycles and enriches nutrients.",
            metric1: "Water Savings", metric2: "Carbon Reduction", metric3: "Better Soil Health",
            precisaoTitle: "High-Precision Ag Drones", precisaoDesc: "Aerial robotic breakthroughs secure ultimate yield defenses with minor footprint and micrometric target delivery.",
            vantage1Title: "Hydric Saving", vantage1Desc: "Drastic drops in chemical mixing volumes per managed acre.",
            vantage2Title: "No Compaction Trampling", vantage2Desc: "Zero losses associated with wheel track damage across fields.",
            vantage3Title: "Total Terrain Access", vantage3Desc: "Flies easily over abrupt hillsides or muddy saturated paddocks.",
            vantage4Title: "24/7 Operations", vantage4Desc: "Autonomous paths working seamlessly day/night with centimeter accuracy.",
            infoTitle: "Ecological Efficiency Metrics", chart1Label: "Spraying Accuracy", chart2Label: "Operational Safety", chart3Label: "Waste Mitigation",
            contactTitle: "Get in Touch", formNameLabel: "Full Name", formNameHolder: "Type your name", formEmailLabel: "Business/Personal Email", formEmailHolder: "name@example.com", formMsgLabel: "Message or Request", formMsgHolder: "How can we assist your farming setup?", formSubmitBtn: "Send Message",
            successFeedback: "Thank you, {name}! Your data was submitted successfully in the current active language."
        },
        es: {
            logoHighlight: "Futuro",
            navInicio: "Inicio", navSobre: "Sobre", navTecnologia: "Tecnología", navPraticas: "Prácticas", navPrecisao: "Precisión", navContato: "Contacto",
            slide1Title: "Agricultura Sustentable", slide1Desc: "El equilibrio perfeito entre producción de alimentos y preservación ambiental.",
            slide2Title: "Tecnología de Campo", slide2Desc: "Innovaciones digitales para transformar la gestión y eficiencia del cultivo.",
            slide3Title: "Educación y Saberes", slide3Desc: "Capacitando nuevas generaciones para liderar un agro consciente.",
            slide4Title: "Cuidado de Recursos", slide4Desc: "Técnicas avanzadas para ahorrar agua y fijar fertilidad orgánica.",
            slide5Title: "Carbono Neutral", slide5Desc: "Prácticas dirigidas a mitigar gases y combatir cambios climáticos.",
            welcomeTitle: "Bienvenidos a AgroFuturo", welcomeText: "Plataforma dedicada al saber técnico, práctico y de vanguardia para pulsar el desarrollo sustentable.",
            aboutBannerTitle: "Cultivar la Mente para Cosechar el Mañana", aboutBannerDesc: "La educação representa la semilla más potente del medio rural.",
            cardDangerTitle: "El Peligro: Compactación del Suelo", 
            cardDangerDesc: "La compactación del suelo es un fenómeno complejo que puede ocorrer debido a causas naturales o la intervención humana. Cuando un suelo se compacta, alteran sus propiedades físicas y químicas.<br><br>Los factores clave de la compactación son:<br><ul style='margin-left: 20px; margin-bottom: 15px;'><li>Tráfico pesado de maquinaria;</li><li>Labranza con niveles de humedad inadecuados;</li><li>Historial del lote (compactación profunda);</li><li>Remoción innecesaria del terreno.</li></ul>En agricultura, la consecuencia principal afecta al crecimiento de las raíces por la reducción de almacenaje de agua y oxígeno.<br><br>Estos efectos se detallan en el estudio <em>Compactación del suelo en el desarrollo radicular y rendimiento de soja</em> de los investigadores Amauri Nelson Beulter y José Frederico Centurion.<br><br>La investigación demostró que los suelos compactados sufren pérdidas de porosidad, disponibilidad hídrica y difusión de gases, ejes críticos para las raíces.<br><br>La compactación ocurre de forma superficial y subsuperficial. La primera deriva de presiones de máquinas y ganado, mientras que la segunda, apodada 'pie de arado', se asocia a cargas localizadas de los implementos de labranza.<br><br>Con raíces limitadas, los cultivos quedan vulnerables a sequías severas debido a barreras físicas que las concentran en capas superficiales.<br><br>Las plantas de raíz profunda sufren con mayor rigor el estrés hídrico potenciado por compactación. Además, limita el acceso a nutrientes de baja movilidad como fósforo, calcio y magnesio. Junto a una baja diversidad microbiana, la respuesta a la fertilización cae al mínimo.<br><br>La microfauna del suelo cumple un rol esencial al tejer relaciones simbióticas con las raíces, expandiendo su alcance hacia el agua y los nutrientes.<br><br>Mantener la salud biológica del suelo depende de las raíces. Ellas comandan los ciclos de materia orgánica alimentando poblaciones benéficas con exudados radiculares como carbohidratos.<br><br>Estudios en <em>Microorganismos promotores del crecimiento vegetal</em> confirman múltiples ventajas:<br><ul style='margin-left: 20px; margin-bottom: 15px;'><li>Movilización y transporte de nutrientes esenciales;</li><li>Fijación, solubilización y mineralización de nitrógeno y fósforo;</li><li>Expansión de las superficies de absorción radicular;</li><li>Producción de fitohormonas que estimulan el desarrollo;</li><li>Protección biológica contra plagas y enfermedades.</li></ul><br><small><em>Fuente: blog.verde</em></small>",
            cardSuccessTitle: "La Solución: Regeneração e Fertilidade Ativa", 
            cardSuccessDesc: "La regeneración del suelo busca mejorar su calidad y reponer nutrientes mediante materia orgánica, rescatando su fertilidad y rendimientos naturales. Para Reverter los daños por compactación y mejorar el drenaje, el manejo regenerativo actúa restaurando terrenos degradados e introduciendo especies nativas.<br><br>Esta recuperación práctica se viabiliza con compostas, abonos verdes y cultivos de cobertura (como trigo o maíz entre las cosechas principales). Estas plantas protegen la tierra de la erosión, controlan la humedad y dan sombra frenando malezas. Aunque es un camino gradual, el retorno es definitivo: el ecosistema prospera, los costos de fertilizantes y pesticidas caen drásticamente y el productor asegura un cultivo resiliente de alto valor de mercado.<br><br><small><em>Source: geopard.tech</em></small>",
            techTitle: "Innovación y Revolución Digital", techBadge: "Destacado",
            techCard1Title: "Monitoreo Aéreo", techCard1Desc: "Cámaras multiespectrales captan anomalías botánicas antes de su expansión.",
            techCard2Title: "Decisiones con Dados", techCard2Desc: "Algoritmos predictivos cruzan meteorología para fechar siembras perfectas.",
            techCard3Title: "Dosis Variable", techCard3Desc: "Dispositivos inteligentes aplican insumos únicamente donde hace falta.",
            praticasTitle: "Modelos de Agro Regenerativo", pratCard1Title: "Siembra Directa", pratCard1Desc: "Sin voltear mantillos, rastrojos anteriores mitigan la erosión y retienen la humedad crítica.",
            pratCard2Title: "Rotación de Cultivos", pratCard2Desc: "Mudar familias de plantas frena patógenos de raíz y aporta nitrógeno natural.",
            metric1: "Ahorro de Agua", metric2: "Redução de Carbono", metric3: "Suelo Más Sano",
            precisaoTitle: "Drones Agrícolas de Precisión", precisaoDesc: "Dispositivos autónomos que salvan cosechas operando bajo impactos reducidos y máxima aspersión focalizada.",
            vantage1Title: "Ahorro Hídrico", vantage1Desc: "Reducción severa de caudales de mezcla líquida por hectare.",
            vantage2Title: "Cero Pisoteo", vantage2Desc: "Ninguna pérdida económica provocada por huellas de rodados.",
            vantage3Title: "Acceso Geográfico", vantage3Desc: "Vuela sobre pendientes empinadas o lodo intransitable sin frenos.",
            vantage4Title: "Vuelo Autónomo Continúo", vantage4Desc: "Misiones programadas día y noche respaldadas por GPS centimétrico.",
            infoTitle: "Indicadores de Impacto Ecológico", chart1Label: "Precisión de Aspersión", chart2Label: "Seguridad de Operación", chart3Label: "Mitigación de Desperdicio",
            contactTitle: "Contáctenos", formNameLabel: "Nombre completo", formNameHolder: "Escriba su nombre", formEmailLabel: "Correo electrónico", formEmailHolder: "nombre@exemplo.com", formMsgLabel: "Mensaje o Consulta", formMsgHolder: "¿Cómo podemos potenciar su ecosistema rural?", formSubmitBtn: "Enviar Mensagem",
            successFeedback: "¡Muchas gracias, {name}! Mensaje enviado correctamente bajo el lenguaje seleccionado."
        }
    };

    let currentLanguage = 'pt';
    const langSelector = document.getElementById('language-selector');

    function applyTranslations(lang) {
        currentLanguage = lang;
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (languages[lang][key]) {
                element.innerHTML = languages[lang][key];
            }
        });
        document.querySelectorAll('[data-i18n-holder]').forEach(element => {
            const key = element.getAttribute('data-i18n-holder');
            if (languages[lang][key]) {
                element.setAttribute('placeholder', languages[lang][key]);
            }
        });
    }

    langSelector.addEventListener('change', (e) => {
        applyTranslations(e.target.value);
    });


    /* ==========================================================================
       2. NAVEGAÇÃO SPA INTELIGENTE & PERFORMANCE
       ========================================================================== */
    const navLinks = document.querySelectorAll('.nav-link, .logo');
    const sections = document.querySelectorAll('.spa-section');
    let carouselInterval = null;

    function navigateSPA(targetId) {
        navLinks.forEach(link => {
            if(link.getAttribute('href') === targetId) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });

        sections.forEach(section => {
            const id = `#${section.getAttribute('id')}`;
            if(id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (targetId === '#inicio' || targetId === '') {
            startCarouselAutoPlay();
        } else {
            stopCarouselAutoPlay();
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            navigateSPA(targetId);
        });
    });


    /* ==========================================================================
       3. MECÂNICA E LÓGICA DO CARROSSEL DE IMAGENS
       ========================================================================== */
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById('carousel-dots-container');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    let currentSlideIdx = 0;
    const rotationTime = 6000;

    slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if(idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => changeSlide(idx));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function changeSlide(index) {
        slides[currentSlideIdx].classList.remove('active');
        dots[currentSlideIdx].classList.remove('active');
        
        if (index >= slides.length) currentSlideIdx = 0;
        else if (index < 0) currentSlideIdx = slides.length - 1;
        else currentSlideIdx = index;

        slides[currentSlideIdx].classList.add('active');
        dots[currentSlideIdx].classList.add('active');
    }

    function nextSlide() { changeSlide(currentSlideIdx + 1); }
    function prevSlide() { changeSlide(currentSlideIdx - 1); }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    function startCarouselAutoPlay() {
        if(!carouselInterval) {
            carouselInterval = setInterval(nextSlide, rotationTime);
        }
    }

    function stopCarouselAutoPlay() {
        if(carouselInterval) {
            clearInterval(carouselInterval);
            carouselInterval = null;
        }
    }


    /* ==========================================================================
       4. PERSISTÊNCIA E GESTÃO DO TEMA (LIGHT / DARK)
       ========================================================================== */
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });


    /* ==========================================================================
       5. VALIDAÇÃO E FEEDBACK DINÂMICO DO FORMULÁRIO
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputName = document.getElementById('name').value;
        let feedbackTemplate = languages[currentLanguage].successFeedback;
        let computedMessage = feedbackTemplate.replace('{name}', inputName);

        formFeedback.textContent = computedMessage;
        formFeedback.classList.remove('msg-hidden');

        contactForm.reset();

        setTimeout(() => {
            formFeedback.classList.add('msg-hidden');
        }, 5000);
    });

    /* INICIALIZAÇÃO GLOBAL */
    initTheme();
    applyTranslations('pt');
    startCarouselAutoPlay();
});