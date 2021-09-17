const inquiryForm = document.getElementById("inquiry-form");

// Init email.js
(function () {
    emailjs.init("user_MSWOHOMp9S3z7GI66HAnz");
})();

inquiryForm.addEventListener("submit", (event) => {
    console.log(this);
    event.preventDefault();

    emailjs.sendForm('service_cisfsn8', 'inquiry_template', inquiryForm)
        .then(function () {
            console.log("Success")
        }, function (error) {
            console.log("Failed")
        })
})