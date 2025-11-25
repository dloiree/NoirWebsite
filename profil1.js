// REVEAL ANIMATION
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal, .reveal-right, .card-reveal").forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            el.classList.add("active");
        }
    });
});

// NAVBAR HAMBURGER
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
