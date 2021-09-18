const serviceContainers = document.querySelectorAll(".service");

console.log(window.innerWidth)

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const scrollToServiceId = urlParams.get('scrollTarget');
if (scrollToServiceId) {
    const scrollToService = document.getElementById(scrollToServiceId);
    window.scrollTo(0, scrollToService.offsetTop - scrollToService.offsetHeight / 4.5);
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