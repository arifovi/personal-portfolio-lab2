const form = document.querySelector("#feedback-form");
const fullName = document.querySelector("#full-name");
const fullNameError = document.querySelector("#full-name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const topic = document.querySelector("#topic");
const topicError = document.querySelector("#topic-error");

const comments = document.querySelector("#comments");
const commentsError = document.querySelector("#comments-error");

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

    // Topic validation

    if (topic.value === "") {
        topicError.textContent = "Please choose a topic.";
    }
    else {
        topicError.textContent = "";
    }

    // Comments validation

    if (comments.value.trim() === "") {
        commentsError.textContent = "Please enter your comments.";
    }
    else if (comments.value.trim().length < 15) {
        commentsError.textContent = "Comments must be at least 15 characters.";
    }
    else {
        commentsError.textContent = "";
    }

});