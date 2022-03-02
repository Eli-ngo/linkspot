// assets/js/script.js

// GSAP

TweenMax.to(".home__primary", 2, {
    width: "100%",
    ease: Expo.easeInOut
})
gsap.from('.home__title', {opacity: 0, duration: 2, delay: 1.5, y: 100})
gsap.from('.home__img img', {opacity: 0, duration: 2, delay:1.5, y: -100})

/*HOME SECONDARY*/
TweenMax.to(".home__secondary", 2.5, {
    width: "100%",
    ease: Expo.easeInOut
})
gsap.from('.home__scroll', {opacity: 0, duration: 3, x: -100})
gsap.from('.home__year', {opacity: -1, duration: 1.5, delay: 1.5, x: 100})

/*window.addEventListener('load', () => {

    // smooth scroll
    const links = document.querySelectorAll('.scroll_to');
    links.forEach((link) => {
        link.addEventListener('click', () => {
            const smooth = document.getElementById(link.getAttribute('data-link'));
            smooth.scrollIntoView({behavior: 'smooth', block: 'center'});
        })
    })
})
*/