var downloadLink = document.getElementById('downloadLink');
var pdfURL = './assets/pdf/CV ATS.pdf';

downloadLink.addEventListener('click', function () {
    var a = document.createElement('a');
    a.href = pdfURL;
    a.download = 'CV_ATS.pdf';

    a.click();

    document.body.removeChild(a);
});