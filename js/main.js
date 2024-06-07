const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click' , () => {
    menu.classList.toggle('open');
    burger.classList.toggle('active');
});

menu.addEventListener('click' , (event) => {
    if (event.target.closest('[data-anchor-link]')) {
        menu.classList.remove('open');
        burger.classList.remove('active');
    }
});

