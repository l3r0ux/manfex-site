const serviceContainers = document.querySelectorAll(".service");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const scrollToServiceId = urlParams.get('scrollTarget');
if (scrollToServiceId) {
    const scrollToService = document.getElementById(scrollToServiceId);
    scrollToService.scrollIntoView({behaviour: 'smooth', block: 'center'});
}

window.addEventListener("scroll", (event) => {
    makeVisible(serviceContainers);
})

function makeVisible() {
    serviceContainers.forEach((container) => {
        if (!container.classList.contains('visible')) {
            if (container.getBoundingClientRect().top + 82 - window.innerHeight < 0) {
                container.classList.add('visible');
            }
        }
    })
}

makeVisible(serviceContainers);