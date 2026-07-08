// Mobile nav toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileNav = document.getElementById("mobileNav");
hamburgerBtn.addEventListener("click", () =>
  mobileNav.classList.add("is-open"),
);
closeBtn.addEventListener("click", () => mobileNav.classList.remove("is-open"));
mobileNav
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => mobileNav.classList.remove("is-open")),
  );

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => io.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll("main .block");
const navLinks = document.querySelectorAll(".nav a");
const navIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === "#" + id,
          );
        });
      }
    });
  },
  { threshold: 0.5 },
);
sections.forEach((sec) => navIO.observe(sec));
