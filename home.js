const services = document.querySelectorAll('.service-container');

const fromUrl = window.location.href;

for (let service of services) {
    service.addEventListener('click', (event) => {
        let replaceFromIndex;
        let matchedString = window.location.href.match('home');

        if (matchedString) {
            replaceFromIndex = matchedString.index;
        } else {
            replaceFromIndex = fromUrl.length - 1;
        }

        let toUrl = fromUrl.slice(0, replaceFromIndex);
        window.location.href = `${toUrl}services-page/services.html?scrollTarget=${service.id}`;    
    }) 
}