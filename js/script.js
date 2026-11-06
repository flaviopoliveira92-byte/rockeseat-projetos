(() => {
  const projectData = window.portfolioProjects;
  const bookElement = document.querySelector("#project-catalog");
  const PageFlip = window.St?.PageFlip;
  const searchInput = document.querySelector("#project-search");
  const categorySelect = document.querySelector("#project-category");
  const resultsStatus = document.querySelector("#project-results");
  const pageIndicator = document.querySelector("#catalog-page-indicator");
  const previousButton = document.querySelector("#catalog-previous");
  const nextButton = document.querySelector("#catalog-next");
  const errorMessage = document.querySelector("#catalog-error");
  const printCatalog = document.querySelector("#print-catalog");
  const zoomDialog = document.querySelector("#image-zoom");
  const zoomImage = zoomDialog?.querySelector("img");
  const whatsappNumber = "5547988907425";
  const isEnglish = () => document.documentElement.lang === "en";
  const words = {
    cover: ["Portfólio · Edição digital", "Portfolio · Digital edition"],
    title: ["Projetos para explorar", "Projects to explore"],
    selected: ["Uma seleção de projetos de desenvolvimento web.", "A selection of web development projects."],
    edition: ["Edição 01 · 2026", "Issue 01 · 2026"],
    about: ["Sobre o portfólio", "About this portfolio"],
    aboutText: [
      "Interfaces e experiências digitais criadas durante minha jornada no desenvolvimento front-end.",
      "Digital interfaces and experiences created throughout my front-end development journey."
    ],
    viewProject: ["Ver projeto", "View project"],
    contact: ["Vamos conversar?", "Let's talk"],
    contactText: ["Entre em contato para conversar sobre projetos e desenvolvimento web.", "Get in touch to talk about projects and web development."],
    whatsapp: ["Conversar pelo WhatsApp", "Chat on WhatsApp"],
    back: ["Obrigado por folhear", "Thanks for browsing"],
    noResults: ["Nenhum projeto encontrado.", "No projects found."],
    resultCount: [(count) => `${count} ${count === 1 ? "projeto encontrado" : "projetos encontrados"}`, (count) => `${count} ${count === 1 ? "project found" : "projects found"}`],
    searchPlaceholder: ["Buscar projeto", "Search projects"],
    allCategories: ["Todas as categorias", "All categories"],
    project: ["Projeto", "Project"],
    page: ["Página", "Page"],
    of: ["de", "of"],
    catalogShare: ["Confira meu catálogo de projetos", "Explore my project catalog"],
    instructions: ["Use as setas do teclado ou clique nas bordas para folhear.", "Use the arrow keys or click the page edges to turn pages."]
  };
  const text = (key) => words[key][isEnglish() ? 1 : 0];

  if (!bookElement || !Array.isArray(projectData) || !searchInput || !categorySelect || !resultsStatus || !pageIndicator) {
    console.error("The project catalog could not be initialized: required page elements or project data are missing.");
    if (errorMessage) {
      errorMessage.hidden = false;
      errorMessage.textContent = "Não foi possível carregar o catálogo. Atualize a página ou tente novamente mais tarde.";
    }
    return;
  }

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);

  const normalizeSearchText = (value) => String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();

  const localeValue = (project, key) => {
    const englishKey = `${key}En`;
    return isEnglish() ? project[englishKey] : project[key];
  };

  const page = (className, content, label) => {
    const element = document.createElement("section");
    element.className = `page ${className}`;
    element.setAttribute("role", "group");
    element.setAttribute("aria-label", label);
    element.innerHTML = content;
    return element;
  };

  const coverPage = () => page("page-cover", `
    <div class="page-cover-content">
      <p class="page-kicker">${text("cover")}</p>
      <p class="page-edition">${text("edition")}</p>
      <h3>${text("title")}</h3>
      <p>${text("selected")}</p>
      <span class="cover-count">${String(projectData.length).padStart(2, "0")} ${isEnglish() ? "projects" : "projetos"}</span>
    </div>
  `, isEnglish() ? "Catalog cover" : "Capa do catálogo");

  const aboutPage = () => page("page-about", `
    <div class="page-content">
      <p class="page-kicker">${text("about")}</p>
      <h3>Flávio Oliveira</h3>
      <p>${text("aboutText")}</p>
      <p class="page-page-number">01</p>
    </div>
  `, text("about"));

  const projectPage = (project, index) => {
    const category = localeValue(project, "category");
    const title = localeValue(project, "title");
    const description = localeValue(project, "description");
    const imageAlt = localeValue(project, "imageAlt");
    const projectLink = escapeHtml(project.href);
    const imageLink = escapeHtml(project.image);

    return page("page-project", `
      <article class="project-card">
        <button class="project-image-button" type="button" aria-label="${escapeHtml(isEnglish() ? `Enlarge image for ${title}` : `Ampliar imagem de ${title}`)}">
          <img class="project-image" src="${imageLink}" alt="${escapeHtml(imageAlt)}" loading="lazy" decoding="async">
        </button>
        <div class="project-content">
          <div class="project-meta">
            <span class="project-number">${String(project.id).padStart(2, "0")}</span>
            <span>${escapeHtml(category)}</span>
          </div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(description)}</p>
          <div class="project-actions">
            <a class="project-action" href="${projectLink}">${text("viewProject")} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <span class="page-page-number">${String(index + 1).padStart(2, "0")}</span>
      </article>
    `, `${text("project")} ${String(index + 1).padStart(2, "0")}: ${title}`);
  };

  const contactPage = () => page("page-contact", `
    <div class="page-content">
      <p class="page-kicker">${text("contact")}</p>
      <h3>${text("contact")}</h3>
      <p>${text("contactText")}</p>
      <a class="contact-email" href="mailto:flaviopoliveira92@gmail.com">flaviopoliveira92@gmail.com</a>
      <a class="contact-whatsapp" href="https://wa.me/${whatsappNumber}" target="_blank" rel="noopener noreferrer">${text("whatsapp")}</a>
    </div>
  `, text("contact"));

  const backCoverPage = () => page("page-back-cover", `
    <div class="page-back-content">
      <span class="back-mark" aria-hidden="true">FO</span>
      <p>${text("back")}</p>
      <a href="mailto:flaviopoliveira92@gmail.com">flaviopoliveira92@gmail.com</a>
    </div>
  `, isEnglish() ? "Back cover" : "Contracapa");

  const getFilteredProjects = () => {
    const query = normalizeSearchText(searchInput.value.trim());
    const category = categorySelect.value;
    return projectData.filter((project) => {
      const searchableText = normalizeSearchText([
        project.title,
        project.titleEn,
        project.description,
        project.descriptionEn,
        project.category,
        project.categoryEn,
        String(project.id)
      ].join(" "));
      return (category === "all" || project.category === category) && (!query || searchableText.includes(query));
    });
  };

  const updateCategoryOptions = () => {
    const selectedCategory = categorySelect.value;
    categorySelect.replaceChildren(new Option(text("allCategories"), "all"));
    const categories = [...new Set(projectData.map((project) => project.category))];
    categories.forEach((category) => {
      const project = projectData.find((item) => item.category === category);
      categorySelect.add(new Option(localeValue(project, "category"), category));
    });
    categorySelect.value = categories.includes(selectedCategory) ? selectedCategory : "all";
  };

  const updateLabels = () => {
    searchInput.placeholder = text("searchPlaceholder");
    searchInput.setAttribute("aria-label", text("searchPlaceholder"));
    categorySelect.setAttribute("aria-label", text("allCategories"));
    previousButton.setAttribute("aria-label", isEnglish() ? "Previous page" : "Página anterior");
    nextButton.setAttribute("aria-label", isEnglish() ? "Next page" : "Próxima página");
    document.querySelector(".catalog-hint").textContent = text("instructions");
    updateCategoryOptions();
  };

  const bookWidth = () => {
    const stage = bookElement.parentElement;
    const style = window.getComputedStyle(stage);
    const horizontalPadding = Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight);
    return Math.min(900, Math.max(220, Math.floor(stage.clientWidth - horizontalPadding)));
  };
  const bookHeight = () => Math.min(
    600,
    Math.round(window.innerHeight * 0.72),
    Math.max(280, window.innerHeight - 180)
  );
  let pageCount = 0;
  let pageFlip = null;

  const updateIndicator = () => {
    if (!pageFlip) return;
    const currentPage = pageFlip.getCurrentPageIndex();
    const first = currentPage + 1;
    const last = pageFlip.getOrientation() === "landscape" && currentPage > 0 && currentPage < pageCount - 1
      ? Math.min(currentPage + 2, pageCount)
      : first;
    const position = first === last ? `${first}` : `${first}–${last}`;
    pageIndicator.textContent = `${text("page")} ${position} ${text("of")} ${pageCount}`;
    previousButton.disabled = false;
    nextButton.disabled = false;
  };

  const turnToNextPage = () => {
    if (!pageFlip) return;
    if (pageFlip.getCurrentPageIndex() >= pageCount - 1) {
      pageFlip.turnToPage(0);
    } else {
      pageFlip.flipNext("bottom");
    }
  };

  const turnToPreviousPage = () => {
    if (!pageFlip) return;
    if (pageFlip.getCurrentPageIndex() <= 0) {
      pageFlip.turnToPage(pageCount - 1);
    } else {
      pageFlip.flipPrev("bottom");
    }
  };

  const handleImageZoom = (event) => {
    const button = event.target.closest(".project-image-button");
    if (!button || !zoomDialog || !zoomImage) return;
    event.preventDefault();
    event.stopPropagation();
    const image = button.querySelector("img");
    zoomImage.src = image.currentSrc || image.src;
    zoomImage.alt = image.alt;
    zoomDialog.showModal();
  };

  const updatePrintCatalog = (pages) => {
    const printPages = pages.map((item) => item.cloneNode(true));
    printPages.forEach((item) => {
      item.querySelectorAll("img").forEach((image) => {
        image.loading = "eager";
      });
    });
    printCatalog.replaceChildren(...printPages);
  };

  const renderCatalog = (focusResults = false) => {
    const filteredProjects = getFilteredProjects();
    resultsStatus.textContent = text("resultCount")(filteredProjects.length);
    const pages = [coverPage(), aboutPage()];
    if (filteredProjects.length) {
      filteredProjects.forEach((project, index) => pages.push(projectPage(project, index)));
    } else {
      pages.push(page("page-empty", `<p>${text("noResults")}</p>`, text("noResults")));
    }
    pages.push(contactPage(), backCoverPage());
    pageCount = pages.length;
    updatePrintCatalog(pages);
    errorMessage.hidden = true;

    if (!PageFlip) {
      pageFlip = null;
      bookElement.replaceChildren(...pages);
      bookElement.classList.add("catalog-fallback");
      errorMessage.hidden = false;
      errorMessage.textContent = isEnglish()
        ? "The interactive catalog library could not be loaded. The project pages are shown below."
        : "A biblioteca do catálogo interativo não foi carregada. As páginas dos projetos estão exibidas abaixo.";
      console.error("StPageFlip could not be loaded. The project pages are shown without page-turn animation.");
      pageIndicator.hidden = true;
      previousButton.hidden = true;
      nextButton.hidden = true;
      return;
    }

    bookElement.classList.remove("catalog-fallback");
    pageIndicator.hidden = false;
    previousButton.hidden = false;
    nextButton.hidden = false;
    const width = bookWidth();
    const height = bookHeight();
    bookElement.style.width = `${width}px`;
    bookElement.style.height = `${height}px`;

    if (pageFlip) {
      pageFlip.updateFromHtml(pages);
      pageFlip.turnToPage(focusResults ? 2 : 0);
    } else {
      pageFlip = new PageFlip(bookElement, {
        width: 450,
        height,
        size: "stretch",
        minWidth: 220,
        maxWidth: 900,
        minHeight: 280,
        maxHeight: 600,
        autoCenter: true,
        autoSize: true,
        showCover: true,
        drawShadow: true,
        maxShadowOpacity: 0.5,
        flippingTime: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 900,
        usePortrait: true,
        mobileScrollSupport: false
      });
      pageFlip.on("flip", updateIndicator);
      pageFlip.on("changeOrientation", updateIndicator);
      pageFlip.loadFromHTML(pages);
    }
    updateIndicator();
  };

  const resizeBook = () => {
    bookElement.style.width = `${bookWidth()}px`;
    bookElement.style.height = `${bookHeight()}px`;
  };

  const currentProject = () => {
    if (!pageFlip) return null;
    const filteredProjects = getFilteredProjects();
    const currentPage = pageFlip.getCurrentPageIndex();
    const projectIndex = Math.max(currentPage, 2) - 2;
    return currentPage >= 1 && projectIndex < filteredProjects.length
      ? filteredProjects[projectIndex]
      : null;
  };

  updateLabels();
  resizeBook();
  window.addEventListener("resize", resizeBook, { passive: true });
  renderCatalog();
  bookElement.addEventListener("click", handleImageZoom);
  searchInput.addEventListener("input", () => renderCatalog(true));
  categorySelect.addEventListener("change", () => renderCatalog(true));
  document.querySelector(".language-switcher select")?.addEventListener("change", () => {
    updateLabels();
    renderCatalog();
  });
  previousButton.addEventListener("click", turnToPreviousPage);
  nextButton.addEventListener("click", turnToNextPage);
  document.querySelector("#save-pdf").addEventListener("click", () => window.print());
  document.querySelector("#share-catalog").addEventListener("click", () => {
    const project = currentProject();
    const projectUrl = project ? new URL(project.href, window.location.href).href : window.location.href;
    const messageText = project
      ? `${localeValue(project, "title")} — ${text("catalogShare")}: ${projectUrl}`
      : `${text("catalogShare")}: ${projectUrl}`;
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
  });
  zoomDialog?.querySelector(".image-zoom-close")?.addEventListener("click", () => zoomDialog.close());
  zoomDialog?.addEventListener("click", (event) => {
    if (event.target === zoomDialog) zoomDialog.close();
  });
  document.addEventListener("keydown", (event) => {
    if (zoomDialog?.open || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target.matches("input, select, textarea, [contenteditable='true']")) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      turnToNextPage();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      turnToPreviousPage();
    }
  });
})();
