#Projeto AgroFuturo - Concruso Agrinho 2026

#Objetivo do Projeto= O *AgroFuturo* é uma plataforma educacional desenvolvida com o objetivo de conscientizar as novas gerações sobre a importância da *Agricultura Regenerativa* e da *Agricultura de Precisão*. Onde o foco principal é ensinar como o uso correto e da tecnologia trabalham junto para protegerem o meio ambiente, evitar o compactamento do solo e garantir uma segurança alimentar.

# AgroFuturo - Educação e Sustentabilidade no Campo

O **AgroFuturo** é uma plataforma web interativa no formato **SPA (Single Page Application)** dedicada a disseminar conhecimento técnico, prático e inovador sobre agricultura regenerativa e de precisão. O site combina design moderno, alta performance e acessibilidade global através de um sistema nativo de traduçaõ e alternância de temas.

--

## Funcionalidades Principais

* **Navegação SPA Fluida:** Alternância entre seções do site sem recarregamento de página, garantindo uma experiência de usuário rápida e contínua.
* **Intercionalização (i18n):** Suporte completo para 3 idiomas (**Português**, **Inglês** e **Espanhol**), traduzindo dinamicamente textos, placeholders de formulários e mensagens de feedback.
*  **Gestão de Tema (Light/Dark Mode):** Alternador de tema visual com persistência automática das preferências do usuário no navegador via `localStorage`.
*  **Carrossel de Imagens Automatizado:** Slider responsivo com transição suave, controle por setas, indicadores visuais (`dots`) e pausa inteligente quando o usuário navega para fora da página inicial.
*  **Gráficos de Impacto Ecológico:** Indicadores circulares construídos puramente com CSS moderno (`conic-gradient` e variáveis dinâmicas).
*  **Formulário de Contato Inteligente:** Validação de campos em tempo real com mensagens de agradecimento personalizadas de acordo com o idioma ativo.
* **Design Totalmente Responsivo:** Interface otimizada de forma cirúrgica para dispositivos móveis, tablets e desktops.

---

##  Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias web nativas, sem a necessidade de frameworks pesados, focando em semântica e performance:
* **HTML5:** Estruturação semântica e acessível do conteúdo, utilizando atributos  `data-*` para controle do motor de tradução.
* **CSS3 Avançado:** Arquitetura baseada em **Custom Properties** (Variáveis CSS) para controle de temas.
    * Efeitos de *Glassmorphism* com `backdrop-filter`.
    * Gráficos circulares nativos utilizando `conic-gradient`.
    * Layouts adaptáveis gerados com **CSS Grid** e **Flexbox**.
* **JavaScript (ES6+):** Lógica de manipulação da DOM, gerenciamento de estado SPA, motor de tradução i18n e persistência de dados.

##Imagens: Uso da IA google gemini
Veneno
1. 
Prompt: A high-tech agricultural quadcopter drone flying low over a lush green soy plantation field, spraying a very fine, precise mist of water droplets from beneath its arms. Sunny day, cinematic lighting, sharp focus on the drone and the spray nozzles, professional agriculture photography, 8k resolution, aspect ratio 16:9. 

Semeando
2. Prompt: An aerial drone shot of a vast, healthy soybean plantation field. Beautiful patterns of perfectly aligned green crops, completely pristine and intact with no tractor tire tracks or damage. Bright afternoon sun, vivid natural colors, high scale sustainable farming, 8k, aspect ratio 16:9.

Noturna
3.An agricultural drone operating at twilight, dusk sky with deep blue and orange hues. The drone has subtle glowing navigation lights and is mapping the crop field below with a visible soft laser or multi-spectral sensor beam scanning the plants. Futuristic yet realistic smart farming, high contrast, crisp details, 8k, aspect ratio 16:9. 

Agro Forte, Futuro Sustentável
4. Prompt: A wide shot of a futuristic, lush green soybean plantation during a golden hour sunset. A sleek, high-tech autonomous tractor operates smoothly in the background. In the foreground, rich organic soil with hints of digital data overlays glowing softly. Sustainable agriculture concept, photorealistic, cinematic lighting, 8k resolution, UHD.

A Voz do Chão que Pisamos
5. Prompt: A heartwarming photo of a young smiling student and an old experienced farmer kneeling together in a vibrant, healthy crop field. They are both gently holding a handful of dark, rich, fertile soil filled with life. Bright, warm morning sunlight, emotional atmosphere, crisp focus, highly detailed, photorealistic, 8k resolution.

Inteligência a Serviço da Natureza
6. Prompt: An advanced agricultural drone flying low over an expansive, ultra-green cornfield. The drone is precision-spraying a fine mist of water on a specific spot. Sharp daylight, clean composition, high-tech farming, capturing motion blur in the mist, photorealistic, 35mm lens, 8k resolution, ultra high definition.
Cuidar, Proteger e Curar o Solo

7. A close-up, low-angle shot of perfect No-Till farming (Plantio Direto). Strong, healthy green sprouts emerging directly from a thick layer of protective dry organic straw covering the ground. Visible rich soil texture beneath the straw. Soft, diffused natural light, depth of field, cinematic, 8k resolution, UHD.
Produtividade de Alta Performance

9. A breathtaking, sweeping panoramic view of a massive, successful wheat harvest under a clear blue sky. Healthy, golden-yellow crops stretching to the horizon. A modern combine harvester works efficiently in the distance, leaving a clean trail. Prosperity, clean energy, high-performance sustainable agro, photorealistic, 8k resolution.


##  Estrutura de Arquivos

```text
├── index.html          # Estrutura e conteúdo semântico do site
├── style.css           # Estilização global, temas (Light/Dark) e responsividade
├── script.js           # Lógica da SPA, carrossel, i18n e formulários
└── assets/
    └── imagens/        # Banco de imagens e assets visuais do projeto

 Como Executar o Projeto

Como o projeto utiliza tecnologias nativas (Vanilla), você não precisa instalar nenhuma dependência externa:
 1. Faça o clone ou baixe os arquivos do repositório.
 2. Certifique-se de que a estrutura de pastas e as imagens em assets/imagens/ existam com as nomenclaturas corretas referenciadas no HTML
 3. Abra o arquivo index.html diretamente em qualquer navegador moderno ou utilize extensões como o Live Server no VS Code para uma melhor experiência de desenvolvimento.
