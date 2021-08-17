let slider = tns({
    container: '.my-slider',
    "animateIn": "jello",
    "animateOut": "rollOut",
    "speed": 400,
    "nav": false,
    "swipeAngle": false,
    controlsContainer: '#controls',
    prevButton: '.previous',
    nextButton: '.next',
    responsive: {
        1280: {
            items: 3
        },
        768: {
            items: 1
        },
        480: {
            items: 1
        },
        320: {
            items: 1
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}