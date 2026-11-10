const form = document.querySelector("#invite-form");
const formStatus = document.querySelector("#form-status");
const eventStart = document.querySelector("#event-start");
const eventEnd = document.querySelector("#event-end");
const eventLocation = document.querySelector("#event-location");
const locationLabel = document.querySelector("#location-label");
const darkStyle = document.querySelector("#dark-style");
const styleLabel = document.querySelector("#style-label");
const coverInput = document.querySelector("#cover-image");
const fileName = document.querySelector("#file-name");
const inviteDialog = document.querySelector("#invite-dialog");
const inviteCover = document.querySelector("#invite-cover");
let uploadedCoverUrl = "";
let coverIssue = "";
let submitAttempted = false;

const isEnglish = () => document.documentElement.lang === "en";
const localized = (portuguese, english) => isEnglish() ? english : portuguese;
const requiredMessages = {
  title: ["Preencha o título do evento.", "Enter an event title."],
  start: ["Preencha a data de início.", "Enter a start date and time."],
  end: ["Preencha a data de fim.", "Enter an end date and time."],
  location: ["Preencha o local ou link do evento.", "Enter the event location or link."],
  description: ["Preencha a descrição.", "Add an event description."],
  contactName: ["Preencha seu nome.", "Enter your name."],
  email: ["Preencha seu e-mail.", "Enter your email address."],
  phone: ["Preencha seu telefone.", "Enter your phone number."]
};
const coverMessages = {
  type: ["Selecione um arquivo de imagem.", "Choose an image file."],
  size: ["A imagem deve ter até 5 MB.", "The image must be 5 MB or smaller."]
};

const errorIds = {
  title: "title-error",
  start: "start-error",
  end: "end-error",
  location: "location-error",
  description: "description-error",
  contactName: "contact-name-error",
  email: "email-error",
  phone: "phone-error",
  terms: "terms-error",
  cover: "cover-error"
};

function showError(name, message) {
  const error = document.getElementById(errorIds[name]);
  if (error) error.textContent = message;
  const control = form.elements.namedItem(name);
  if (control && "setAttribute" in control) {
    control.setAttribute("aria-invalid", message ? "true" : "false");
  }
}

function clearErrors() {
  Object.keys(errorIds).forEach((name) => showError(name, ""));
  formStatus.textContent = "";
}

function checkRequired(name) {
  const control = form.elements.namedItem(name);
  const missing = !String(control?.value || "").trim();
  const message = requiredMessages[name];
  showError(name, missing ? message[isEnglish() ? 1 : 0] : "");
  return !missing;
}

function validateForm() {
  clearErrors();
  let valid = true;

  valid = checkRequired("title") && valid;
  valid = checkRequired("start") && valid;
  valid = checkRequired("end") && valid;
  valid = checkRequired("location") && valid;
  valid = checkRequired("description") && valid;
  valid = checkRequired("contactName") && valid;
  valid = checkRequired("email") && valid;
  valid = checkRequired("phone") && valid;

  const startValue = eventStart.value;
  const endValue = eventEnd.value;
  if (startValue && endValue && new Date(endValue) <= new Date(startValue)) {
    showError("end", localized("O fim deve acontecer depois do início.", "The end time must be after the start time."));
    valid = false;
  }

  const email = document.querySelector("#contact-email");
  if (email.value && !email.validity.valid) {
    showError("email", localized("Informe um e-mail válido.", "Enter a valid email address."));
    valid = false;
  }

  const phone = document.querySelector("#contact-phone");
  if (phone.value && phone.value.replace(/\D/g, "").length < 10) {
    showError("phone", localized("Informe um telefone com DDD.", "Enter a phone number with area code."));
    valid = false;
  }

  const terms = document.querySelector("#terms");
  if (!terms.checked) {
    document.querySelector("#terms-error").textContent = localized(
      "Você precisa aceitar os termos para continuar.",
      "You must accept the terms to continue."
    );
    valid = false;
  }

  return valid;
}

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat(isEnglish() ? "en-US" : "pt-BR", {
    dateStyle: "full",
    timeStyle: "short"
  }).format(new Date(value));
}

function selectedTheme() {
  return form.querySelector('input[name="theme"]:checked');
}

function invitationText() {
  const title = document.querySelector("#invite-title").textContent;
  const date = document.querySelector("#invite-date").textContent;
  const location = document.querySelector("#invite-location").textContent;
  const description = document.querySelector("#invite-description").textContent;
  return `${title}\n${date}\n${location}\n\n${description}`;
}

function generateInvitation() {
  const data = new FormData(form);
  const theme = selectedTheme();
  const accent = data.get("accent");
  const type = data.get("event-type");

  document.documentElement.style.setProperty("--accent", accent);
  document.querySelector("#invite-card").style.setProperty("--accent", accent);
  document.querySelector("#invite-title").textContent = data.get("title").trim();
  document.querySelector("#invite-description").textContent = data.get("description").trim();
  document.querySelector("#invite-date").textContent = `${formatDate(data.get("start"))} — ${formatDate(data.get("end"))}`;
  document.querySelector("#invite-location").textContent = `${type === "online" ? "Online · " : `${localized("Presencial", "In person")} · `}${data.get("location").trim()}`;
  document.querySelector("#invite-host").textContent = data.get("contactName").trim();
  document.querySelector("#invite-theme").textContent = theme.value;
  document.querySelector("#dialog-note").textContent = localized(
    "Seu convite está pronto para compartilhar.",
    "Your invitation is ready to share."
  );

  inviteCover.style.backgroundImage = uploadedCoverUrl
    ? `linear-gradient(0deg, #111a 0%, transparent 70%), url("${uploadedCoverUrl}")`
    : `linear-gradient(0deg, #111a 0%, transparent 70%), url("Assets/Images/${theme.dataset.image}")`;

  inviteDialog.showModal();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateForm()) {
    submitAttempted = true;
    formStatus.textContent = localized(
      "Confira os campos destacados para gerar seu convite.",
      "Review the highlighted fields to create your invitation."
    );
    form.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }
  submitAttempted = true;
  generateInvitation();
});

form.addEventListener("input", (event) => {
  const target = event.target;
  if (target.name in errorIds) showError(target.name, "");
  if (target.name === "event-type") {
    updateEventTypeText();
  }
  if (target.name === "accent") document.documentElement.style.setProperty("--accent", target.value);
  if (target.name === "event-type" && target.type === "radio") {
    form.querySelectorAll(".choice-option").forEach((option) => {
      option.classList.toggle("is-selected", option.contains(target));
    });
  }
  if (target.name === "theme") {
    form.querySelectorAll(".theme-option").forEach((option) => {
      option.classList.toggle("is-selected", option.contains(target));
    });
  }
});

form.addEventListener("change", (event) => {
  const target = event.target;
  if (target.name in errorIds) showError(target.name, "");

  if (target === darkStyle) {
    document.body.classList.toggle("light-mode", !target.checked);
    styleLabel.textContent = target.checked ? localized("Escuro", "Dark") : localized("Claro", "Light");
  }

  if (target === coverInput) {
    const file = target.files?.[0];
    coverIssue = "";
    showError("cover", "");
    if (!file) {
      fileName.textContent = localized("Nenhum arquivo selecionado", "No file selected");
      return;
    }
    if (!file.type.startsWith("image/")) {
      target.value = "";
      fileName.textContent = localized("Nenhum arquivo selecionado", "No file selected");
      coverIssue = "type";
      showError("cover", coverMessages[coverIssue][isEnglish() ? 1 : 0]);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      target.value = "";
      fileName.textContent = localized("Nenhum arquivo selecionado", "No file selected");
      coverIssue = "size";
      showError("cover", coverMessages[coverIssue][isEnglish() ? 1 : 0]);
      return;
    }
    if (uploadedCoverUrl) URL.revokeObjectURL(uploadedCoverUrl);
    uploadedCoverUrl = URL.createObjectURL(file);
    fileName.textContent = file.name;
  }
});

function updateEventTypeText() {
  const online = form.querySelector('input[name="event-type"]:checked')?.value === "online";
  locationLabel.textContent = online
    ? localized("Link da transmissão", "Streaming link")
    : localized("Local", "Location");
  eventLocation.placeholder = online
    ? localized("https://link-da-transmissao.com", "https://your-stream-link.com")
    : localized("Link ou endereço", "Link or address");
}

document.addEventListener("rockeseat:languagechange", () => {
  updateEventTypeText();
  styleLabel.textContent = darkStyle.checked ? localized("Escuro", "Dark") : localized("Claro", "Light");
  if (!coverInput.files?.length) fileName.textContent = localized("Nenhum arquivo selecionado", "No file selected");
  if (submitAttempted && !validateForm()) {
    formStatus.textContent = localized(
      "Confira os campos destacados para gerar seu convite.",
      "Review the highlighted fields to create your invitation."
    );
  }
  if (coverIssue) showError("cover", coverMessages[coverIssue][isEnglish() ? 1 : 0]);
});

document.querySelector(".dialog-close").addEventListener("click", () => inviteDialog.close());
inviteDialog.addEventListener("click", (event) => {
  if (event.target === inviteDialog) inviteDialog.close();
});

document.querySelector("#copy-invite").addEventListener("click", async () => {
  const note = document.querySelector("#dialog-note");
  try {
    await navigator.clipboard.writeText(invitationText());
    note.textContent = localized("Convite copiado para a área de transferência.", "Invitation copied to the clipboard.");
  } catch {
    note.textContent = localized(
      "Não foi possível copiar automaticamente. Selecione e copie os detalhes do convite.",
      "We couldn't copy the invitation automatically. Select and copy its details instead."
    );
  }
});

document.querySelector("#share-invite").addEventListener("click", async () => {
  const note = document.querySelector("#dialog-note");
  const title = document.querySelector("#invite-title").textContent;
  const text = invitationText();
  if (navigator.share) {
    try {
      await navigator.share({ title, text });
      note.textContent = localized("Convite compartilhado.", "Invitation shared.");
    } catch (error) {
      if (error.name !== "AbortError") note.textContent = localized("Não foi possível compartilhar agora.", "The invitation couldn't be shared right now.");
    }
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    note.textContent = localized(
      "Seu dispositivo não oferece compartilhamento direto. Convite copiado.",
      "Direct sharing isn't available on this device, so the invitation was copied."
    );
  } catch {
    note.textContent = localized("Seu navegador não oferece compartilhamento direto.", "Direct sharing isn't available in this browser.");
  }
});
