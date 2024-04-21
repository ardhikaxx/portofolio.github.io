document.addEventListener('DOMContentLoaded', function () {
    let typingEffect = new Typed(".typedText", {
        strings: ["My Certificate", "My Awards", "My Appreciations"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
        showCursor: true,
        CursorChar: "|"
    });
});

var dropdown = document.getElementById("dropdownMenu");

    var certificateItems = document.querySelectorAll(".certificate-item");

    certificateItems.forEach(function(item) {
        item.style.display = "block";
    });

    dropdown.addEventListener("change", function() {
        var selectedValue = dropdown.value;

        certificateItems.forEach(function(item) {
            item.style.display = "none";
        });

        if (selectedValue !== "Filter") {
            document.querySelectorAll(".certificate-item[data-filter='" + selectedValue + "']").forEach(function(item) {
                item.style.display = "block";
            });
        } else {
            certificateItems.forEach(function(item) {
                item.style.display = "block";
            });
        }
    });