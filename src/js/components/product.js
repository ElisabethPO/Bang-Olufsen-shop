document.addEventListener('DOMContentLoaded', async function () {
  const productContainer = document.querySelector('.container-narrow');
  if (!productContainer) {
    console.error('Ошибка: контейнер .container-narrow не найден на странице');
    return;
  }
  console.log('dwqdqwdqwwq')

  const params = new URLSearchParams(window.location.search);
  console.log('params', params)
  console.log('params', params.get('id'))
  let productId = params.get('id')

  if (!productId) {
    console.error('Ошибка: ID товара не указан в URL и не найден в LocalStorage');
    return;
  }

  console.log('Выбранный товар:', productId);

  try {
    const response = await fetch(`http://localhost:5000/api/products/${productId}`);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const product = await response.json();
    if (!product) {
      console.error('Ошибка: товар не найден');
      return;
    }

    const titleElement = document.querySelector('.card-info__title');
    if (titleElement) titleElement.textContent = product.name || 'Без названия';

    const codeElement = document.querySelector('.product__code');
    if (codeElement) codeElement.textContent = `Product code: ${product._id || 'N/A'}`;

    const priceElement = document.querySelector('.info-price__current');
    if (priceElement) priceElement.textContent = `$${product.price || '0.00'}`;

    const descriptionElement = document.querySelector('.card-info__descr');
    if (descriptionElement) descriptionElement.textContent = product.description || 'Описание отсутствует';

    const productImage = document.querySelector('.card-slider__main img');
    if (productImage) {
      productImage.src = product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg';
      productImage.alt = product.name || 'Изображение товара';
    }

    const descriptionBlocks = document.querySelectorAll('.card-description__content');
    if (descriptionBlocks.length > 0) {
      descriptionBlocks.forEach((block, index) => {
        block.innerHTML = `<p>${index === 0 ? product.description : product.extradescription || 'Дополнительное описание отсутствует.'}</p>`;
      });
    }

  } catch (error) {
    console.error('Ошибка загрузки данных о товаре:', error);
  }
});


document.addEventListener('DOMContentLoaded', async function () {
  const relatedProductsContainer = document.querySelector('.card-related__content');

  if (!relatedProductsContainer) {
    console.error('Ошибка: контейнер .card-related__content не найден на странице');
    return;
  }

  relatedProductsContainer.innerHTML = '';

  try {
    const response = await fetch('http://localhost:5000/api/products/related-products');
    if (!response.ok) {
      throw new Error('Ошибка HTTP: ' + response.status);
    }

    const products = await response.json();

    if (products.length === 0) {
      console.error('Ошибка: не удалось загрузить товары');
      return;
    }

    products.forEach(product => {
      const productElement = document.createElement('article');
      productElement.classList.add('product');

      productElement.innerHTML = `
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
            </article>
        `;

      relatedProductsContainer.appendChild(productElement);
    });
  } catch (error) {
    console.error('Ошибка при загрузке данных о товарах:', error);
  }
});
