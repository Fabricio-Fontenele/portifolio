// Aguarda DOM pronto antes de executar scripts
document.addEventListener("DOMContentLoaded", function () {
  // ----- Dark mode toggle -----
  const darkModeBtn = document.createElement("button");
  darkModeBtn.className = "dark-toggle";
  darkModeBtn.title = "Alternar modo escuro";
  darkModeBtn.setAttribute("aria-label", "Alternar modo escuro");
  darkModeBtn.setAttribute("tabindex", "0");
  document.body.appendChild(darkModeBtn);

  // Função para trocar ícone e animação
  function swapDarkIcon(isDark) {
    darkModeBtn.classList.add("icon-anim");
    darkModeBtn.innerHTML = isDark
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
    setTimeout(() => darkModeBtn.classList.remove("icon-anim"), 350);
  }

  // Aplica preferência salva
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
    swapDarkIcon(true);
  } else {
    swapDarkIcon(false);
  }

  // Toggle dark mode
  darkModeBtn.onclick = function () {
    document.documentElement.classList.toggle("dark-mode");
    const isDark = document.documentElement.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    swapDarkIcon(isDark);
  };

  // Permite toggle pelo teclado (acessibilidade)
  darkModeBtn.addEventListener("keyup", function (e) {
    if (e.key === "Enter" || e.key === " ") darkModeBtn.click();
  });

  // ----- Toast de feedback animado para contato -----
  function showToast(msg) {
    let toast = document.querySelector(".toast-feedback");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast-feedback";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.display = "block";
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => (toast.style.display = "none"), 500);
    }, 2200);
  }

  // Feedback de envio de formulário
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const btn = this.querySelector("button");
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Enviado!';
      showToast("Mensagem enviada! Obrigado pelo contato.");
      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar';
        this.reset();
      }, 2200);
    });
  }

  // ----- Animação nos cards de projeto ao passar o mouse -----
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.045) translateY(-6px)";
      card.style.boxShadow =
        "0 0 0 3px var(--primary), 0 16px 44px rgba(67,207,124,0.19)";
      card.style.transition = "box-shadow 0.18s, transform 0.18s";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.boxShadow = "";
    });
  });
  document.querySelectorAll(".topbar-nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const topOffset = document.querySelector(".topbar").offsetHeight || 0;
          const targetPosition =
            target.getBoundingClientRect().top + window.pageYOffset - topOffset;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
});
