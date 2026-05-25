// Inicializa ícones Lucide de forma assíncrona
lucide.createIcons();

/* ==========================================================================
   1. DATA STORE - DICIONÁRIOS DE IDIOMAS (5 Idiomas)
   ========================================================================== */
const translations = {
    pt: {
        "nav-about": "Sobre",
        "nav-pillars": "Pilares",
        "nav-calc": "Simulador",
        "nav-contact": "Contato",
        "nav-home": "Início",
        "hero-badge": "Concurso Agrinho 2026",
        "hero-title-1": "Agro Forte,",
        "hero-title-2": "Futuro Sustentável:",
        "hero-desc": "A agricultura generativa revoluciona o equilíbrio entre produção de alimentos em escala e a preservação do meio ambiente. Descubra como revitalizar o solo, restaurar ecossistemas e garantir alta produtividade.",
        "hero-btn-primary": "Testar Simulador",
        "hero-btn-secondary": "Saber Mais",
        "about-tag": "Educação e Sustentabilidade",
        "about-title": "O que é Agricultura Regenerativa?",
        "about-subtitle": "Um modelo agrícola inovador focado em reabilitar e conservar os recursos naturais, trabalhando em harmonia com as leis da própria natureza.",
        "about-grid-title": "Aumentar a colheita, curando o nosso planeta",
        "about-grid-text": "Diferente da agricultura convencional baseada apenas na exploração intensa, a agricultura regenerativa foca em reconstruir a matéria orgânica do solo, melhorar o ciclo da água e resgatar a biodiversidade. Isso resulta em safras mais resilientes a pragas e mudanças climáticas severas, sem abrir mão de alta produtividade.",
        "feat1-title": "Saúde do Solo",
        "feat1-desc": "Eliminação do revolvimento agressivo e conservação de microvida.",
        "feat2-title": "Retenção de Água",
        "feat2-desc": "Solos ricos em matéria orgânica absorvem e filtram muito mais água.",
        "feat3-title": "Sequestro de Carbono",
        "feat3-desc": "Transformação das lavouras em sumidouros naturais de gases poluentes.",
        "feat4-title": "Rendimento Seguro",
        "feat4-desc": "Redução de custos com fertilizantes artificiais e venenos químicos.",
        "pillars-tag": "Como Aplicar",
        "pillars-title": "Pilares da Prática Regenerativa",
        "pillars-subtitle": "Métodos práticos essenciais para alcançar o equilíbrio ideal entre alta produtividade no campo e proteção ambiental.",
        "p1-title": "Rotação de Culturas",
        "p1-desc": "Alternar diferentes famílias de plantas na mesma área para evitar a exaustão de nutrientes específicos do solo e quebrar o ciclo natural de desenvolvimento de pragas.",
        "p2-title": "Cobertura Permanente",
        "p2-desc": "Manter o solo sempre coberto com plantas vivas ou palha de safras anteriores. Isso diminui a erosão, refresca a temperatura do solo e bloqueia plantas invasoras de forma limpa.",
        "p3-title": "Integração Lavoura-Pecuária",
        "p3-desc": "Consorciar animais e plantações para criar um ecossistema vivo. O gado fertiliza o solo naturalmente com esterco, gerando economia drástica de insumos sintéticos industriais.",
        "calc-tag": "Simulador Educativo",
        "calc-title": "Estime seu Impacto Verde",
        "calc-subtitle": "Selecione o tamanho da propriedade agrícola e o tipo de manejo para calcular em tempo real os benefícios de sustentabilidade e lucratividade.",
        "calc-form-title": "Configurações da Fazenda",
        "calc-form-desc": "Defina as características para ver o impacto no ecossistema e economia do agricultor.",
        "label-area": "Tamanho da Área (Hectares):",
        "label-type": "Tipo de Manejo Atual:",
        "opt-conv": "Convencional (Sem cobertura, alto defensivo)",
        "opt-trans": "Transição (Plantio direto inicial)",
        "opt-regen": "Regenerativo Total (Rotação e Biológicos)",
        "res-title": "Resultado da Simulação",
        "lbl-carbon": "Carbono Retido",
        "lbl-carbon-desc": "Sequestrado por ano no solo.",
        "lbl-economy": "Economia em Insumos",
        "lbl-economy-desc": "Gastos evitados com fertilizantes.",
        "calc-feedback-default": "Preencha os dados ao lado para ver uma avaliação personalizada sobre a fazenda ecológica.",
        "contact-title": "Junte-se à Transição Verde",
        "contact-subtitle": "Quer implementar técnicas sustentáveis em sua propriedade agrícola ou precisa de materiais educativos para escolas? Nossa equipe técnica está de prontidão.",
        "cont-mail": "E-mail de Contato",
        "cont-loc": "Localização Principal",
        "lbl-name": "Nome Completo",
        "lbl-email": "E-mail Corporativo",
        "lbl-msg": "Sua Mensagem / Dúvida",
        "btn-send": "Enviar Mensagem",
        "foot-desc": "Promovendo a conscientização ecológica e a alta eficiência no agronegócio para o Concurso Agrinho 2026.",
        "foot-nav-title": "Navegação",
        "foot-cred-title": "Créditos de Mídia",
        "foot-rights": "Todos os direitos reservados aos autores do projeto.",
        "foot-badge": "Agro Forte, Futuro Sustentável"
    },
    en: {
        "nav-about": "About",
        "nav-pillars": "Pillars",
        "nav-calc": "Simulator",
        "nav-contact": "Contact",
        "nav-home": "Home",
        "hero-badge": "Agrinho Contest 2026",
        "hero-title-1": "Strong Agro,",
        "hero-title-2": "Sustainable Future:",
        "hero-desc": "Generative agriculture revolutionizes the balance between large-scale food production and environmental preservation. Discover how to revitalize soil, restore ecosystems, and guarantee high yields.",
        "hero-btn-primary": "Test Simulator",
        "hero-btn-secondary": "Learn More",
        "about-tag": "Education & Sustainability",
        "about-title": "What is Regenerative Agriculture?",
        "about-subtitle": "An innovative agricultural model focused on rehabilitating and conserving natural resources, working in harmony with nature's laws.",
        "about-grid-title": "Increase the harvest while healing our planet",
        "about-grid-text": "Unlike conventional farming based on intensive exploitation, regenerative agriculture focuses on rebuilding soil organic matter, improving water cycles, and restoring biodiversity. This leads to crops that are more resilient to pests and extreme climate events without losing productivity.",
        "feat1-title": "Soil Health",
        "feat1-desc": "Elimination of aggressive tillage and conservation of microbiology.",
        "feat2-title": "Water Retention",
        "feat2-desc": "Organic-rich soils absorb and filter significantly more water.",
        "feat3-title": "Carbon Sequestration",
        "feat3-desc": "Turning crop fields into natural sinks for polluting greenhouse gases.",
        "feat4-title": "Secure Yields",
        "feat4-desc": "Reducing costs on artificial fertilizers and chemical pesticides.",
        "pillars-tag": "How to Apply",
        "pillars-title": "Pillars of Regenerative Practices",
        "pillars-subtitle": "Essential practical methods to achieve the ideal balance between high yield and environmental protection.",
        "p1-title": "Crop Rotation",
        "p1-desc": "Alternating different plant families in the same area to avoid soil nutrient exhaustion and break the life cycle of agricultural pests.",
        "p2-title": "Permanent Cover",
        "p2-desc": "Keep the soil covered with live plants or stubble from previous harvests. This stops erosion, cools soil temperatures, and controls weeds naturally.",
        "p3-title": "Integrated Crop-Livestock",
        "p3-desc": "Consolidating livestock and crops to create a living ecosystem. Livestock fertilizes the soil naturally with manure, lowering production costs.",
        "calc-tag": "Educational Simulator",
        "calc-title": "Estimate Your Green Impact",
        "calc-subtitle": "Select the farm size and management type to calculate real-time ecological and economic benefits.",
        "calc-form-title": "Farm Settings",
        "calc-form-desc": "Define farm properties to view impact indicators on the ecosystem and economy.",
        "label-area": "Farm Size (Hectares):",
        "label-type": "Current Management Type:",
        "opt-conv": "Conventional (No cover, high chemical use)",
        "opt-trans": "Transition (Initial no-till farming)",
        "opt-regen": "Fully Regenerative (Rotation & Biologics)",
        "res-title": "Simulation Result",
        "lbl-carbon": "Retained Carbon",
        "lbl-carbon-desc": "Sequestrated into soil per year.",
        "lbl-economy": "Savings in Inputs",
        "lbl-economy-desc": "Expenses avoided on synthetic fertilizers.",
        "calc-feedback-default": "Fill out the fields on the left to view customized environmental performance metrics.",
        "contact-title": "Join the Green Transition",
        "contact-subtitle": "Looking to implement sustainable methods or needing school educational kits? Our technical team is ready to help.",
        "cont-mail": "Contact E-mail",
        "cont-loc": "Main Location",
        "lbl-name": "Full Name",
        "lbl-email": "Business E-mail",
        "lbl-msg": "Your Message / Inquiry",
        "btn-send": "Send Message",
        "foot-desc": "Promoting ecological awareness and high farming efficiency for the Agrinho 2026 Contest.",
        "foot-nav-title": "Navigation",
        "foot-cred-title": "Media Credits",
        "foot-rights": "All rights reserved to the creators of this project.",
        "foot-badge": "Strong Agro, Sustainable Future"
    },
    es: {
        "nav-about": "Sobre Nosotros",
        "nav-pillars": "Pilares",
        "nav-calc": "Simulador",
        "nav-contact": "Contacto",
        "nav-home": "Inicio",
        "hero-badge": "Concurso Agrinho 2026",
        "hero-title-1": "Agro Fuerte,",
        "hero-title-2": "Futuro Sostenible:",
        "hero-desc": "La agricultura regenerativa revoluciona el equilibrio entre la producción de alimentos a escala y la preservación del medio ambiente. Descubra cómo revitalizar el suelo, restaurar ecosistemas y garantizar un alto rendimiento.",
        "hero-btn-primary": "Probar Simulador",
        "hero-btn-secondary": "Saber Más",
        "about-tag": "Educación y Sostenibilidad",
        "about-title": "¿Qué es la Agricultura Regenerativa?",
        "about-subtitle": "Un modelo agrícola innovador centrado en rehabilitar y conservar los recursos naturales, trabajando en armonía con las leyes de la naturaleza.",
        "about-grid-title": "Aumentar la cosecha sanando nuestro planeta",
        "about-grid-text": "A diferencia de la agricultura convencional basada en la explotación intensiva, la agricultura regenerativa se centra en reconstruir la materia orgánica del suelo, mejorar los ciclos del agua y recuperar la biodiversidad.",
        "feat1-title": "Salud del Suelo",
        "feat1-desc": "Eliminación del laboreo agresivo y conservación de la vida microbiológica.",
        "feat2-title": "Retención de Agua",
        "feat2-desc": "Los suelos ricos en materia orgánica absorben y filtran significativamente más agua.",
        "feat3-title": "Secuestro de Carbono",
        "feat3-desc": "Conversión de cultivos en sumideros naturales de gases de efecto invernadero.",
        "feat4-title": "Rendimientos Seguros",
        "feat4-desc": "Reducción de costes en fertilizantes sintéticos y pesticidas químicos.",
        "pillars-tag": "Cómo Aplicar",
        "pillars-title": "Pilares de la Práctica Regenerativa",
        "pillars-subtitle": "Métodos prácticos esenciales para lograr el equilibrio ideal entre rendimiento y preservación.",
        "p1-title": "Rotación de Cultivos",
        "p1-desc": "Alternar familias de plantas en la misma zona para evitar el agotamiento del suelo y romper los ciclos de plagas agrícolas.",
        "p2-title": "Cobertura Permanente",
        "p2-desc": "Mantener el suelo cubierto con plantas vivas o restos vegetales. Frena la erosión y modera la temperatura del suelo.",
        "p3-title": "Ganadería Integrada",
        "p3-desc": "Combinar ganado y cultivos para crear un ecosistema vivo, donde el estiércol fertiliza el suelo de forma natural.",
        "calc-tag": "Simulador Educativo",
        "calc-title": "Estime su Impacto Verde",
        "calc-subtitle": "Seleccione el tamaño del campo y el tipo de manejo para calcular los beneficios ecológicos y económicos.",
        "calc-form-title": "Ajustes de la Finca",
        "calc-form-desc": "Defina las propiedades de la finca para ver los indicadores ambientales.",
        "label-area": "Tamaño del Área (Hectáreas):",
        "label-type": "Tipo de Manejo Actual:",
        "opt-conv": "Convencional (Sin cobertura, alta química)",
        "opt-trans": "Transición (Siembra directa inicial)",
        "opt-regen": "Regenerativo Total (Rotación y Biológicos)",
        "res-title": "Resultado de la Simulación",
        "lbl-carbon": "Carbono Retenido",
        "lbl-carbon-desc": "Secuestrado en el suelo por año.",
        "lbl-economy": "Ahorro en Insumos",
        "lbl-economy-desc": "Gastos evitados en fertilizantes sintéticos.",
        "calc-feedback-default": "Complete los datos para obtener una evaluación personalizada del rendimiento ecológico.",
        "contact-title": "Únase a la Transición Verde",
        "contact-subtitle": "¿Quiere aplicar estos métodos o necesita kits educativos? Nuestro equipo técnico está a su disposición.",
        "cont-mail": "Correo de Contacto",
        "cont-loc": "Ubicación Principal",
        "lbl-name": "Nombre Completo",
        "lbl-email": "Correo Corporativo",
        "lbl-msg": "Su Mensaje",
        "btn-send": "Enviar Mensaje",
        "foot-desc": "Promoviendo la conciencia ecológica y la eficiencia en el campo para el Concurso Agrinho 2026.",
        "foot-nav-title": "Navegación",
        "foot-cred-title": "Créditos",
        "foot-rights": "Todos los derechos reservados a los autores del proyecto.",
        "foot-badge": "Agro Fuerte, Futuro Sostenible"
    },
    fr: {
        "nav-about": "À Propos",
        "nav-pillars": "Piliers",
        "nav-calc": "Simulateur",
        "nav-contact": "Contact",
        "nav-home": "Accueil",
        "hero-badge": "Concours Agrinho 2026",
        "hero-title-1": "Agro Fort,",
        "hero-title-2": "Futur Durable:",
        "hero-desc": "L'agriculture régénérative révolutionne l'équilibre entre la production alimentaire à grande échelle et la préservation de la nature. Découvrez comment régénérer les sols et garantir des rendements élevés.",
        "hero-btn-primary": "Tester le Simulateur",
        "hero-btn-secondary": "En Savoir Plus",
        "about-tag": "Éducation & Durabilité",
        "about-title": "Qu'est-ce que l'Agriculture Régénératrice?",
        "about-subtitle": "Un modèle agricole innovant axé sur la restauration et la conservation des ressources naturelles, en harmonie avec les lois de la nature.",
        "about-grid-title": "Augmenter les rendements tout en soignant notre planète",
        "about-grid-text": "Contrairement à l'agriculture conventionnelle basée sur l'exploitation intensive, l'agriculture régénérative se concentre sur la reconstruction de la matière organique du sol, l'amélioration du cycle de l'eau et le retour de la biodiversité.",
        "feat1-title": "Santé des Sols",
        "feat1-desc": "Suppression du labour agressif et préservation de la vie microbienne.",
        "feat2-title": "Rétention d'Eau",
        "feat2-desc": "Les sols riches en matières organiques absorbent et filtrent beaucoup plus d'eau.",
        "feat3-title": "Séquestration du Carbone",
        "feat3-desc": "Transformation des cultures en puits de carbone naturels.",
        "feat4-title": "Rendements Sécurisés",
        "feat4-desc": "Réduction des coûts en engrais de synthèse et pesticides chimiques.",
        "pillars-tag": "Comment Appliquer",
        "pillars-title": "Piliers de la Pratique Régénérative",
        "pillars-subtitle": "Méthodes pratiques essentielles pour atteindre l'équilibre parfait entre rendement et protection de la nature.",
        "p1-title": "Rotation des Cultures",
        "p1-desc": "Alterner différentes familles de plantes au même endroit pour éviter l'épuisement des sols et briser les cycles des nuisibles.",
        "p2-title": "Couverture Permanente",
        "p2-desc": "Maintenir le sol couvert de plantes vivantes ou de résidus. Réduit l'érosion et régule la température du sol.",
        "p3-title": "Intégration Élevage-Cultures",
        "p3-desc": "Associer élevage et cultures pour créer un écosystème vivant où le bétail enrichit naturellement le sol en engrais organique.",
        "calc-tag": "Simulateur Éducatif",
        "calc-title": "Estimez Votre Impact Vert",
        "calc-subtitle": "Sélectionnez la taille de votre exploitation et le type de gestion pour calculer en temps réel vos gains écologiques.",
        "calc-form-title": "Configuration",
        "calc-form-desc": "Définissez les caractéristiques pour afficher l'impact sur l'écosystème.",
        "label-area": "Taille de l'Exploitation (Hectares) :",
        "label-type": "Type de Gestion Actuelle :",
        "opt-conv": "Conventionnelle (Sans couverture, intrants élevés)",
        "opt-trans": "Transition (Semis direct de départ)",
        "opt-regen": "Régénérative Totale (Rotation & Biologique)",
        "res-title": "Résultats de la Simulation",
        "lbl-carbon": "Carbone Retenu",
        "lbl-carbon-desc": "Séquestré dans le sol par an.",
        "lbl-economy": "Économies Réalisées",
        "lbl-economy-desc": "Dépenses évitées en engrais de synthèse.",
        "calc-feedback-default": "Remplissez le formulaire à gauche pour afficher votre analyse environnementale personnalisée.",
        "contact-title": "Rejoignez la Transition Verte",
        "contact-subtitle": "Besoin de conseils techniques ou de kits d'information pour les écoles ? Notre équipe d'experts est là.",
        "cont-mail": "E-mail de Contact",
        "cont-loc": "Localisation Principale",
        "lbl-name": "Nom Complet",
        "lbl-email": "E-mail Professionnel",
        "lbl-msg": "Votre Message",
        "btn-send": "Envoyer le Message",
        "foot-desc": "Promotion de la conscience écologique et de l'efficacité pour le concours Agrinho 2026.",
        "foot-nav-title": "Navigation",
        "foot-cred-title": "Crédits Médias",
        "foot-rights": "Tous droits réservés aux auteurs du projet.",
        "foot-badge": "Agro Fort, Futur Durable"
    },
    de: {
        "nav-about": "Über Uns",
        "nav-pillars": "Säulen",
        "nav-calc": "Simulator",
        "nav-contact": "Kontakt",
        "nav-home": "Start",
        "hero-badge": "Agrinho Wettbewerb 2026",
        "hero-title-1": "Starke Landwirtschaft,",
        "hero-title-2": "Nachhaltige Zukunft:",
        "hero-desc": "Regenerative Landwirtschaft revolutioniert das Gleichgewicht zwischen Lebensmittelproduktion im großen Maßstab und dem Erhalt unserer Umwelt. Erfahren Sie, wie Sie Böden verjüngen.",
        "hero-btn-primary": "Simulator Testen",
        "hero-btn-secondary": "Mehr Erfahren",
        "about-tag": "Bildung & Nachhaltigkeit",
        "about-title": "Was ist regenerative Landwirtschaft?",
        "about-subtitle": "Ein innovatives landwirtschaftliches Modell, das sich auf die Erneuerung und Erhaltung natürlicher Ressourcen im Einklang mit den Gesetzen der Natur konzentriert.",
        "about-grid-title": "Ernteerträge steigern und gleichzeitig unseren Planeten heilen",
        "about-grid-text": "Im Gegensatz zur konventionellen Landwirtschaft baut die regenerative Landwirtschaft Humus auf, verbessert den Wasserkreislauf und stärkt die Artenvielfalt.",
        "feat1-title": "Bodenbiologie",
        "feat1-desc": "Verzicht auf intensives Pflügen zur Schonung nützlicher Bodenmikroben.",
        "feat2-title": "Wasserspeicherung",
        "feat2-desc": "Humusreiche Böden können extrem viel mehr Regenwasser aufnehmen und filtern.",
        "feat3-title": "CO2-Bindung",
        "feat3-desc": "Äcker werden zu natürlichen Speichern für schädliche Treibhausgase.",
        "feat4-title": "Sichere Erträge",
        "feat4-desc": "Reduzierte Kosten für teure synthetische Düngemittel und Chemie.",
        "pillars-tag": "Praktische Umsetzung",
        "pillars-title": "Säulen der regenerativen Praxis",
        "pillars-subtitle": "Die wichtigsten Methoden, um hohe Produktivität und Naturschutz perfekt zu verbinden.",
        "p1-title": "Fruchtfolge",
        "p1-desc": "Regelmäßiger Wechsel der Pflanzenfamilien auf dem Feld, um Bodenmüdigkeit und Pflanzenschädlinge natürlich zu bekämpfen.",
        "p2-title": "Dauerhafte Bodenbedeckung",
        "p2-desc": "Den Acker immer grün halten oder mit Ernterückständen bedecken. Schützt vor Erosion und hält den Boden feucht.",
        "p3-title": "Tierhaltung integrieren",
        "p3-desc": "Gemeinsame Nutzung durch Weidevieh und Pflanzen. Der Dung der Tiere düngt den Boden vollkommen natürlich.",
        "calc-tag": "Lern-Simulator",
        "calc-title": "Berechnen Sie Ihren grünen Effekt",
        "calc-subtitle": "Wählen Sie Betriebsgröße und Bewirtschaftungsform, um ökologische Vorteile in Echtzeit zu ermitteln.",
        "calc-form-title": "Hof-Daten",
        "calc-form-desc": "Tragen Sie die Werte ein, um die Umweltindikatoren Ihres Betriebs zu berechnen.",
        "label-area": "Betriebsgröße (Hektar):",
        "label-type": "Aktuelle Bewirtschaftungsform:",
        "opt-conv": "Konventionell (Ohne Begrünung, hoher Chemieeinsatz)",
        "opt-trans": "Übergangsphase (Direktsaat ohne Pflügen)",
        "opt-regen": "Voll Regenerativ (Fruchtwechsel & Biodünger)",
        "res-title": "Simulationsergebnis",
        "lbl-carbon": "Gebundenes CO2",
        "lbl-carbon-desc": "Pro Jahr im Boden gespeichert.",
        "lbl-economy": "Ersparnis Düngemittel",
        "lbl-economy-desc": "Vermeidbare Kosten durch natürlichen Humusaufbau.",
        "calc-feedback-default": "Tragen Sie links Ihre Werte ein, um Ihre Auswertung zu sehen.",
        "contact-title": "Gemeinsam für die grüne Wende",
        "contact-subtitle": "Möchten Sie Ihren Hof umstellen oder suchen Sie Schulmaterialien? Unser Expertenteam berät Sie gern.",
        "cont-mail": "Kontakt E-Mail",
        "cont-loc": "Hauptstandort",
        "lbl-name": "Vollständiger Name",
        "lbl-email": "E-Mail-Adresse",
        "lbl-msg": "Ihre Nachricht",
        "btn-send": "Nachricht Senden",
        "foot-desc": "Förderung des Umweltbewusstseins und effizienter Landwirtschaft für den Agrinho-Wettbewerb 2026.",
        "foot-nav-title": "Navigation",
        "foot-cred-title": "Mediennachweise",
        "foot-rights": "Alle Rechte liegen bei den Projektentwicklern.",
        "foot-badge": "Starke Landwirtschaft, Nachhaltige Zukunft"
    }
};

let currentLanguage = "pt";

/* ==========================================================================
   2. FUNÇÃO DE TRADUÇÃO DINÂMICA (DOM MANIPULATION)
   ========================================================================== */
function updateLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Altera todos os elementos com atributo data-translate
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Atualiza os placeholders de formulários conforme o idioma selecionado
    const nameInput = document.getElementById("userName");
    const emailInput = document.getElementById("userEmail");
    const msgInput = document.getElementById("userMessage");

    if (lang === "en") {
        nameInput.placeholder = "Your name";
        emailInput.placeholder = "your@email.com";
        msgInput.placeholder = "Write how we can help you...";
    } else if (lang === "es") {
        nameInput.placeholder = "Su nombre";
        emailInput.placeholder = "su@correo.com";
        msgInput.placeholder = "Escriba cómo podemos ayudarle...";
    } else if (lang === "fr") {
        nameInput.placeholder = "Votre nom";
        emailInput.placeholder = "votre@adresse.com";
        msgInput.placeholder = "Écrivez comment nous pouvons vous aider...";
    } else if (lang === "de") {
        nameInput.placeholder = "Ihr Name";
        emailInput.placeholder = "ihre@adresse.com";
        msgInput.placeholder = "Schreiben Sie, wie wir Ihnen helfen können...";
    } else {
        nameInput.placeholder = "Seu nome";
        emailInput.placeholder = "seu@email.com";
        msgInput.placeholder = "Escreva como podemos te ajudar...";
    }

    // Recalcula o simulador para atualizar o feedback no idioma selecionado
    calculateImpact();
}

// Event listener para mudança de idioma
document.getElementById("langSelect").addEventListener("change", function(e) {
    updateLanguage(e.target.value);
});

/* ==========================================================================
   3. SISTEMA DE ALTERNÂNCIA DE TEMA (CLARO / ESCURO)
   ========================================================================== */
const themeToggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let newTheme = "light";
    
    if (currentTheme !== "dark") {
        newTheme = "dark";
        document.documentElement.setAttribute("data-theme", "dark");
        themeIcon.setAttribute("data-lucide", "sun");
    } else {
        document.documentElement.removeAttribute("data-theme");
        themeIcon.setAttribute("data-lucide", "moon");
    }
    
    // Atualiza o ícone via Lucide
    lucide.createIcons();
    localStorage.setItem("theme", newTheme);
}

themeToggleBtn.addEventListener("click", toggleTheme);

// Verifica preferências salvas
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.setAttribute("data-lucide", "sun");
    lucide.createIcons();
}

/* ==========================================================================
   4. LÓGICA DO SIMULADOR DE IMPACTO AMBIENTAL (CÁLCULO MATEMÁTICO)
   ========================================================================== */
const areaInput = document.getElementById("farmArea");
const typeSelect = document.getElementById("farmingType");
const carbonOutput = document.getElementById("carbonVal");
const economyOutput = document.getElementById("economyVal");
const feedbackOutput = document.getElementById("calcFeedback");

function calculateImpact() {
    const area = parseFloat(areaInput.value) || 0;
    const type = typeSelect.value;
    
    let carbonFactor = 0; // t/CO2 por hectare/ano
    let savingsFactor = 0; // R$ ou USD por hectare/ano
    let feedbackKey = "";

    if (type === "convencional") {
        carbonFactor = 0.2;
        savingsFactor = 0;
        feedbackKey = "feedback-conv";
    } else if (type === "transicao") {
        carbonFactor = 1.5;
        savingsFactor = 120;
        feedbackKey = "feedback-trans";
    } else if (type === "regenerativo") {
        carbonFactor = 3.6;
        savingsFactor = 450;
        feedbackKey = "feedback-regen";
    }

    const totalCarbon = (area * carbonFactor).toFixed(1);
    const totalSavings = (area * savingsFactor).toLocaleString(currentLanguage === 'pt' ? 'pt-BR' : 'en-US', {
        style: 'currency',
        currency: currentLanguage === 'pt' ? 'BRL' : 'USD'
    });

    carbonOutput.textContent = `${totalCarbon} t`;
    economyOutput.textContent = totalSavings;

    const feedbackTexts = {
        pt: {
            "feedback-conv": "Manejo Convencional: Gera alta dependência química externa. Considere a transição para plantio direto e diminua as emissões de carbono.",
            "feedback-trans": "Excelente início! A transição já evita erosões hídricas e começa a fixar as primeiras toneladas de matéria orgânica no seu solo.",
            "feedback-regen": "Sustentabilidade Máxima! O sistema regenerativo completo restaura a biologia do solo, protege o lençol freático e gera economia financeira massiva."
        },
        en: {
            "feedback-conv": "Conventional Management: Creates high dependence on external chemicals. Consider transitioning to no-till farming to reduce emissions.",
            "feedback-trans": "Great start! The transition already prevents soil erosion and begins capturing the first tons of organic matter in your fields.",
            "feedback-regen": "Maximum Sustainability! A complete regenerative system restores soil biology, protects aquifers, and yields massive financial savings."
        },
        es: {
            "feedback-conv": "Manejo Convencional: Alta dependencia química externa. Considere la siembra directa para mejorar la salud del suelo.",
            "feedback-trans": "¡Excelente comienzo! La transición ya previene la erosión y empieza a fijar materia orgánica en el suelo.",
            "feedback-regen": "¡Máxima Sostenibilidad! El sistema regenerativo completo restaura la biología del suelo y genera un gran ahorro financiero."
        },
        fr: {
            "feedback-conv": "Gestion Conventionnelle : Forte dépendance aux intrants chimiques. Envisagez le semis direct pour réduire les émissions.",
            "feedback-trans": "Bon début ! La transition empêche déjà l'érosion et commence à stocker de la matière organique dans votre sol.",
            "feedback-regen": "Durabilité Maximale ! Le système régénératif complet restaure la biologie du sol et génère des économies financières massives."
        },
        de: {
            "feedback-conv": "Konventionelle Bewirtschaftung: Hohe Abhängigkeit von Chemie. Erwägen Sie den Übergang zur Direktsaat, um CO2 zu sparen.",
            "feedback-trans": "Guter Anfang! Die Umstellung schützt bereits vor Erosion und baut erste Humusschichten im Boden auf.",
            "feedback-regen": "Maximale Nachhaltigkeit! Das regenerative System stellt die Bodenbiologie wieder her und spart enorme Düngemittelkosten."
        }
    };

    feedbackOutput.textContent = feedbackTexts[currentLanguage][feedbackKey];
}

areaInput.addEventListener("input", calculateImpact);
typeSelect.addEventListener("change", calculateImpact);
calculateImpact();

/* ==========================================================================
   5. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO
   ========================================================================== */
const contactForm = document.getElementById("contactForm");
const formAlert = document.getElementById("formAlert");
const alertMsg = document.getElementById("alertMsg");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;

    const successMessages = {
        pt: `Obrigado pelo interesse, ${name}! Nossa equipe de engenheiros agrônomos enviará as informações para o e-mail: ${email}.`,
        en: `Thank you for your interest, ${name}! Our agronomy team will send resources to: ${email}.`,
        es: `¡Gracias por su interés, ${name}! Nuestro equipo de agrónomos enviará la información a: ${email}.`,
        fr: `Merci pour votre intérêt, ${name}! Notre équipe d'agronomes enverra les informations à : ${email}.`,
        de: `Vielen Dank für Ihr Interesse, ${name}! Unser Agronomie-Team wird Informationen an ${email} senden.`
    };

    alertMsg.textContent = successMessages[currentLanguage];
    formAlert.style.display = "flex";
    contactForm.reset();

    setTimeout(() => {
        formAlert.style.display = "none";
    }, 8000);
});

/* ==========================================================================
   6. ANIMAÇÃO DE SCROLL (REVEAL ANIMATIONS)
   ========================================================================== */
function revealElements() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;

    reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);