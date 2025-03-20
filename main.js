const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});

document.addEventListener("DOMContentLoaded", function () {
  // Contact Form Submission
  document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const address = document.getElementById("address").value;
      const phone = document.getElementById("phone").value;
      
      if (name && address && phone) {
          alert("Thank you, " + name + "! We will get in touch with you soon.");
          this.reset();
      } else {
          alert("Please fill in all fields.");
      }
  });

  // Reservation Form Submission
  document.getElementById("reservationForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const resName = document.getElementById("res-name").value;
      const resEmail = document.getElementById("res-email").value;
      const resDate = document.getElementById("res-date").value;
      const resTime = document.getElementById("res-time").value;
      const resPeople = document.getElementById("res-people").value;
      
      if (resName && resEmail && resDate && resTime && resPeople) {
          alert("Reservation confirmed for " + resName + " on " + resDate + " at " + resTime + " for " + resPeople + " people.");
          this.reset();
      } else {
          alert("Please fill in all fields.");
      }
  });
});