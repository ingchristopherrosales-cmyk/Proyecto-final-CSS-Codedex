const translations = {
  en: {
    // Navbar
    navSkills: "Skills",
    navProjects: "Featured Projects",
    navContact: "Contact",
    navbarRole: "Full Stack Java Developer",

    // Hero
    heroTitle: "Hello!<br>I'm Christopher Rosales,<br>a Full Stack Developer",

    heroSubtitle:
      "I enjoy turning ideas into innovative digital solutions. I build modern web applications by combining frontend and backend technologies, always focusing on performance, scalability, and user experience.",

    // Buttons
    viewProjects: "View Projects",
    downloadCV: "Download CV",
    cvFile: "../cv/CV-English-Christopher-Rosales.pdf",

    // Stats
    statProjects: "Projects",
    statBackend: "Backend",
    statWorkTitle: "Open",
    statWork: "Open To Work",

    // Sections
    skills: "Skills",
    projects: "Featured Projects",
    contact: "Contact",

    // Skills
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    tools: "Tools",

    skillsSubtitle:
      "Technologies and tools I use to build modern, scalable, and user-focused applications.",

    // Projects
    project1Title: "Project 1: Social Network",
    project1Desc:
      "I developed Caliope, a social networking platform for readers and writers, contributing to both UX/UI design and Full Stack development. My work focused on building key features, creating an intuitive user experience, and developing a scalable and modern web application.",

    project2Title: "Project 2: E-commerce Platform",
    project2Desc:
      "I developed GiftforFifas, an e-commerce platform focused on sports merchandise and fan products. I contributed to both frontend and backend development, implementing product management, search and filtering features, responsive interfaces, and data integration.",

    project3Title: "Project 3: Personal Page",
    project3Desc:
      "I designed and developed a personal portfolio website that serves as a central hub for my projects, skills, and professional experience. The platform combines modern UI/UX principles with responsive web development practices.",

    project4Title: "Project 4: Card Presentation",
    project4Desc:
      "Modern personal business card created to represent my professional brand as a Full Stack Developer. Designed with a minimalist and professional approach.",

    // Contact
    contactSubtitle:
      "I am open to new opportunities and collaborations. Please feel free to contact me using the form below:",

    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    sendMessage: "Send Message",

    // Footer
    footerDescription:
      "Building modern, scalable and user-focused web applications.",

    footerCopy: "© 2026 Christopher Rosales Lara. All rights reserved.",
  },

  es: {
    // Navbar
    navSkills: "Habilidades",
    navProjects: "Proyectos Destacados",
    navContact: "Contacto",
    navbarRole: "Desarrollador Full Stack Java",

    // Hero
    heroTitle: "¡Hola!<br>Soy Christopher Rosales,<br>Desarrollador Full Stack",

    heroSubtitle:
      "Disfruto transformar ideas en soluciones digitales innovadoras. Desarrollo aplicaciones web modernas combinando tecnologías frontend y backend, siempre enfocado en el rendimiento, la escalabilidad y la experiencia de usuario.",

    // Buttons
    viewProjects: "Ver Proyectos",
    downloadCV: "Descargar CV",
    cvFile: "../cv/CV-Español-Christopher-Rosales.pdf",

    // Stats
    statProjects: "Proyectos",
    statBackend: "Backend",
    statWorkTitle: "Disponible",
    statWork: "Para Trabajar",

    // Sections
    skills: "Habilidades",
    projects: "Proyectos Destacados",
    contact: "Contacto",

    // Skills
    frontend: "Frontend",
    backend: "Backend",
    databases: "Bases de Datos",
    tools: "Herramientas",

    skillsSubtitle:
      "Tecnologías y herramientas que utilizo para desarrollar aplicaciones modernas, escalables y centradas en el usuario.",

    // Projects
    project1Title: "Proyecto 1: Red Social",
    project1Desc:
      "Desarrollé Caliope, una plataforma de red social para lectores y escritores, participando tanto en el diseño UX/UI como en el desarrollo Full Stack. Mi trabajo se enfocó en crear funcionalidades clave, una experiencia intuitiva y una aplicación moderna y escalable.",

    project2Title: "Proyecto 2: Comercio Electrónico",
    project2Desc:
      "Desarrollé GiftforFifas, una plataforma de comercio electrónico enfocada en productos deportivos y artículos para aficionados. Participé en el desarrollo frontend y backend, implementando gestión de productos, búsquedas, filtros e integración de datos.",

    project3Title: "Proyecto 3: Portafolio Profesional",
    project3Desc:
      "Diseñé y desarrollé un sitio web de portafolio personal que funciona como un punto central para mis proyectos, habilidades y experiencia profesional. La plataforma combina principios modernos de UI/UX con desarrollo web responsivo.",

    project4Title: "Proyecto 4: Tarjeta de Presentación",
    project4Desc:
      "Tarjeta de presentación moderna creada para representar mi marca profesional como Desarrollador Full Stack. Diseñada con un enfoque minimalista y profesional.",

    // Contact
    contactSubtitle:
      "Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme utilizando el siguiente formulario:",

    labelName: "Nombre",
    labelEmail: "Correo Electrónico",
    labelMessage: "Mensaje",
    sendMessage: "Enviar Mensaje",

    // Footer
    footerDescription:
      "Desarrollando aplicaciones web modernas, escalables y centradas en el usuario.",

    footerCopy:
      "© 2026 Christopher Rosales Lara. Todos los derechos reservados.",
  },
};

function changeLanguage(lang) {
  // Navbar
  document.getElementById("nav-skills").innerHTML =
    `<i class="bi bi-code-slash"></i> ${translations[lang].navSkills}`;

  document.getElementById("nav-projects").innerHTML =
    `<i class="bi bi-folder"></i> ${translations[lang].navProjects}`;

  document.getElementById("nav-contact").innerHTML =
    `<i class="bi bi-envelope"></i> ${translations[lang].navContact}`;

  document.querySelector(".navbar-text").innerHTML =
    translations[lang].navbarRole;

  // Hero
  document.getElementById("hero-title").innerHTML =
    translations[lang].heroTitle;

  document.getElementById("hero-subtitle").innerHTML =
    translations[lang].heroSubtitle;

  // Buttons
  document.getElementById("view-projects-btn").innerHTML =
    translations[lang].viewProjects;

  const cvButton = document.getElementById("download-cv-btn");

  cvButton.innerHTML = translations[lang].downloadCV;
  cvButton.href = translations[lang].cvFile;

  // Stats
  document.getElementById("stat-projects").innerHTML =
    translations[lang].statProjects;

  document.getElementById("stat-backend").innerHTML =
    translations[lang].statBackend;

  document.getElementById("stat-work-title").innerHTML =
    translations[lang].statWorkTitle;

  document.getElementById("stat-work").innerHTML = translations[lang].statWork;

  // Sections
  document.getElementById("skills-title").innerHTML = translations[lang].skills;

  document.getElementById("projects-title").innerHTML =
    translations[lang].projects;

  document.getElementById("contact-title").innerHTML =
    translations[lang].contact;

  // Skills Cards
  document.getElementById("frontend-title").innerHTML =
    translations[lang].frontend;

  document.getElementById("backend-title").innerHTML =
    translations[lang].backend;

  document.getElementById("databases-title").innerHTML =
    translations[lang].databases;

  document.getElementById("tools-title").innerHTML = translations[lang].tools;

  // Subtitles
  document.getElementById("skills-subtitle").innerHTML =
    translations[lang].skillsSubtitle;

  document.getElementById("contact-subtitle").innerHTML =
    translations[lang].contactSubtitle;

  // Projects
  document.getElementById("project1-title").innerHTML =
    translations[lang].project1Title;

  document.getElementById("project1-desc").innerHTML =
    translations[lang].project1Desc;

  document.getElementById("project2-title").innerHTML =
    translations[lang].project2Title;

  document.getElementById("project2-desc").innerHTML =
    translations[lang].project2Desc;

  document.getElementById("project3-title").innerHTML =
    translations[lang].project3Title;

  document.getElementById("project3-desc").innerHTML =
    translations[lang].project3Desc;

  document.getElementById("project4-title").innerHTML =
    translations[lang].project4Title;

  document.getElementById("project4-desc").innerHTML =
    translations[lang].project4Desc;

  // Contact Form
  document.getElementById("label-name").innerHTML =
    translations[lang].labelName;

  document.getElementById("label-email").innerHTML =
    translations[lang].labelEmail;

  document.getElementById("label-message").innerHTML =
    translations[lang].labelMessage;

  document.getElementById("submit-btn").innerHTML =
    translations[lang].sendMessage;

  // Footer
  document.getElementById("footer-description").innerHTML =
    translations[lang].footerDescription;

  document.getElementById("footer-copy").innerHTML =
    translations[lang].footerCopy;
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const themeBtn = document.getElementById("theme-btn");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.innerHTML = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.innerHTML = "🌙";
    localStorage.setItem("theme", "light");
  }
}

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    document.getElementById("theme-btn").innerHTML = "☀️";
  }
};
