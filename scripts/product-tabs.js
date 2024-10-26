class ProductCard {
  constructor(cardData) {
    Object.assign(this, cardData);
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
              <p class="product-card-text-info__price">$${this.productCardPrice}</p>
              <a href="#" class="add-to-cart-button-link">
                  <div class="add-to-cart-button-el">
                      <p class="add-to-cart-button-text">ADD TO CART</p>
                  </div>
              </a>
          </div>
      </article>`;
  }
}

const cardsData = {
  featured: [
      { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/jbl_rr-56.png", imgAlt: "JBL RR-56", productCardMainInfo: "JBL RR-56", productCardPrice: 110 },
      { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/sennheiser_sn-67.png", imgAlt: "Sennheiser SN-67", productCardMainInfo: "Sennheiser SN-67", productCardPrice: 213 },
      { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/jbl_gt-345.png", imgAlt: "JBL GT-345", productCardMainInfo: "JBL GT-345", productCardPrice: 120 },
      { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/sony_s890.png", imgAlt: "Sony S890", productCardMainInfo: "Sony S890", productCardPrice: 259 },
  ],
  sale: [
      { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/bose_g656-a.png", imgAlt: "Bose G656-A", productCardMainInfo: "Bose G656-A", productCardPrice: 65 },
      { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/airpulse_r255.png", imgAlt: "AirPulse R255", productCardMainInfo: "AirPulse R255", productCardPrice: 65 },
      { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/sony_yt555.png", imgAlt: "Sony YT555", productCardMainInfo: "Sony YT555", productCardPrice: 140 },
      { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/sony_tt56.png", imgAlt: "Sony TT56", productCardMainInfo: "Sony TT56", productCardPrice: 98 },
  ],
  new: [
      { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/sony_yt555.png", imgAlt: "Sony YT555", productCardMainInfo: "Sony YT555", productCardPrice: 140 },
      { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/v-moda_er65.png", imgAlt: "V-MODA ER65", productCardMainInfo: "V-MODA ER65", productCardPrice: 80 },
      { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/jbl_br-55.png", imgAlt: "JBL BR-55", productCardMainInfo: "JBL BR-55", productCardPrice: 115 },
      { linkToProductPage: "product.html", imgSrc: "assets/images/products_pics/jbl_334wn.png", imgAlt: "JBL 334WN", productCardMainInfo: "JBL 334WN", productCardPrice: 140 },
  ]
};

const updateView = function (tabWrapper) {
  tabWrapper.innerHTML = '';
};

const renderCards = function () {
  const activeTab = document.querySelector('.active-tab');
  const activeTabId = activeTab.id;
  const activeCards = cardsData[activeTabId.split('-')[0]];
  const activeWrapper = document.getElementById(`${activeTabId}__wrapper`);
  
  updateView(activeWrapper);
  activeCards.forEach((card) => {
      activeWrapper.insertAdjacentHTML("beforeend", new ProductCard(card).getProductCardHtml());
  });
};

renderCards();

const tabs = [
  { button: document.querySelector('#featured-tab'), wrapper: document.querySelector('#featured-tab__wrapper') },
  { button: document.querySelector('#sale-tab'), wrapper: document.querySelector('#sale-tab__wrapper') },
  { button: document.querySelector('#new-tab'), wrapper: document.querySelector('#new-tab__wrapper') }
];

document.addEventListener('click', function (e) {
  if (!['featured-tab', 'sale-tab', 'new-tab'].includes(e.target.id)) {
      return;
  }

  tabs.forEach(tab => {
      const isActive = tab.button.id === e.target.id;
      tab.button.classList.toggle('active-tab', isActive);
      tab.wrapper.classList.toggle('hidden', !isActive);
  });

  renderCards();
});
