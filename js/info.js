const buttons = document.querySelectorAll('.btn-project');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const project = this.closest('.project');

        const iconSVG = project.querySelector('.icon-app').innerHTML;
        const paragraph = project.querySelector('.paragraf-info').textContent;
        const year = project.querySelector('.year-info').textContent;

        Swal.fire({
            icon: 'info',
            iconColor: '#DC213E',
            title: 'Info',
            html: `<div class="icon-app">${iconSVG}</div>
                    <p class="paragraf-info">${paragraph}</p>
                    <h4 class="year-info">${year}</h4>`,
            confirmButtonColor: '#DC213E',
            confirmButtonText: 'Tutup',
            scrollbarPadding: false
        });
    });
});