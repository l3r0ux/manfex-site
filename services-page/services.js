const serviceContainers = document.querySelectorAll(".service");

window.addEventListener("scroll", (event) => {
    makeVisible(serviceContainers);
})

function makeVisible() {
    serviceContainers.forEach((container) => {
        if (!container.classList.contains('visible')) {
            if (container.getBoundingClientRect().top + 82 - window.innerHeight < 0) {
                console.log("MAKE VISIBLE: " + container.id);
                container.classList.add('visible');
            }
        }
    })
}

makeVisible(serviceContainers);