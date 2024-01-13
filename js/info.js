const buttons = document.querySelectorAll('.btn-project');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const project = this.closest('.project');

        const iconSVG = project.querySelector('.icon-app').innerHTML;
        const paragraph = project.querySelector('.paragraf-info').textContent;

        Swal.fire({
            icon: 'info',
            iconColor:'#ce0000',
            title: 'Info',
            html: `<div class="icon-app">${iconSVG}</div>
                    <p class="paragraf-info">${paragraph}</p>`,
            confirmButtonColor: '#ce0000',
            confirmButtonText: 'Tutup'
        });
    });
});
