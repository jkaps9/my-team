// Navigation
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === true;
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    if (isExpanded) {
      navToggle.setAttribute("hidden", "");
    } else {
      navToggle.removeAttribute("hidden");
    }
    mainNav.classList.toggle("visible");
  });
}

const directorCards = document.querySelectorAll(".director-card");

if (directorCards.length > 0) {
  directorCards.forEach((card) => {
    const btn = card.querySelector(".director-card__btn");
    if (btn) {
      btn.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
    }
  });
}
