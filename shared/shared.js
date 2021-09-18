const navLogo = document.querySelector('#nav-logo');

document.addEventListener("scroll", (e) => {
    if (window.scrollY > 0) {
        navLogo.classList.add('scrolled');
    } else {
        navLogo.classList.remove('scrolled');
    }
})