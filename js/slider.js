const slider = document.querySelector('#slider');
const slides = slider.querySelectorAll('[data-slide]');
const sliderTrack = slider.querySelector('[data-slider-track]');
const controlButtons = Array.from(slider.querySelectorAll('[data-control]'));
const currentSliderGap = getComputedStyle(sliderTrack).columnGap;
const currentSlideWidth = slides[0].offsetWidth;
const sliderMovement = currentSlideWidth + parseFloat(currentSliderGap);
let counterSlides = 0;

const motion = () => {
    sliderTrack.style.transform = `translateX(-${sliderMovement * counterSlides}px)`;
}

const chooseDirection = (direction) => {
    if (direction === 'right') {
        counterSlides = (counterSlides < slides.length - 1) ? counterSlides += 1 : 0;
    }
    else if (direction === 'left') {
        counterSlides = (counterSlides > 0) ? counterSlides -= 1 : slides.length - 1;
    }
}

const handlerEvents = (event) => {
    const isArrowRight = event.target.closest('[data-arrow="right"]');
    const isArrowLeft = event.target.closest('[data-arrow="left"]');
    const isPagination = event.target.closest('[data-control]');

    if (isPagination) {
        const indexCurrentButton = controlButtons.indexOf(isPagination);
        counterSlides = indexCurrentButton;
    }

    if (isArrowRight) {
        chooseDirection('right');
    }
    else if (isArrowLeft) {
        chooseDirection('left');
    }
    motion();
}

slider.addEventListener('click' , handlerEvents);