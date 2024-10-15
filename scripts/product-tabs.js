const featuredTabBtn = document.querySelector('#featured-tab');
const saleTabBtn = document.querySelector('#sale-tab');
const newTabBtn = document.querySelector('#new-tab');
const featuredTabWrapper = document.querySelector('#featured-tab__wrapper');
const saleTabWrapper = document.querySelector('#sale-tab__wrapper');
const newTabWrapper = document.querySelector('#new-tab__wrapper');


document.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target.id);
    console.log(e.target.classList);
    if (e.target.id === 'featured-tab') {
        featuredTabBtn.classList.add("active-tab");
        saleTabBtn.classList.remove("active-tab");
        newTabBtn.classList.remove("active-tab");
        featuredTabWrapper.classList.remove('hidden');
        saleTabWrapper.classList.add('hidden');
        newTabWrapper.classList.add('hidden');
    }
    if (e.target.id === 'sale-tab') {
        featuredTabBtn.classList.remove("active-tab");
        saleTabBtn.classList.add("active-tab");
        newTabBtn.classList.remove("active-tab");
        featuredTabWrapper.classList.add('hidden');
        saleTabWrapper.classList.remove('hidden');
        newTabWrapper.classList.add('hidden');
    }
    if (e.target.id === 'new-tab') {
        featuredTabBtn.classList.remove("active-tab");
        saleTabBtn.classList.remove("active-tab");
        newTabBtn.classList.add("active-tab");
        featuredTabWrapper.classList.add('hidden');
        saleTabWrapper.classList.add('hidden');
        newTabWrapper.classList.remove('hidden');
    }
});