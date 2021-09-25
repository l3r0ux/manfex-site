const services = document.querySelectorAll('.service-container');

const currentUrl = window.location.href;

for (let service of services) {
    service.addEventListener('click', (event) => {
        let replaceFromIndex;
        let toUrl;
        let matchedString = window.location.href.match('home');

        if (matchedString) {
            replaceFromIndex = matchedString.index;
            toUrl = currentUrl.slice(0, replaceFromIndex);
            window.location.href = `${toUrl}services-page/services.html?scrollTarget=${service.id}`;
        } else {
            window.location.href = `${currentUrl}/services-page/services.html?scrollTarget=${service.id}`;
        }
    }) 
}