let tabs = Array.from(document.querySelectorAll('.tab'));
let tab__content = Array.from(document.querySelectorAll('.tab__content'));
let activeTab = element => element.className === 'tab tab_active';
let activeContent = element => element.className === 'tab__content tab__content_active';

tabs.forEach(el => {
    el.addEventListener('click', () => {
        let activeTabIndex = tabs.findIndex(activeTab);
        let activeContentIndex = tab__content.findIndex(activeContent);
        let activeEl = tabs.findIndex((tab) => tab === el);
        if (!el.className.includes('tab_active')) {
            tabs[activeTabIndex].classList.remove('tab_active');
            el.classList.add('tab_active');
            tab__content[activeContentIndex].classList.remove('tab__content_active');
            tab__content[activeEl].classList.add('tab__content_active');
        }
    });
});