// assets/js/script.js

window.addEventListener('load', () => {

    // smooth scroll
    const links = document.querySelectorAll('.scroll_to');
    links.forEach((link) => {
        link.addEventListener('click', () => {
            const smooth = document.getElementById(link.getAttribute('data-link'));
            smooth.scrollIntoView({behavior: 'smooth', block: 'center'});
        })
    })
})