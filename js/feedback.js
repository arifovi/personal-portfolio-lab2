const form = document.querySelector("#feedback-form");
const fullName = document.querySelector("#full-name");
const fullNameError = document.querySelector("#full-name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    //Fullname validation

    if (fullName.value.trim() === "") {
        fullNameError.textContent = "Please enter your full name.";
    }
    else if (fullName.value.trim().length < 2) {
        fullNameError.textContent = "Name must be at least 2 characters.";
    }
    else {
        fullNameError.textContent = "";
    }

    // Email validation

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
    }
    else if (!email.value.includes("@")) {
        emailError.textContent = "Email must include @.";
    }
    else if (!email.value.includes(".")) {
        emailError.textContent = "Email must include a domain.";
    }
    else {
        emailError.textContent = "";
    }

});