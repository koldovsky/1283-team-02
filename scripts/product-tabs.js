
class ProductCard {
    constructor({ linkToProductPage, imgSrc, imgAlt, productCardMainInfo, productCardPrice }) {
        this.linkToProductPage = linkToProductPage;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.productCardMainInfo = productCardMainInfo;
        this.productCardPrice = productCardPrice;
    }

    getProductCardHtml() {
        return `
      <article class="product-card">
            <div class="product-card-img__container">
              <a href="${this.linkToProductPage}" class="link-to-product-page">
                <img src="${this.imgSrc}" alt="${this.imgAlt}" />
              </a>
            </div>
            <div class="product-text-info">
              <a href="${this.linkToProductPage}" class="link-to-product-page">
                <p class="product-card-text-info__main-info">${this.productCardMainInfo}</p>
              </a>
              <p class="product-card-text-info__price">$ ${this.productCardPrice}</p>
              <a href="#" class="add-to-cart-button-link">
                <div class="add-to-cart-button-el">
                  <p class="add-to-cart-button-text">ADD TO CART</p>
                </div>
              </a>
            </div>
          </article>
      `
    }

}

const cardsData = {
    featured: [
        { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/jbl_rr-56.png", imgAlt: "yellow headphones", productCardMainInfo: "JBL RR-56", productCardPrice: 110 },
        { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/sennheiser_sn-67.png", imgAlt: "black headphones", productCardMainInfo: "Sennheiser SN-67", productCardPrice: 213 },
        { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/jbl_gt-345.png", imgAlt: "grey speaker", productCardMainInfo: "JBL GT-345", productCardPrice: 120 },
        { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/sony_s890.png", imgAlt: "red speaker", productCardMainInfo: "Sony S890", productCardPrice: 259 },
    ],
    sale: [
        { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/bose_g656-a.png", imgAlt: "Bose G656-A headphones", productCardMainInfo: "Bose G656-A", productCardPrice: 65 },
        { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/airpulse_r255.png", imgAlt: "AirPulse R255 headphones", productCardMainInfo: "AirPulse R255", productCardPrice: 65 },
        { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/sony_yt555.png", imgAlt: "Sony YT555 headphones", productCardMainInfo: "Sony YT555", productCardPrice: 140 },
        { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/sony_tt56.png", imgAlt: "Sony TT56 headphones", productCardMainInfo: "Sony TT56", productCardPrice: 98 },
    ],
    new: [
        { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/sony_yt555.png", imgAlt: "Sony YT555 headphones", productCardMainInfo: "Sony YT555", productCardPrice: 140 },
        { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/v-moda_er65.png", imgAlt: "V-MODA ER65 headphones", productCardMainInfo: "V-MODA ER65", productCardPrice: 80 },
        { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/jbl_br-55.png", imgAlt: "JBL BR-55 headphones", productCardMainInfo: "JBL BR-55", productCardPrice: 115 },
        { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/jbl_334wn.png", imgAlt: "JBL 334WN headphones", productCardMainInfo: "JBL 334WN", productCardPrice: 140 },
    ]
};


const updateView = function () {
    document.getElementById('featured-tab__wrapper').innerHTML = ''
    document.getElementById('sale-tab__wrapper').innerHTML = ''
    document.getElementById('new-tab__wrapper').innerHTML = ''
}

const renderCards = function () {
    updateView();

    const activeTab = document.querySelector('.active-tab');

    if (!activeTab) {         // without this test the whole code is not working! why?????????????????
        console.error('No active tab found');
        return;
    }

    const activeTabId = activeTab.id;
    
    const activeCards = cardsData[activeTabId.split('-')[0]];    

    const activeWrapper = document.getElementById(`${activeTabId}__wrapper`);

    activeCards.forEach((card) => {
        activeWrapper.insertAdjacentHTML("beforeend", new ProductCard(card).getProductCardHtml());
    });
}

renderCards()

const tabs = [
    { button: document.querySelector('#featured-tab'), wrapper: document.querySelector('#featured-tab__wrapper') },
    { button: document.querySelector('#sale-tab'), wrapper: document.querySelector('#sale-tab__wrapper') },
    { button: document.querySelector('#new-tab'), wrapper: document.querySelector('#new-tab__wrapper') }
];

document.addEventListener('click', function (e) {
    if (e.target.id !== 'featured-tab' && e.target.id !== 'sale-tab' && e.target.id !== 'new-tab') {
        return;
    }

    tabs.forEach(tab => {
        const isActive = tab.button.id === e.target.id;

        tab.button.classList.toggle('active-tab', isActive);
        tab.wrapper.classList.toggle('hidden', !isActive);
        renderCards()
    });
});