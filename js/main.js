const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const anchorLinks = document.querySelectorAll('.anchor-link');

burger.addEventListener('click' , () => {
    menu.classList.toggle('open');
});

// Переписать код на Event родителя
anchorLinks.forEach(link => {
    link.addEventListener('click' , () => {
        menu.classList.remove('open');
    })
});