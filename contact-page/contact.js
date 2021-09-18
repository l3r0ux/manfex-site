const inquiryForm = document.getElementById("inquiry-form");
const modalOverlay = document.querySelector(".modal-overlay");
const statusText = document.querySelector(".modal-overlay h5");

// Init email.js
(function () {
    emailjs.init("user_MSWOHOMp9S3z7GI66HAnz");
})();

inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    modalOverlay.classList.add('visible');
    statusText.innerText = "Sending...";

    emailjs.sendForm('service_cisfsn8', 'inquiry_template', inquiryForm)
        .then(function () {
            statusText.innerText = "Email Sent";
            setTimeout(() => {
                modalOverlay.classList.remove('visible');
            }, 2000)

        }, function (error) {
            statusText.innerText = "An Error Occured";
            setTimeout(() => {
                modalOverlay.classList.remove('visible');
            }, 2000)
            
        })

        inquiryForm.reset();
})