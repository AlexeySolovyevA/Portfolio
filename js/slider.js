const slider = document.querySelector('#slider');
const slides = slider.querySelectorAll('[data-slide]');
const sliderTrack = slider.querySelector('[data-slider-track]');
const currentSliderGap = getComputedStyle(sliderTrack).columnGap;
const currentSlideWidth = slides[0].offsetWidth;
const sliderMovement = currentSlideWidth + parseFloat(currentSliderGap);
let counterSlides = 0;
console.log();

const chooseDirection = (direction) => {
    if (direction === 'right') {
        counterSlides = (counterSlides < slides.length - 1) ? counterSlides += 1 : 0;
    }
}

const handlerEvents = (event) => {
    const isArrowRight = event.target.closest('[data-arrow="right"]');
    const isArrowLeft = event.target.closest('[data-arrow="left"]');
    if (isArrowRight) {
        // counterSlides += 1;
        chooseDirection('right');
    }
    else if (isArrowLeft) {
        // counterSlides -= 1;
        chooseDirection('left');
    }
    sliderTrack.style.transform = `translateX(-${sliderMovement * counterSlides}px)`;
}

slider.addEventListener('click' , handlerEvents);