const inquiryForm = document.getElementById("inquiry-form");
const modalOverlay = document.querySelector(".modal-overlay");
const statusText = document.querySelector(".modal-overlay h5");
const blueLoadingArrow = document.querySelector("#blue-arrow");
const cyanLoadingArrow = document.querySelector("#cyan-arrow");
const greenLoadingArrow = document.querySelector("#green-arrow");

// Init email.js
(function () {
    emailjs.init("user_MSWOHOMp9S3z7GI66HAnz");
})();

inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    modalOverlay.classList.add('visible');
    blueLoadingArrow.classList.add('play-blue-arrow-anim');
    cyanLoadingArrow.classList.add('play-cyan-arrow-anim');
    greenLoadingArrow.classList.add('play-green-arrow-anim');
    statusText.innerText = "Sending...";

    emailjs.sendForm('service_cisfsn8', 'inquiry_template', inquiryForm)
        .then(function () {
            statusText.innerText = "Message Sent";
            setTimeout(() => {
                modalOverlay.classList.remove('visible');
                blueLoadingArrow.classList.remove('play-blue-arrow-anim');
                cyanLoadingArrow.classList.remove('play-cyan-arrow-anim');
                greenLoadingArrow.classList.remove('play-green-arrow-anim');
            }, 2000)

        }, function (error) {
            statusText.innerText = "An Error Occured";
            setTimeout(() => {
                modalOverlay.classList.remove('visible');
                blueLoadingArrow.classList.remove('play-blue-arrow-anim');
                cyanLoadingArrow.classList.remove('play-cyan-arrow-anim');
                greenLoadingArrow.classList.remove('play-green-arrow-anim');
            }, 2000)
            
        })

        inquiryForm.reset();
})