let btnLeft = document.querySelector('.slider__arrow_prev');
let btnRight = document.querySelector('.slider__arrow_next');
let sliderItemsArr = Array.from(document.querySelectorAll('.slider__item'));
let activeSlide = element => element.className === 'slider__item slider__item_active';





btnRight.onclick = function() {
    let activeSlideIndex = sliderItemsArr.findIndex(activeSlide);
    if (activeSlideIndex === sliderItemsArr.length - 1) {
        activeSlideIndex = 0;
        sliderItemsArr[sliderItemsArr.length - 1].className = 'slider__item';
    } else {
        activeSlideIndex++;
        sliderItemsArr[activeSlideIndex - 1].className = 'slider__item';
    }
    sliderItemsArr[activeSlideIndex].className = 'slider__item slider__item_active';
}

btnLeft.onclick = function() {
    let activeSlideIndex = sliderItemsArr.findIndex(activeSlide);
    if (activeSlideIndex === 0) {
        activeSlideIndex = sliderItemsArr.length - 1;
        sliderItemsArr[0].className = 'slider__item';
    } else {
        activeSlideIndex--;
        sliderItemsArr[activeSlideIndex + 1].className = 'slider__item';
    }
    sliderItemsArr[activeSlideIndex].className = 'slider__item slider__item_active';
}