let tabs = Array.from(document.querySelectorAll('.tab'));
let tab__content = Array.from(document.querySelectorAll('.tab__content'));
let activeTab = element => element.className === 'tab tab_active';
let activeContent = element => element.className === 'tab__content tab__content_active';

tabs.forEach(e => {
    e.addEventListener('click', () => {
        let activeTabIndex = tabs.findIndex(activeTab);
        let activeContentIndex = tab__content.findIndex(activeContent);
        if (!e.className.includes('tab_active')) {
            tabs[activeTabIndex].classList.remove('tab_active');
            e.classList.add('tab_active');
        }
        tab__content.forEach(elem => {
            if (!elem.className.includes('tab__content_active')) {
                tab__content[activeContentIndex].classList.remove('tab__content_active');
                tab__content[activeTabIndex].classList.add('tab__content_active');
            }
        })
    })
})