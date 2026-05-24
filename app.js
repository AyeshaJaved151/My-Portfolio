document.querySelectorAll(".navbar a.nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const projectLinks = [
  "https://ayeshajaved151.github.io/Femhack-2026/",
  "https://ayeshajaved151.github.io/TODO/",
  "https://ayeshajaved151.github.io/calculator/",
  "https://ayeshajaved151.github.io/E-commerce-UI/",
  "https://ayeshajaved151.github.io/Home-Page-1/",
  "https://ayeshajaved151.github.io/Home-Page-2/",
  "https://ayeshajaved151.github.io/css-assignment-6/",
  "https://ayeshajaved151.github.io/hackathon",
  "https://ayeshajaved151.github.io/css-assignment-5/",
  "https://ayeshajaved151.github.io/css-assignment-4/",
  "https://ayeshajaved151.github.io/css-assignment-7/",
  "https://ayeshajaved151.github.io/css-assignment-3/",
];

document.querySelectorAll(".project-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    window.open(projectLinks[index], "_blank");
  });
});

function openResume() {
  window.open("images/CV.jpeg", "_blank");
}

const certificateLinks = [
  "images/html certificate.png",
  "images/css certificate.png",
  "images/javascript certificate.png",
  "images/cyber security certificate.png",
];

document.querySelectorAll(".certificate-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    window.open(certificateLinks[index], "_blank");
  });
});

const reveals = document.querySelectorAll(".reveal");

function showOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();
