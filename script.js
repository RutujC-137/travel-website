// Navbar background change on scroll
const navbar = document.getElementById('navbar');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    reveal();
};

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Check on load
window.onload = reveal;

// Simple search interactivity
const searchBtn = document.querySelector('.search-container button');
const searchInput = document.querySelector('.search-container input');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        alert(`Searching for adventures in "${query}"...`);
    } else {
        alert('Please enter a destination to start your journey!');
    }
});
