document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    sr.reveal('.btn-back', { delay: 100 });
    sr.reveal('.more-header', { delay: 100 });
    sr.reveal('.btn-gallery', { delay: 200 });
    sr.reveal('.btn-cvAts', { delay: 200 });
    sr.reveal('.btn-cvKreatif', { delay: 200 });
});