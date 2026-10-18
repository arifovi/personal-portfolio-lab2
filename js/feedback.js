const form = document.querySelector("#feedback-form");
const fullName = document.querySelector("#full-name");
const fullNameError = document.querySelector("#full-name-error");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (fullName.value.trim() === "") {
        fullNameError.textContent = "Please enter your full name.";
    }

});