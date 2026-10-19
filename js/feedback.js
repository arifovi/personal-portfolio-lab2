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

form.addEventListener("submit", function (event) {

    event.preventDefault();

    //Fullname validation

    if (fullName.value.trim() === "") {
        fullNameError.textContent = "Please enter your full name.";
        
        fullName.classList.add("input-error");
        fullName.classList.remove("input-valid");
    }
    else if (fullName.value.trim().length < 2) {
        fullNameError.textContent = "Name must be at least 2 characters.";
        
        fullName.classList.add("input-error");
        fullName.classList.remove("input-valid");
    }
    else {
        fullNameError.textContent = "";

        fullName.classList.add("input-valid");
        fullName.classList.remove("input-error");
    }

    // Email validation

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";

        email.classList.add("input-error");
        email.classList.remove("input-valid");
    }
    else if (!email.value.includes("@")) {
        emailError.textContent = "Email must include @.";

        email.classList.add("input-error");
        email.classList.remove("input-valid");
    }
    else if (!email.value.includes(".")) {
        emailError.textContent = "Email must include a domain.";

        email.classList.add("input-error");
        email.classList.remove("input-valid");
    }
    else {
        emailError.textContent = "";

        email.classList.add("input-valid");
        email.classList.remove("input-error");
    }

    // Topic validation

    if (topic.value === "") {
        topicError.textContent = "Please choose a topic.";

        topic.classList.add("input-error");
        topic.classList.remove("input-valid");
    }
    else {
        topicError.textContent = "";

        topic.classList.add("input-valid");
        topic.classList.remove("input-error");
    }

    // Comments validation

    if (comments.value.trim() === "") {
        commentsError.textContent = "Please enter your comments.";
        
        comments.classList.add("input-error");
        comments.classList.remove("input-valid");
    }
    else if (comments.value.trim().length < 15) {
        commentsError.textContent = "Comments must be at least 15 characters.";
        
        comments.classList.add("input-error");
        comments.classList.remove("input-valid");
    }
    else {
        commentsError.textContent = "";
        
        comments.classList.add("input-valid");
        comments.classList.remove("input-error");
    }

    // Website validation

    if (website.value.trim() === "") {
        websiteError.textContent = "";

        website.classList.remove("input-error");
        website.classList.remove("input-valid");
    }
    else if (!website.validity.valid) {
        websiteError.textContent = "Please enter a valid website URL.";
        
        website.classList.add("input-error");
        website.classList.remove("input-valid");
    }
    else {
        websiteError.textContent = "";

        website.classList.add("input-valid");
        website.classList.remove("input-error");
    }

});

comments.addEventListener("input", function () {

   if (comments.value.length < 15) {
        characterCounter.textContent =
            comments.value.length + " characters - minimum 15 required";

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

    form.reset();

    fullNameError.textContent = "";
    emailError.textContent = "";
    topicError.textContent = "";
    commentsError.textContent = "";
    websiteError.textContent = "";

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

    characterCounter.textContent =
        "0 characters - minimum 15 required";

    characterCounter.classList.remove("counter-valid");
    characterCounter.classList.add("counter-error");

});