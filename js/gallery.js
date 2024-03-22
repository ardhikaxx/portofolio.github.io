const buttons = document.querySelectorAll('.btn-gallery');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const imageItem = this.closest('.image-item');
        const paragraph = imageItem.querySelector('.paragraf').textContent;
        const imgSrc = this.getAttribute('data-img-src');

        Swal.fire({
            icon: 'info',
            iconColor: '#BC3748',
            title: 'Info',
            html: `
                <img loading="lazy" alt="" class="img-fluid rounded" src="${imgSrc}">
                <p class="paragraf">${paragraph}</p>
            `,
            confirmButtonColor: '#BC3748',
            confirmButtonText: 'Tutup',
            scrollbarPadding: false,
        });
    });
});