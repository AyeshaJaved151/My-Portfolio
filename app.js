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

// Welcome Alert (html and css are code is also here)
window.addEventListener("load", () => {
  Swal.fire({
    title: "👋 Welcome!",
    html: `
      <h2>Welcome to Ayesha's Portfolio!</h2>
      <p style="font-size:16px; line-height:1.8;">
        I'm glad you're here. 
        <br><br>
        Feel free to explore my work and projects. 
      </p>
    `,
    icon: "success",
    confirmButtonText: "Explore Portfolio 🌟",
    confirmButtonColor: "#c88d94",
    allowOutsideClick: false
  });
});

// Thank You Alert 
let thankYouShown = false;

document.addEventListener("mouseleave", (e) => {
  if (e.clientY <= 0 && !thankYouShown) {
    thankYouShown = true;

    Swal.fire({
      title: "❤️ Thank You!",
      html: `
        <h2>Thanks for Visiting My Portfolio!</h2>
        <p style="font-size:16px; line-height:1.8;">
          Your time and interest mean a lot to me.<br><br>
          I hope you enjoyed exploring my projects,
          skills, and achievements.
          <br><br>
        </p>
      `,
      icon: "success",
      confirmButtonText: "See You Again 👋",
      confirmButtonColor: "#c88d94",
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        window.close();
        setTimeout(() => {
          window.location.href = "about:blank";
        }, 300);
      }
    });
  }
});