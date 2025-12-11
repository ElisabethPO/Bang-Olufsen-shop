/* eslint-disable max-len */
/* global localStorage */ //
'use strict';

// const catalogContainer = document.querySelector('.catalog-cntr');

const API_BASE_URL = 'https://tech-showcase-store.onrender.com/api';

async function fetchProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const products = await response.json();

    renderProducts(products);
  } catch (error) {
    console.error('Error loading product list:', error);
  }
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingProductIndex = cart.findIndex(item => item._id === product._id);

  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCounter();
}

function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartCounter = document.querySelector('.icon__quantity');

  if (cartCounter) {
    cartCounter.textContent = totalItems;
  }
}

function renderProducts(products) {
  const catalogContainer = document.querySelector('.catalog-cntr');

  if (!catalogContainer) {
    console.error('Error: container .catalog-cntr not found');

    return;
  }
  console.log('RENDER');

  catalogContainer.innerHTML = '';

  products.forEach((product) => {
    const productHTML = `
      <article class="product">
        ${product.type === 'new' ? '<span class="product-prop product__prop new">New</span>' : ''}
        <div class="product__top">
          <img src="${product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg'}"
               alt="${product.name}"
               class="product__image">
        </div>
        <h2 class="product__title">
          <a href="product.html?id=${product._id}" class="product-link">
            ${product.name}
          </a>
        </h2>
        <p class="product__code">Product code: ${product._id || 'N/A'}</p>
        <p class="product__price">
          <span class="product__price-name">Price:</span>
          <span class="product__price-value">$${product.price || '0.00'}</span>
        </p>
        <button class="product__button buy-btn" data-product-id="${product._id}">Buy</button>
      </article>`;

    catalogContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  console.log('RENDER2');

  console.log('add to buy button');

  document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', async function() {
      const productId = this.getAttribute('data-product-id');
      console.log('Product id', productId)

      try {
        const response = await fetch(`${API_BASE_URL}/products/${productId}`);
        const productData = await response.json();

        if (!response.ok) {
          throw new Error('Product not found');
        }

        addToCart(productData);
      } catch (error) {
        console.error('Error loading product data:', error);
      }
    });
  });

  updateCartCounter();
}

document.addEventListener('DOMContentLoaded', fetchProducts);

document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu__nav .nav__link');
  const productList = document.querySelector('.catalog-cntr');

  menuLinks.forEach((link) => {
    link.addEventListener('click', async(event) => {
      event.preventDefault();

      const category = link.dataset.category;

      try {
        const response = await fetch(`${API_BASE_URL}/products/filter?type=${category}`);
        const products = await response.json();

        productList.innerHTML = '';

        products.forEach((product) => {
          const productHTML = `
            <article class="product">
              ${product.type === 'new' ? '<span class="product-prop product__prop new">New</span>' : ''}
                <div class="product__top">
                  <img src="${product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg'}"
                        alt="${product.name}"
                        class="product__image">
                </div>
                <h2 class="product__title">
                  <a href="product.html?id=${product._id}" class="product-link" data-id="${product._id}">
                    ${product.name}
                  </a>
                </h2>
                <p class="product__code">Product code: ${product._id || 'N/A'}</p>
                <p class="product__price">
                  <span class="product__price-name">Price:</span>
                  <span class="product__price-value">$${product.price || '0.00'}</span>
                </p>
                <a href="#" class="product__button" data-qa="product-hover">Buy</a>
            </article>`;

          productList.insertAdjacentHTML('beforeend', productHTML);
        });
      } catch (error) {
        console.error("Error loading products:", error);
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  try {
    const filterItems = document.querySelectorAll('.catalog-filter__items .custom-checkbox__input');
    const productList = document.querySelector('.catalog-cntr');

    if (!productList) {
      console.error('Element .catalog-cntr not found!');

      return;
    }

    const getSelectedFilters = () => {
      const filters = [];

      filterItems.forEach((item) => {
        if (item.checked) {
          const subCategory = item.closest('.custom-checkbox').dataset.text;

          filters.push(subCategory);
        }
      });

      return filters;
    };

    const updateProductList = async() => {
      const selectedFilters = getSelectedFilters();

      try {
        const query = selectedFilters.length
          ? `?subCategory=${selectedFilters.join(',')}`
          : '';
        const response = await fetch(`${API_BASE_URL}/products/filter${query}`);
        const products = await response.json();

        productList.innerHTML = '';

        products.forEach((product) => {
          const productHTML = `
              <article class="product">
                ${product.type === 'new' ? '<span class="product-prop product__prop new">New</span>' : ''}
                  <div class="product__top">
                    <img src="${product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg'}"
                          alt="${product.name}"
                          class="product__image">
                  </div>
                  <h2 class="product__title">
                    <a href="product.html?id=${product._id}" class="product-link" data-id="${product._id}">
                      ${product.name}
                    </a>
                  </h2>
                  <p class="product__code">Product code: ${product._id || 'N/A'}</p>
                  <p class="product__price">
                    <span class="product__price-name">Price:</span>
                    <span class="product__price-value">$${product.price || '0.00'}</span>
                  </p>
                  <a href="#" class="product__button" data-qa="product-hover">Buy</a>
              </article>`;

          productList.insertAdjacentHTML('beforeend', productHTML);
        });
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    filterItems.forEach((checkbox) => {
      checkbox.addEventListener('change', updateProductList);
    });

    updateProductList();
  } catch (error) {
    console.log(error);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const colorFilter = document.getElementById('color-filter');
  const productContainer = document.querySelector('.catalog-cntr');

  if (!colorFilter || !productContainer) {
    console.error('Element with ID "color-filter" not found');

    return;
  }

  colorFilter.addEventListener('change', async(event) => {
    if (event.target.classList.contains('custom-checkbox__input')) {
      const selectedColors = Array.from(
        colorFilter.querySelectorAll('input:checked'),
      ).map((checkbox) => checkbox.closest('label').dataset.text);

      try {
        const response = await fetch(`${API_BASE_URL}/products/filter?color=${selectedColors.join(',')}`);
        const products = await response.json();

        updateProducts(products);
      } catch (error) {
        console.error('Ошибка при фильтрации:', error);
      }
    }
  });

  function updateProducts(products) {
    productContainer.innerHTML = '';

    products.forEach((product) => {
      const productElement = `
        <article class="product">
          ${product.type === 'new' ? '<span class="product-prop product__prop new">New</span>' : ''}
          <div class="product__top">
            <img src="${product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg'}"
                 alt="${product.name}"
                 class="product__image">
          </div>
          <h2 class="product__title">
            <a href="product.html?id=${product._id}" class="product-link" data-id="${product._id}">
              ${product.name}
            </a>
          </h2>
          <p class="product__code">Product code: ${product._id || 'N/A'}</p>
          <p class="product__price">
            <span class="product__price-name">Price:</span>
            <span class="product__price-value">$${product.price || '0.00'}</span>
          </p>
          <a href="#" class="product__button" data-qa="product-hover">Buy</a>
        </article>`;

      productContainer.insertAdjacentHTML('beforeend', productElement);
    });
  }
});

async function fetchRelatedProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products/related-products`);
    const products = await response.json();

    updateProductList(products);
  } catch (error) {
    console.error('Ошибка при загрузке данных о товарах:', error);
  }
}

function updateProductList(products) {
  const relatedContainer = document.querySelector('.card-related__content');

  relatedContainer.innerHTML = '';

  products.forEach(product => {
    const productCard = createProductCard(product);

    relatedContainer.appendChild(productCard);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const buyButtons = document.querySelectorAll('.product__buy-btn');

  buyButtons.forEach((button) => {
    button.addEventListener('click', async(event) => {
      const productId = event.target.getAttribute('data-product-id');

      try {
        const response = await fetch(`${API_BASE_URL}/cart/add`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId }),
        });

        if (!response.ok) {
          throw new Error('Error adding product to cart');
        }

        updateCartUI();
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    });
  });

  async function updateCartUI() {
    try {
      const response = await fetch(`${API_BASE_URL}/cart`);
      const cartItems = await response.json();

      const cartContainer = document.querySelector('.cart__items');

      cartContainer.innerHTML = '';

      cartItems.forEach((item) => {
        const cartItem = document.createElement('div');

        cartItem.classList.add('cart__item');

        cartItem.innerHTML = `
          <img src="${item.product.picture || 'default.jpg'}" class="cart__image">
          <div class="cart__details">
            <h2 class="cart__name">${item.product.name}</h2>
            <p class="cart__price">$${item.product.price}</p>
            <div class="cart__quantity">
              <button class="cart__btn cart__btn--decrease" data-id="${item.product._id}">-</button>
              <span class="cart__quantity-value">${item.quantity}</span>
              <button class="cart__btn cart__btn--increase" data-id="${item.product._id}">+</button>
            </div>
          </div>
        `;
        cartContainer.appendChild(cartItem);
      });

      const totalValue = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

      document.querySelector('.cart__total-value').textContent = `$${totalValue.toFixed(2)}`;
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  }
});
