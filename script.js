// Toggle the hamburger menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('hidden');
}

// Add parallax scrolling for the entire site
document.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach((el) => {
        const speed = el.getAttribute('data-speed');
        const offset = window.pageYOffset * speed;
        el.style.backgroundPositionY = `${offset}px`;
    });
});
