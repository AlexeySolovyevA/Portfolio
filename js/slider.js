const slider = document.querySelector('#slider');
const slides = slider.querySelectorAll('[data-slide]');
const sliderTrack = slider.querySelector('[data-slider-track]');
const controlButtons = Array.from(slider.querySelectorAll('[data-control]'));
const currentSliderGap = getComputedStyle(sliderTrack).columnGap;
const currentSlideWidth = slides[0].offsetWidth;
const sliderMovement = currentSlideWidth + parseFloat(currentSliderGap);
const minMove = 20;
let startPoint = 0;
let endPoint = 0;
let counterSlides = 0;

const motion = () => {
    sliderTrack.style.transform = `translateX(-${sliderMovement * counterSlides}px)`;
    toggleStyleButtons(counterSlides);
}

const chooseDirection = (direction) => {
    if (direction === 'right') {
        counterSlides = (counterSlides < slides.length - 1) ? counterSlides += 1 : 0;
    }
    else if (direction === 'left') {
        counterSlides = (counterSlides > 0) ? counterSlides -= 1 : slides.length - 1;
    }
}

const toggleStyleButtons = (indexCurrentButton) => {
    const isActiveBtn = slider.querySelector('button.btn-active');
    if (isActiveBtn) {
        isActiveBtn.classList.remove('btn-active');
    }
    controlButtons[indexCurrentButton].classList.add('btn-active');
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

const handlerStartAction = (event) => {
    startPoint = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
}

const handlerEndAction = (event) => {
    endPoint = event.type.includes('mouse') ? event.clientX : event.changedTouches[0].clientX;
    calculateDiffrentCoordinates();
}

const calculateDiffrentCoordinates = () => {
    const currentDiff = startPoint - endPoint;
    if (Math.abs(currentDiff) > minMove) {
        if (currentDiff > 0) {
            chooseDirection('right');
        }
        else {
            chooseDirection('left');
        }
    }
    motion();
}

slider.addEventListener('click' , handlerEvents);
sliderTrack.addEventListener('mousedown' , handlerStartAction);
sliderTrack.addEventListener('mouseup' , handlerEndAction);
sliderTrack.addEventListener('touchstart', handlerStartAction);
sliderTrack.addEventListener('touchend' , handlerEndAction);