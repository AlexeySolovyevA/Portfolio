const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click' , () => {
    menu.classList.toggle('open');
});

menu.addEventListener('click' , (event) => {
    if (event.target.closest('[data-anchor-link]')) {
        menu.classList.remove('open');
    }
});
// 1. Анимация бургера