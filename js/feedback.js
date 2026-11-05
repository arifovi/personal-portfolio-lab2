const form = document.querySelector("#feedback-form");
const fullName = document.querySelector("#full-name");
const fullNameError = document.querySelector("#full-name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const topic = document.querySelector("#topic");
const topicError = document.querySelector("#topic-error");

const comments = document.querySelector("#comments");
const commentsError = document.querySelector("#comments-error");
const characterCounter = document.querySelector("#character-counter");

const website = document.querySelector("#website");
const websiteError = document.querySelector("#website-error");

const clearButton = document.querySelector("#clear-button");

const successMessage = document.querySelector("#success-message");
let successTimer;

function validateFullName() {

    if (fullName.value.trim() === "") {
        fullNameError.textContent = "Please enter your full name.";

        fullName.classList.add("input-error");
        fullName.classList.remove("input-valid");
        fullName.setAttribute("aria-invalid", "true");

        return false;
    }
    else if (fullName.value.trim().length < 2) {
        fullNameError.textContent = "Name must be at least 2 characters.";

        fullName.classList.add("input-error");
        fullName.classList.remove("input-valid");
        fullName.setAttribute("aria-invalid", "true");

        return false;
    }
    else {
        fullNameError.textContent = "";

        fullName.classList.add("input-valid");
        fullName.classList.remove("input-error");
        fullName.setAttribute("aria-invalid", "false");

        return true;
    }
}

function validateEmail() {

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";

        email.classList.add("input-error");
        email.classList.remove("input-valid");
        email.setAttribute("aria-invalid", "true");

        return false;
    }
    else if (!email.validity.valid) {
        emailError.textContent = "Please enter a valid email address.";

        email.classList.add("input-error");
        email.classList.remove("input-valid");
        email.setAttribute("aria-invalid", "true");

        return false;
    }
    else {
        emailError.textContent = "";

        email.classList.add("input-valid");
        email.classList.remove("input-error");
        email.setAttribute("aria-invalid", "false");

        return true;
    }
}


function validateTopic() {

    if (topic.value === "") {
        topicError.textContent = "Please choose a topic.";

        topic.classList.add("input-error");
        topic.classList.remove("input-valid");
        topic.setAttribute("aria-invalid", "true");

        return false;
    }
    else {
        topicError.textContent = "";

        topic.classList.add("input-valid");
        topic.classList.remove("input-error");
        topic.setAttribute("aria-invalid", "false");

        return true;
    }
}


function validateComments() {

    if (comments.value.trim() === "") {
        commentsError.textContent = "Please enter your comments.";

        comments.classList.add("input-error");
        comments.classList.remove("input-valid");
        comments.setAttribute("aria-invalid", "true");

        return false;
    }
    else if (comments.value.trim().length < 15) {
        commentsError.textContent = "Comments must be at least 15 characters.";

        comments.classList.add("input-error");
        comments.classList.remove("input-valid");
        comments.setAttribute("aria-invalid", "true");

        return false;
    }

    else if (comments.value.trim().length > 40) {
        commentsError.textContent = "Comments must be less than 40 characters.";

        comments.classList.add("input-error");
        comments.classList.remove("input-valid");
        comments.setAttribute("aria-invalid", "true");

        return false;
    }

    else {
        commentsError.textContent = "";

        comments.classList.add("input-valid");
        comments.classList.remove("input-error");
        comments.setAttribute("aria-invalid", "false");

        return true;
    }
}



function validateWebsite() {

    if (website.value.trim() === "") {
        websiteError.textContent = "";

        website.classList.remove("input-error");
        website.classList.remove("input-valid");
        website.removeAttribute("aria-invalid");

        return true;
    }
    else if (!website.validity.valid) {
        websiteError.textContent = "Please enter a valid website URL.";

        website.classList.add("input-error");
        website.classList.remove("input-valid");
        website.setAttribute("aria-invalid", "true");

        return false;
    }
    else {
        websiteError.textContent = "";

        website.classList.add("input-valid");
        website.classList.remove("input-error");
        website.setAttribute("aria-invalid", "false");

        return true;
    }
}


form.addEventListener("submit", function (event) {

    event.preventDefault();

    let formIsValid = true;

    clearTimeout(successTimer);
    successMessage.textContent = "";

    //Fullname validation

    if (validateFullName() === false) {
        formIsValid = false;
    }

    // Email validation

    if (validateEmail() === false) {
        formIsValid = false;
    }

    // Topic validation

    if (validateTopic() === false) {
        formIsValid = false;
    }

    // Comments validation

    if (validateComments() === false) {
        formIsValid = false;
    }

    // Website validation

    if (validateWebsite() === false) {
        formIsValid = false;
    }

    if (formIsValid === true) {
        successMessage.textContent =
        "Thanks for your feedback, " + fullName.value.trim() + "!";
        
        successTimer = setTimeout(function () {
            successMessage.textContent = "";
        }, 4000);
        
        form.reset();

        fullName.classList.remove("input-valid");
        email.classList.remove("input-valid");
        topic.classList.remove("input-valid");
        comments.classList.remove("input-valid");
        website.classList.remove("input-valid");

        fullName.removeAttribute("aria-invalid");
        email.removeAttribute("aria-invalid");
        topic.removeAttribute("aria-invalid");
        comments.removeAttribute("aria-invalid");
        website.removeAttribute("aria-invalid");

        characterCounter.textContent =
            "0 characters - minimum 15 required";

        characterCounter.classList.remove("counter-valid");
        characterCounter.classList.add("counter-error");
    }

});

comments.addEventListener("input", function () {

   if (comments.value.length < 15 ) {
        characterCounter.textContent =
            comments.value.length + " characters - minimum 15 required";

        characterCounter.classList.add("counter-error");
        characterCounter.classList.remove("counter-valid");
    }
    else if (comments.value.length > 40 ) {
        characterCounter.textContent =
            comments.value.length + " characters - maximum 40 required";

        characterCounter.classList.add("counter-error");
        characterCounter.classList.remove("counter-valid");
    }
    else {
        characterCounter.textContent =
            comments.value.length + " characters - minimum met";

        characterCounter.classList.add("counter-valid");
        characterCounter.classList.remove("counter-error");
    }
});

clearButton.addEventListener("click", function () {

    clearTimeout(successTimer);
    form.reset();

    fullNameError.textContent = "";
    emailError.textContent = "";
    topicError.textContent = "";
    commentsError.textContent = "";
    websiteError.textContent = "";
    successMessage.textContent = "";

    fullName.classList.remove("input-error");
    fullName.classList.remove("input-valid");

    email.classList.remove("input-error");
    email.classList.remove("input-valid");

    topic.classList.remove("input-error");
    topic.classList.remove("input-valid");

    comments.classList.remove("input-error");
    comments.classList.remove("input-valid");

    website.classList.remove("input-error");
    website.classList.remove("input-valid");

    // Reset accessibility state
    fullName.removeAttribute("aria-invalid");
    email.removeAttribute("aria-invalid");
    topic.removeAttribute("aria-invalid");
    comments.removeAttribute("aria-invalid");
    website.removeAttribute("aria-invalid");

    characterCounter.textContent =
        "0 characters - minimum 15 required";

    characterCounter.classList.remove("counter-valid");
    characterCounter.classList.add("counter-error");

});


/* Validate fields when the user corrects an error */

fullName.addEventListener("input", function () {

    if (fullName.classList.contains("input-error") ||
        fullName.classList.contains("input-valid")) {
        validateFullName();
    }

});

email.addEventListener("input", function () {
    if (email.classList.contains("input-error") ||
        email.classList.contains("input-valid")) {
        validateEmail();
    }
});

topic.addEventListener("change", function () {
    if (topic.classList.contains("input-error") ||
        topic.classList.contains("input-valid")) {
        validateTopic();
    }
});

comments.addEventListener("input", function () {
    if (comments.classList.contains("input-error") ||
        comments.classList.contains("input-valid")) {
        validateComments();
    }
});

website.addEventListener("input", function () {
    if (website.classList.contains("input-error") ||
        website.classList.contains("input-valid")) {
        validateWebsite();
    }
});
