let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let activeAds = element => element.className === 'rotator__case rotator__case_active';
let activeAdsIndex = rotatorCase.findIndex(activeAds);


setInterval(() => {
    let { speed, color } = rotatorCase[activeAdsIndex].dataset;
    if (activeAdsIndex === rotatorCase.length - 1) {
        activeAdsIndex = 0;
        rotatorCase[rotatorCase.length - 1].className = 'rotator__case';
    } else {
        activeAdsIndex++;
        rotatorCase[activeAdsIndex - 1].className = 'rotator__case';
    }
    rotatorCase[activeAdsIndex].className = 'rotator__case rotator__case_active';
}, 1000);