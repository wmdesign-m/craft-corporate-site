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

// FAQ accordion
const faqQuestions = document.querySelectorAll(".faq__question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.closest(".faq__item");
    const isOpen = faqItem.classList.contains("is-open");

    document.querySelectorAll(".faq__item").forEach((item) => {
      item.classList.remove("is-open");
    });

    if (!isOpen) {
      faqItem.classList.add("is-open");
    }
  });
});

// Works category filter (the pickup stays visible).
const worksGrid = document.getElementById("worksGrid");
if (worksGrid) {
  const filterButtons = document.querySelectorAll(".works__filter-btn[data-filter]");
  const worksCases = worksGrid.querySelectorAll(".works__case[data-category]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;
      filterButtons.forEach((filterButton) => {
        const active = filterButton === button;
        filterButton.classList.toggle("is-active", active);
        filterButton.setAttribute("aria-pressed", String(active));
      });
      worksCases.forEach((item) => {
        item.hidden = category !== "all" && item.dataset.category !== category;
      });
    });
  });
}
