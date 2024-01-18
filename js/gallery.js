const buttons = document.querySelectorAll('.btn-gallery');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const imageItem = this.closest('.image-item');

        const paragraph = imageItem.querySelector('.paragraf').textContent;

        Swal.fire({
            icon: 'info',
            iconColor: '#ce0000',
            title: 'Info',
            html: `<p class="paragraf">${paragraph}</p>`,
            confirmButtonColor: '#ce0000',
            confirmButtonText: 'Tutup',
            scrollbarPadding: false
        });
    });
});