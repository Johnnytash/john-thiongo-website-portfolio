document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.getElementById("burger-icon");
  const navList = document.getElementById("nav-list");
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll(".nav-link, .dropdown-link");

  // Toggle mobile menu
  burgerIcon.addEventListener("click", () => {
    navList.classList.toggle("show");
    burgerIcon.classList.toggle("active");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!navList.contains(event.target) && !burgerIcon.contains(event.target)) {
      navList.classList.remove("show");
      burgerIcon.classList.remove("active");
    }
  });

  // Smooth scrolling for nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu after clicking a link
        navList.classList.remove("show");
        burgerIcon.classList.remove("active");
      }
    });
  });

  // Add shadow to header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
