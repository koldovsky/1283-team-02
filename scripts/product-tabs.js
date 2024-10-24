const featuredTabBtn = document.querySelector('#featured-tab');
const saleTabBtn = document.querySelector('#sale-tab');
const newTabBtn = document.querySelector('#new-tab');
const featuredTabWrapper = document.querySelector('#featured-tab__wrapper');
const saleTabWrapper = document.querySelector('#sale-tab__wrapper');
const newTabWrapper = document.querySelector('#new-tab__wrapper');


const tabs = [
    { button: featuredTabBtn, wrapper: featuredTabWrapper },
    { button: saleTabBtn, wrapper: saleTabWrapper },
    { button: newTabBtn, wrapper: newTabWrapper }
];

document.addEventListener('click', function (e) {

    if (e.target.id !== 'featured-tab' && e.target.id !== 'sale-tab' && e.target.id !== 'new-tab') {
        return;
    }

    tabs.forEach(tab => {
        const isActive = tab.button.id === e.target.id;

        tab.button.classList.toggle('active-tab', isActive);
        tab.wrapper.classList.toggle('hidden', !isActive);
    });
});
