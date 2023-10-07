let aboutPage = document.querySelector('.first-page');
let projectsPage = document.querySelector('.second-page');
let backgroundPage = document.querySelector('.third-page');
let connectPage = document.querySelector('.fifth-page');

let aboutBtn = document.querySelector('abt');
let projectBtn = document.querySelector('.pjs');
let backgroundBtn = document.querySelector('.bg');
let connectBtn = document.querySelector('.cm');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
            if(entry.target.classList[0] === 'first-page')
                window.scrollTo(0, 0);
        }
    })
},{
    threshold:0.1
})

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.reveal-item');
    elements.forEach((element) => {
        observer.observe(element);
    });

    let aboutPage = document.querySelector('.first-page');
    let projectsPage = document.querySelector('.second-page');
    let backgroundPage = document.querySelector('.third-page');
    let connectPage = document.querySelector('.fifth-page');

    let aboutBtn = document.querySelector('.abt');
    let projectBtn = document.querySelector('.pjs');
    let backgroundBtn = document.querySelector('.bg');
    let connectBtn = document.querySelector('.cm');


    aboutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        aboutPage.scrollIntoView({ behavior: "smooth" });
    });

    projectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectsPage.scrollIntoView({ behavior: "smooth" });
    });

    backgroundBtn.addEventListener('click', (e) => {
        e.preventDefault();
        backgroundPage.scrollIntoView({ behavior: "smooth" });
    });

    connectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        connectPage.scrollIntoView({ behavior: "smooth" });
    })
    })

