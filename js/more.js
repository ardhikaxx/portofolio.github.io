document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 2000,
        reset: true
    });

    sr.reveal('.btn-back', { delay: 100 });
    sr.reveal('.more-header', { delay: 100 });
});