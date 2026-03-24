// Navigation
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("visible");
  });
}

const directorCards = document.querySelectorAll(".director-card");

if (directorCards) {
  directorCards.forEach((card) => {
    card.querySelector(".director-card__btn").addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
}
