document.addEventListener('DOMContentLoaded', function () {
    let typingEffect = new Typed(".typedText", {
        strings: ["My Certificate", "My Awards", "My Appreciations"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
        showCursor: true,
        CursorChar: "|"
    });

    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    sr.reveal('.btn-back', { delay: 100 });
    sr.reveal('.text-center', { delay: 100 });
    sr.reveal('.certificate-item', { delay: 200 });
});