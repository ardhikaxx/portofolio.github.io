function myMenuFunction() {
    let menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "75px";
        navHeader.style.lineHeight = "75px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "75px";
        navHeader.style.lineHeight = "75px";

    }
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
})

sr.reveal('.featured-name', {});
sr.reveal('.featured-text-card', { interval: 16, reset: true });
sr.reveal('.featured-text-info', { interval: 16, reset: true });
sr.reveal('.featured-text-btn', { interval: 16, reset: true });
sr.reveal('.social_icons', { interval: 16, reset: true });
sr.reveal('.featured-image', { interval: 16, reset: true });
sr.reveal('.project-box', { interval: 16, reset: true });
sr.reveal('.top-header', { interval: 16, reset: true });
sr.reveal('.top-content', { interval: 16, reset: true });

const srTop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

srTop.reveal('.about__img', { interval: 16, reset: true });
srTop.reveal('.about__subtitle', { interval: 16, reset: true });
srTop.reveal('.about__text', { interval: 16, reset: true });
srTop.reveal('.about__more', { interval: 16, reset: true });

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.skills-info', { interval: 16, reset: true })

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.pack', { interval: 16, reset: true })

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

        } else {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive)

document.addEventListener('DOMContentLoaded', function() {
    function handleMenuClick(event) {
        event.preventDefault();

        var targetId = this.getAttribute('href').substring(1);

        var targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    var menuLinks = document.querySelectorAll('.nav-link');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', handleMenuClick);
    });
});
