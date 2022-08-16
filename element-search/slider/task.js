let btnLeft = document.querySelector('.slider__arrow_prev');
let btnRight = document.querySelector('.slider__arrow_next');
let sliderItemsArr = Array.from(document.querySelectorAll('.slider__item'));
let activeSlide = 0;

btnRight.onclick = function() {
    if (activeSlide === sliderItemsArr.length - 1) {
        activeSlide = 0;
        sliderItemsArr[sliderItemsArr.length - 1].className = 'slider__item';
    } else {
        activeSlide++;
        sliderItemsArr[activeSlide - 1].className = 'slider__item';
    }
    sliderItemsArr[activeSlide].className = 'slider__item slider__item_active';
}

btnLeft.onclick = function() {
    if (activeSlide === 0) {
        activeSlide = sliderItemsArr.length - 1;
        sliderItemsArr[0].className = 'slider__item';
    } else {
        activeSlide--;
        sliderItemsArr[activeSlide + 1].className = 'slider__item';
    }
    sliderItemsArr[activeSlide].className = 'slider__item slider__item_active';
}