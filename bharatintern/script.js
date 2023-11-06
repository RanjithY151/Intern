document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const confirmation = document.getElementById("confirmation");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        confirmation.style.display = "block";
        contactForm.reset();
    });
});
