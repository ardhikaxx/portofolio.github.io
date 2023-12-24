document.addEventListener('DOMContentLoaded', function() {
    var textArray = ["My Certificate", "My Awards", "My Appreciations"];
    var index = 0;
    var textContainer = document.getElementById('textContainer');

    function changeText() {
        textContainer.innerHTML = textArray[index];
        index = (index + 1) % textArray.length;
    }

    setInterval(changeText, 2000);
});