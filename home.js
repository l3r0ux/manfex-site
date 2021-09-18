const services = document.querySelectorAll('.service-container');

const fromUrl = window.location.href;

for (let service of services) {
    service.addEventListener('click', (event) => {
        let replaceFromIndex = window.location.href.match('home').index;
        let toUrl = fromUrl.slice(0, replaceFromIndex);
        window.location.href = `${toUrl}services-page/services.html?scroll=${service.id}`;
    }) 
}