(() => {
  const translations = new Map(Object.entries({
    "Flávio Oliveira | Projetos web": "Flávio Oliveira | Web projects",
    "Projetos de desenvolvimento front-end de Flávio Oliveira.": "Front-end development projects by Flávio Oliveira.",
    "Flávio Oliveira, início": "Flávio Oliveira, home",
    "Desenvolvimento front-end": "Front-end development",
    "Navegação principal": "Main navigation",
    "Projetos": "Projects",
    "← Menu principal": "← Main menu",
    "← Menu principal": "← Main menu",
    "Portfólio · Desenvolvimento web": "Portfolio · Web development",
    "Ideias digitais,": "Digital ideas,",
    "feitas para explorar.": "made to explore.",
    "Uma seleção de interfaces e experiências que venho construindo enquanto aprendo e pratico desenvolvimento front-end.": "A selection of interfaces and experiences I've been building as I learn and practice front-end development.",
    "Quatro projetos publicados": "Four published projects",
    "projetos": "projects",
    "publicados": "published",
    "Trabalhos selecionados": "Selected work",
    "Explore os projetos": "Explore the projects",
    "Interfaces feitas com HTML e CSS": "Interfaces built with HTML and CSS",
    "Mockups de um aplicativo de karaokê em dois celulares": "Karaoke app mockups on two phones",
    "Landing page": "Landing page",
    "Uma experiência para cantar junto": "An experience made for singing together",
    "Apresentação de um aplicativo de música e karaokê.": "A landing page for a music and karaoke app.",
    "Ver projeto": "View project",
    "Robô doméstico em um quarto, imagem de destaque do portal de notícias": "A home robot in a bedroom, featured on the news portal",
    "Editorial": "Editorial",
    "Portal de notícias": "News portal",
    "Uma página editorial para ler sobre tecnologia e inovação.": "An editorial page for technology and innovation stories.",
    "Cupcakes de chocolate com cobertura": "Chocolate cupcakes with frosting",
    "Receita": "Recipe",
    "Projeto receitas": "Recipe project",
    "Receita de cupcake com ingredientes e modo de preparo.": "A cupcake recipe with ingredients and instructions.",
    "Vista de um lago alpino a partir de um barco": "An alpine lake seen from a boat",
    "Viagens": "Travel",
    "Um perfil de viagens com histórias e paisagens pelo caminho.": "A travel profile filled with stories and scenery along the way.",
    "Ver perfil no GitHub ↗": "View GitHub profile ↗",

    "Conheça o App": "Discover the app",
    "Funcionalidades": "Features",
    "Planos e Preços": "Plans & pricing",
    "Assine e tenha acesso ilimitado a todas as funcionalidades": "Subscribe for unlimited access to every feature",
    "Baixar Agora": "Download now",
    "Quem canta os males espanta": "Singing makes everything better",
    "Cantar nunca foi tão fácil": "Singing has never been easier",
    "Ver planos": "View plans",
    "O aplicativo perfeito para aprender a cantar": "The perfect app to learn how to sing",
    "Nosso algoritmo de Inteligência Artificial permite remover a voz original e manter as melodias das músicas. Dessa forma, temos o maior repertório musical para Karaokê! Além disso, ao cantar, sua voz e afinação é comparada pelo algoritmo permitindo uma avaliação precisa da sua performance te ajudando a melhorar seu canto.": "Our artificial intelligence algorithm removes the original vocals while keeping each song's melody, giving you a huge karaoke library. It also evaluates your pitch and performance as you sing, helping you improve every time.",
    "A maior biblioteca de músicas de Karaokê!": "The biggest karaoke song library!",
    "Nossa IA remove a voz de qualquer música e a deixa pronta pra cantar, num passe de mágica!": "Our AI removes vocals from any song and gets it ready to sing in a flash!",
    "Experiência gamificada": "A gamified experience",
    "Sua performance é pontuada de acordo com nosso algoritmo ultra preciso. Desafie-se, ganhe reconhecimento e comemore sua evolução!": "Your performance is scored by our highly accurate algorithm. Challenge yourself, earn recognition, and celebrate your progress!",
    "Grave suas performances": "Record your performances",
    "Seja para compartilhar com os amigos ou para acompanhar sua evolução, nosso recurso de gravação de áudio e vídeo permite que você aproveite a experiência ao máximo!": "Whether you're sharing with friends or tracking your progress, audio and video recording help you make the most of every performance!",
    "Compartilhe com a comunidade": "Share with the community",
    "Compartilhe suas gravações com a comunidade, interaja e explore a performance vocal de outras pessoas no seu feed!": "Share your recordings, connect with the community, and discover other singers in your feed!",
    "Letras em tempo-real": "Real-time lyrics",
    "Nunca perca o ritmo com as letras das músicas sincronizadas e exibidas em tempo real. Você também pode ativar a voz original da música para ajudar.": "Stay on beat with synchronized lyrics displayed in real time. You can also turn on the original vocals for a little help.",
    "Básico": "Basic",
    "Grátis": "Free",
    "Baixe o app e comece a cantar agora mesmo!": "Download the app and start singing!",
    "Com anúncios": "Ad-supported",
    "Até 5 músicas por dia": "Up to 5 songs per day",
    "Cante apenas as músicas disponíveis no plano gratuito": "Sing songs included in the free plan",
    "1 mês grátis": "1 month free",
    "Premium": "Premium",
    "Ideal para quem já cansou de passar vergonha no Karaokê": "For anyone who's ready to own the karaoke stage",
    "R$ 24,90": "R$ 24.90",
    "/mês": "/month",
    "Experimente de graça": "Try it for free",
    "Sem interrupções de anúncios": "No ad interruptions",
    "Cante quantas músicas quiser": "Sing as many songs as you like",
    "Cante todas as músicas da biblioteca": "Sing every song in the library",
    "Família": "Family",
    "Para aquelas famílias que adoram se reunir pra cantar": "For families who love getting together to sing",
    "R$ 21,90": "R$ 21.90",
    "/mês por pessoa": "/month per person",
    "Assinar agora": "Subscribe now",
    "Mínimo de 4 pessoas no plano família": "The family plan requires at least 4 people",
    "Download": "Download",
    "Bora cantar?": "Ready to sing?",
    "Desperte seu potencial de estrela, liberte sua voz e faça parte da comunidade musical mais envolvente. Baixe o Zingen agora e transforme suas performances em experiências inesquecíveis!": "Unleash your inner star, find your voice, and join a vibrant music community. Download Zingen and turn every performance into an unforgettable experience!",
    "Baixar da Apple Store": "Download on the App Store",
    "Baixar da Play Store": "Get it on Google Play",
    "Produto": "Product",
    "Empresa": "Company",
    "Sobre nós": "About us",
    "Trabalhe conosco": "Careers",
    "Blog": "Blog",
    "Legal": "Legal",
    "Termos de uso": "Terms of use",
    "Política de privacidade": "Privacy policy",
    "Zingen Logo": "Zingen logo",

    "Portal de Notícias": "News Portal",
    "Entrar": "Sign in",
    "Inteligência Artificial": "Artificial Intelligence",
    "Hologramas": "Holograms",
    "Vestíveis": "Wearables",
    "Realidade Aumentada": "Augmented Reality",
    "Realidade Virtual": "Virtual Reality",
    "Robótica": "Robotics",
    "Robôs domésticos começam a ser adotados para tarefas diárias": "Home robots are being adopted for everyday tasks",
    "Robôs domésticos começam a ser adotados para tarefas diárias, prometendo mais conforto e eficiência nas residências.": "Home robots are taking on everyday tasks, bringing more comfort and efficiency to households.",
    "Novo Smartphone Projetor 3D": "New 3D projector smartphone",
    "Novo Smartphone Projetor 3D chega transformando como vemos nossas telas!": "A new 3D projector smartphone is changing the way we see our screens!",
    "Tecnologia 6G chega às metrópoles brasileiras": "6G technology arrives in Brazilian cities",
    "Tecnologia 6G chega às metrópoles brasileiras, prometendo revolucionar a forma como vivemos e nos comunicamos.": "6G technology is coming to Brazilian cities, promising to transform the way we live and communicate.",
    "Relógio inteligente para monitorar saúde mental": "Smartwatch monitors mental health",
    "Empresa lança relógio inteligente capaz de monitorar a saúde mental, oferecendo insights valiosos para o bem-estar pessoal.": "A company launches a smartwatch that tracks mental health and offers valuable insights for personal well-being.",
    "Escolas adotam tecnologia VR para aprendizagem": "Schools bring VR into the classroom",
    "Escolas adotam a tecnologia VR para proporcionar experiências imersivas, transformando a aprendizagem tradicional.": "Schools are using VR to create immersive experiences and transform traditional learning.",
    "Mais lidas da semana": "Most read this week",
    "Ver tudo": "View all",
    "Veículos": "Vehicles",
    "Protótipo de veículo voador": "Flying vehicle prototype",
    "Protótipo de veículo voador é apresentado, marcando o início da era dos transportes aéreos pessoais.": "A flying vehicle prototype is unveiled, marking the beginning of personal air travel.",
    "Plataforma de videoconferência": "Video conferencing platform",
    "Plataforma de videoconferência apresenta nova função de hologramas, tornando as chamadas mais imersivas.": "A video conferencing platform adds holograms, making calls more immersive.",
    "Nova geração de consoles": "Next-generation consoles",
    "Nova geração de consoles de videogame é lançada, trazendo gráficos ultra-realistas e experiências incríveis.": "A new generation of video game consoles launches with ultra-realistic graphics and exciting experiences.",
    "Projeto de internet em áreas remotas": "Internet project reaches remote areas",
    "Projeto busca oferecer internet de alta velocidade em áreas remotas através de satélites inovadores.": "A project aims to bring high-speed internet to remote areas through innovative satellites.",
    "Destaques da inteligência artificial": "Artificial intelligence highlights",
    "Algoritmo capaz de prever eventos futuros": "Algorithm predicts future events",
    "Empresa surpreende o mundo ao anunciar um algoritmo capaz de prever eventos futuros com alta precisão.": "A company surprises the world with an algorithm that can predict future events with high accuracy.",
    "Em um avanço surpreendente da inteligência artificial, uma empresa anuncia o desenvolvimento de um algoritmo capaz de prever eventos futuros com notável precisão. Descubra como essa tecnologia está desafiando as fronteiras da previsão.": "In a remarkable AI breakthrough, a company announces an algorithm that can predict future events with impressive accuracy. Discover how this technology is pushing the boundaries of forecasting.",
    "Dispositivo portátil para tradução instantânea": "Handheld instant translator",
    "Dispositivo portátil promete traduzir instantaneamente diferentes idiomas, facilitando a comunicação global.": "A handheld device promises instant translation across languages, making global communication easier.",
    "Em um mundo cada vez mais conectado, a comunicação sem fronteiras é essencial. Nesse contexto, um dispositivo portátil surge como um verdadeiro herói linguístico, prometendo quebrar as barreiras idiomáticas instantaneamente.": "In an increasingly connected world, seamless communication matters. This portable device promises to break language barriers instantly.",
    "Robôs de companhia para idosos": "Companion robots for older adults",
    "Criados para auxiliar idosos, robôs de companhia ganham popularidade, oferecendo suporte emocional e físico.": "Companion robots are gaining popularity by offering emotional and practical support to older adults.",
    "A tecnologia não só avança, mas também busca tornar a vida mais significativa para todas as gerações. No cenário atual, os robôs sociais estão ganhando destaque como verdeiros companheiros para a terceira idade.": "Technology can make life more meaningful for every generation. Social robots are gaining attention as companions for older adults.",
    "Aplicativo com IA para aumentar produtividade": "AI app boosts productivity",
    "Aplicativo utiliza inteligência artificial para ajudar usuários a manterem o foco e aumentarem a produtividade.": "An app uses artificial intelligence to help people stay focused and get more done.",
    "No turbilhão da vida moderna, onde distrações são abundantes, um aplicativo inovador surge como um aliado indispensável. Utilizando avançados algoritmos de inteligência artificial, promete otimizar o tempo e maximizar produtividade.": "In a busy world full of distractions, an innovative app uses advanced AI to help people make better use of their time and maximize productivity.",
    "Viu isso aqui?": "Have you seen this?",
    "Aplicativo de monitoramento ambiental": "Environmental monitoring app",
    "Software": "Software",
    "Aplicativo de monitoramento ambiental ganha destaque, incentivando práticas ecológicas e promovendo a conscientização.": "An environmental monitoring app is encouraging sustainable habits and raising awareness.",
    "Óculos de realidade virtual com feedback tátil": "Virtual reality headset with haptic feedback",
    "Óculos de realidade virtual com feedback tátil proporcionam uma experiência sensorial completa.": "A virtual reality headset with haptic feedback delivers a full sensory experience.",
    "Criptomoedas": "Cryptocurrency",
    "Nova moeda digital sustentável": "New sustainable digital currency",
    "Surge uma nova moeda digital baseada em tecnologias sustentáveis, buscando minimizar o impacto ambiental.": "A new digital currency built on sustainable technology aims to reduce environmental impact.",
    "Drones": "Drones",
    "Frota de drones para entregas": "Drone delivery fleet",
    "Empresas de e-commerce implementam frota de drones para entregas rápidas, transformando o cenário do varejo.": "E-commerce companies are rolling out drone fleets for faster deliveries, reshaping retail.",
    "Impressão 3D": "3D printing",
    "Impressão 3D de órgãos": "3D-printed organs",
    "Tecnologia inovadora permite a impressão 3D de órgãos humanos, revolucionando a medicina e salvando vidas.": "Innovative technology enables 3D printing of human organs, transforming medicine and saving lives.",
    "Robô doméstico em um quarto": "Home robot in a bedroom",
    "Logo": "Logo",
    "Menu Icon": "Menu icon",
    "Search Icon": "Search icon",
    "Advertisement Banner": "Advertisement banner",

    "Página de Receita": "Recipe page",
    "Pagina de Receita": "Recipe page",
    "Cupcake de café com chantilly": "Coffee cupcake with whipped cream",
    "Imagem de um cupcake com grãos de café e chantilly": "A cupcake topped with coffee beans and whipped cream",
    "O bolinho perfeito para acompanhar o café de todos os dias. É muito fácil e ainda por cima fica maravilhoso, com certeza vai impressionar. Faz e depois me conta o que achou!": "The perfect treat to go with your everyday coffee. It's easy to make, looks wonderful, and is sure to impress. Try it and let me know what you think!",
    "Tempo: 1h10": "Time: 1 hr 10 min",
    "Rendimento: 12 porções": "Makes: 12 servings",
    "Dificuldade: fácil": "Difficulty: easy",
    "Ingredientes": "Ingredients",
    "1 e 1/2 xícara (chá) de água morna": "1 1/2 cups warm water",
    "1 colher (sopa) de café solúvel": "1 tablespoon instant coffee",
    "3 ovos": "3 eggs",
    "1/2 xícara (chá) de óleo": "1/2 cup oil",
    "2 xícaras (chá) de açúcar": "2 cups sugar",
    "2/3 de xícara (chá) de chocolate em pó": "2/3 cup cocoa powder",
    "2 e 1/2 xícaras (chá) de farinha de trigo": "2 1/2 cups all-purpose flour",
    "1 colher (sopa) de fermento em pó químico": "1 tablespoon baking powder",
    "2 xícaras (chá) de chantilly pronto": "2 cups prepared whipped cream",
    "Grãos de café para decorar": "Coffee beans, for decorating",
    "1 lata de leite condensado": "1 can sweetened condensed milk",
    "1 colher (sopa) de chocolate em pó": "1 tablespoon cocoa powder",
    "2 colheres (sopa) de manteiga": "2 tablespoons butter",
    "Modo de Preparo": "Instructions",
    "No liquidificador, bata a água, o café solúvel, os ovos, o óleo, o açúcar e o chocolate em pó até ficar homogêneo. Transfira para uma tigela, adicione a farinha e o fermento e misture com uma colher. Despeje em forminhas para cupcakes forradas com forminhas de papel e coloque em uma fôrma grande, um ao lado do outro. Leve ao forno médio, preaquecido, por 25 minutos ou até assar e dourar. Retire e deixe esfriar.": "Blend the water, instant coffee, eggs, oil, sugar, and cocoa powder until smooth. Transfer to a bowl, add the flour and baking powder, and mix with a spoon. Pour into paper-lined cupcake cups and arrange them side by side in a large baking pan. Bake in a preheated oven at 350°F (180°C) for 25 minutes, or until baked through and golden. Remove and let cool.",
    "No liquidificador, bata a água, o café solúvel, os ovos, o óleo, o açúcar e o chocolate em pó até ficar homogêneo.": "Blend the water, instant coffee, eggs, oil, sugar, and cocoa powder until smooth.",
    "Transfira para uma tigela, adicione a farinha e o fermento e misture com uma colher.": "Transfer to a bowl, add the flour and baking powder, and mix with a spoon.",
    "Despeje em forminhas para cupcakes forradas com forminhas de papel e coloque em uma fôrma grande, um ao lado do outro.": "Pour into paper-lined cupcake cups and arrange them side by side in a large baking pan.",
    "Leve ao forno médio, preaquecido, por 25 minutos ou até assar e dourar. Retire e deixe esfriar.": "Bake in a preheated oven at 350°F (180°C) for 25 minutes, or until baked through and golden. Remove and let cool.",
    "Para o recheio, leve todos os ingredientes ao fogo médio, mexendo bem até engrossar.": "For the filling, cook all the ingredients over medium heat, stirring until thickened.",
    "Desligue, deixe esfriar e coloque dentro de um saco de confeiteiro com bico perle. Reserve.": "Turn off the heat, let it cool, and transfer to a piping bag fitted with a small round tip. Set aside.",
    "Coloque o chantilly dentro de um saco de confeiteiro com bico pitanga e reserve.": "Transfer the whipped cream to a piping bag fitted with a star tip and set aside.",
    "Para a montagem, faça um furo no centro dos cupcakes e recheie com o brigadeiro de café reservado.": "To assemble, make a hole in the center of each cupcake and fill with the reserved coffee brigadeiro.",
    "Decore as superfícies dos cupcakes com o chantilly reservado, fazendo círculos.": "Pipe the whipped cream in circles on top of each cupcake.",
    "Decore com grãos de café e leve à geladeira até o momento de servir.": "Decorate with coffee beans and refrigerate until ready to serve.",
    "No liquidificador, bata a água, o café solúvel, os ovos, o óleo, o açúcar e o chocolate em pó até ficar homogêneo. Transfira para uma tigela, adicione a farinha e o fermento e misture com uma colher.": "Blend the water, instant coffee, eggs, oil, sugar, and cocoa powder until smooth. Transfer to a bowl, add the flour and baking powder, and mix with a spoon.",
    "Para o recheio, leve todos os ingredientes ao fogo médio, mexendo bem até engrossar. Desligue, deixe esfriar e coloque dentro de um saco de confeiteiro com bico perle. Reserve. Coloque o chantilly dentro de um saco de confeiteiro com bico pitanga e reserve.": "For the filling, cook all the ingredients over medium heat, stirring until thickened. Turn off the heat, let it cool, and transfer to a piping bag fitted with a small round tip. Set aside. Transfer the whipped cream to a piping bag fitted with a star tip.",
    "Para a montagem, faça um furo no centro dos cupcakes e recheie com o brigadeiro de café reservado. Decore as superfícies dos cupcakes com o chantilly reservado, fazendo círculos. Decore com grãos de café e leve à geladeira até o morhento de servir.": "To assemble, make a hole in the center of each cupcake and fill with the reserved coffee brigadeiro. Pipe the whipped cream in circles on top. Decorate with coffee beans and refrigerate until ready to serve.",
    "Para a montagem, faça um furo no centro dos cupcakes e recheie com o brigadeiro de café reservado. Decore as superfícies dos cupcakes com o chantilly reservado, fazendo círculos. Decore com grãos de café e leve à geladeira até o momento de servir.": "To assemble, make a hole in the center of each cupcake and fill with the reserved coffee brigadeiro. Pipe the whipped cream in circles on top. Decorate with coffee beans and refrigerate until ready to serve.",
    "Em uma panela, misture a água morna, o café solúvel, os ovos e o oéleo.": "In a saucepan, mix the warm water, instant coffee, eggs, and oil.",
    "Feito com ❤️ pela Rocketseat": "Made with ❤️ by Rocketseat",

    "Estrelas da manha": "Stars of Tomorrow",
    "Voltar": "Back",
    "Formulário de matrícula": "Enrollment form",
    "Preencha os dados abaixo para matricular seu filho na escola de educação infantil Estrelas do Amanhã.": "Fill in the information below to enroll your child at Stars of Tomorrow preschool.",
    "Informações da criança": "Child's information",
    "Nome completo": "Full name",
    "Qual o nome completo da criança": "What is the child's full name?",
    "Data de Nascimento": "Date of birth",
    "Sexo": "Gender",
    "Masculino": "Male",
    "Feminino": "Female",
    "Outro": "Other",
    "Informações Medicas": "Medical information",
    "A criança possui alguma condição médica que a escola deve estar ciente? (Se sim, especifique abaixo)": "Does the child have any medical conditions the school should know about? If so, please describe them below.",
    "Certidão de nascimento": "Birth certificate",
    "Clique aqui para": "Click here to",
    "Selecionar o arquivo": "select a file",
    "Endereço Residencial": "Home address",
    "CEP": "ZIP code",
    "Rua": "Street",
    "Rua das flores": "Flower Street",
    "Número": "Number",
    "Cidade": "City",
    "São Paulo": "São Paulo",
    "Estado": "State",
    "informações do responsável": "Guardian information",
    "Nome do Responsável": "Guardian's name",
    "Principal responsável legal e contato de emergência": "Primary legal guardian and emergency contact",
    "Telefone": "Phone",
    "Email": "Email",
    "Erro": "Error",
    "Por favor, insira um email válido": "Please enter a valid email address",
    "Opções de matricula": "Enrollment options",
    "Selecione o turno de estudo": "Select a study shift",
    "Manha": "Morning",
    "Tarde": "Afternoon",
    "Em qual esporte você gostaria de inscrever seu filho?": "Which sport would you like to enroll your child in?",
    "Futebol": "Soccer",
    "Basquete": "Basketball",
    "Natação": "Swimming",
    "Yoga": "Yoga",
    "Volei": "Volleyball",
    "Boxe": "Boxing",
    "Declaro que li e concordo com os": "I confirm that I have read and agree to the",
    "Termos e Condições": "Terms and Conditions",
    "e com a": "and the",
    "Política de Privacidade": "Privacy Policy",
    "da escola Estrela do Amanhã.": "of Stars of Tomorrow school.",
    "Salvar Respostas": "Save answers",
    "Fazer Matricula": "Submit enrollment",
    "Porque cada momento de": "Because every moment of",
    "aprendizado": "learning",
    "conta": "matters",
    "Inscreva seu filho em nossa escola e veja-o florescer em um ambiente acolhedor, seguro e estimulante.": "Enroll your child in our school and watch them thrive in a welcoming, safe, and stimulating environment.",
    "Ilustração de uma professora com uma aluna": "Illustration of a teacher and student",

    "Travelgram perfil de viagens": "Travelgram travel profile",
    "Foto de Perfil": "Profile photo",
    "Amante de viagens, cultura e gastronomia. Cada clique revela novas histórias e paisagens incríveis, direto da vibrante cidade de São Paulo.": "A lover of travel, culture, and food. Every shot captures new stories and stunning landscapes, straight from the vibrant city of São Paulo.",
    "Descobertas únicas": "Unique discoveries",
    "Roteiros autênticos": "Authentic itineraries",
    "Memórias inspiradoras": "Inspiring memories",
    "Ícone de Localização": "Location icon",
    "São Paulo, Brasil": "São Paulo, Brazil",
    "37 Países": "37 countries",
    "Ícone de Avião": "Airplane icon",
    "240 Fotos": "240 photos",
    "Ícone de Fotos": "Photos icon",
    "© 2026 Travelgram. Todos os direitos reservados ©": "© 2026 Travelgram. All rights reserved ©",
    "Termos de Uso": "Terms of Use",
    "Travelgram Logo": "Travelgram logo",
    "Ilustração de um sol com uma nuvem": "Illustration of a sun behind a cloud",
    "Ilustração de um sol": "Illustration of a sun",
    "icone de futebol": "Soccer icon",
    "icone de basquete": "Basketball icon",
    "icone de natação": "Swimming icon",
    "icone de yoga": "Yoga icon",
    "icone de volei": "Volleyball icon",
    "icone de boxe": "Boxing icon"
  }));

  const textOriginals = new WeakMap();
  const attributeOriginals = new WeakMap();
  const translatableAttributes = ["alt", "title", "placeholder", "aria-label", "content", "value"];
  const script = document.currentScript;
  const homeUrl = script?.dataset.homeUrl;
  const switcher = document.createElement("nav");
  switcher.className = "language-switcher";
  switcher.setAttribute("aria-label", "Idioma / Language");

  if (homeUrl) {
    const homeLink = document.createElement("a");
    homeLink.href = homeUrl;
    homeLink.textContent = "← Menu principal";
    switcher.append(homeLink);
  }

  const languageSelect = document.createElement("select");
  languageSelect.setAttribute("aria-label", "Idioma / Language");
  for (const [value, label] of [["pt-BR", "Português (BR)"], ["en", "English"]]) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    languageSelect.append(option);
  }
  languageSelect.addEventListener("change", () => setLanguage(languageSelect.value, true));
  switcher.append(languageSelect);

  const styles = document.createElement("style");
  styles.textContent = `
    .language-switcher {
      position: relative;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      min-height: 60px;
      padding: 8px clamp(16px, 4vw, 36px);
      font: 600 12px/1 "Avenir Next", Avenir, "Segoe UI", sans-serif;
    }
    .language-switcher a {
      display: inline-flex;
      align-items: center;
      min-height: 38px;
      padding: 0 10px;
      border: 1px solid rgba(32, 43, 42, .18);
      border-radius: 7px;
      color: #176b68;
      background: #fbfcfa;
      text-decoration: none;
      white-space: nowrap;
    }
    .language-switcher a:hover {
      color: #b84d37;
      background: #fff;
    }
    .language-switcher select {
      min-width: 142px;
      min-height: 38px;
      padding: 0 32px 0 12px;
      border: 1px solid rgba(32, 43, 42, .18);
      border-radius: 7px;
      color: #202b2a;
      background-color: #fbfcfa;
      background-image: linear-gradient(45deg, transparent 50%, #40504d 50%), linear-gradient(135deg, #40504d 50%, transparent 50%);
      background-position: calc(100% - 13px) 16px, calc(100% - 8px) 16px;
      background-repeat: no-repeat;
      background-size: 5px 5px, 5px 5px;
      font: inherit;
      appearance: none;
      cursor: pointer;
    }
    .language-switcher select:focus-visible,
    .language-switcher a:focus-visible {
      outline: 2px solid #b84d37;
      outline-offset: 3px;
    }
    @media (max-width: 420px) {
      .language-switcher {
        gap: 8px;
        padding-inline: 12px;
      }
      .language-switcher select {
        min-width: 132px;
        font-size: 11px;
      }
      .language-switcher a {
        font-size: 11px;
      }
    }
  `;
  document.head.append(styles);
  document.body.prepend(switcher);

  function setLanguage(language, persist) {
    const english = language === "en";
    document.documentElement.lang = english ? "en" : "pt-BR";

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);
      const original = textOriginals.get(node);
      const content = original.trim().replace(/\s+/g, " ");
      if (!content) continue;

      const translated = english ? translations.get(content) : content;
      if (translated === undefined) continue;
      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];
      node.nodeValue = `${leading}${translated}${trailing}`;
    }

    for (const element of document.querySelectorAll("*")) {
      for (const attribute of translatableAttributes) {
        if (!element.hasAttribute(attribute)) continue;
        let originals = attributeOriginals.get(element);
        if (!originals) {
          originals = new Map();
          attributeOriginals.set(element, originals);
        }
        if (!originals.has(attribute)) originals.set(attribute, element.getAttribute(attribute));
        const original = originals.get(attribute);
        element.setAttribute(attribute, english ? (translations.get(original) || original) : original);
      }
    }

    const title = document.querySelector("title");
    if (title) {
      if (!title.dataset.originalTitle) title.dataset.originalTitle = title.textContent;
      const original = title.dataset.originalTitle;
      title.textContent = english ? (translations.get(original) || original) : original;
    }

    for (const element of document.querySelectorAll("input[lang], select[lang], textarea[lang]")) {
      element.lang = english ? "en" : "pt-BR";
    }

    switcher.setAttribute("aria-label", english ? "Language and navigation" : "Idioma e navegação");
    languageSelect.setAttribute("aria-label", english ? "Select language" : "Selecionar idioma");
    languageSelect.options[0].textContent = english ? "Português (BR)" : "Português (BR)";
    languageSelect.options[1].textContent = "English";
    languageSelect.value = language;

    if (persist) {
      try {
        localStorage.setItem("rockeseat-language", language);
      } catch {}
    }
  }

  let savedLanguage = "pt-BR";
  try {
    if (localStorage.getItem("rockeseat-language") === "en") savedLanguage = "en";
  } catch {}
  setLanguage(savedLanguage, false);
})();
