const buttons = document.querySelectorAll('.btn-gallery');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const imageItem = this.closest('.image-item');
        const paragraph = imageItem.querySelector('.paragraf').textContent;
        const imgSrc = this.getAttribute('data-img-src');

        Swal.fire({
            icon: 'info',
            iconColor: '#00C9FD',
            title: 'Info',
            html: `
                <img loading="lazy" alt="" class="img-fluid rounded" src="${imgSrc}">
                <p class="paragraf">${paragraph}</p>
            `,
            confirmButtonColor: '#00C9FD',
            confirmButtonText: 'Tutup',
            scrollbarPadding: false,
        });
    });
});