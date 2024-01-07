document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    sr.reveal('.btn-back', { delay: 100 });
    sr.reveal('.header', { delay: 100 });
    sr.reveal('.paragraf-header', { delay: 100 });
    sr.reveal('.image-item', { delay: 200 });
});