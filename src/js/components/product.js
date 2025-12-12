document.addEventListener('DOMContentLoaded', async function () {
  const productContainer = document.querySelector('.container-narrow');
  if (!productContainer) {
    console.error('Error: Container .container-narrow not found on page');
    return;
  }
  console.log('dwqdqwdqwwq')

  const params = new URLSearchParams(window.location.search);
  console.log('params', params)
  console.log('params', params.get('id'))
  let productId = params.get('id')

  if (!productId) {
    console.error('Error: Product ID not specified in URL and not found in LocalStorage');
    return;
  }

  console.log('Selected product:', productId);

  try {
    const response = await fetch(`/api/products/${productId}`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const product = await response.json();
    if (!product) {
      console.error('Error: Product not found');
      return;
    }

    const titleElement = document.querySelector('.card-info__title');
    if (titleElement) titleElement.textContent = product.name || 'Untitled';

    const codeElement = document.querySelector('.product__code');
    if (codeElement) codeElement.textContent = `Product code: ${product._id || 'N/A'}`;

    const priceElement = document.querySelector('.info-price__current');
    if (priceElement) priceElement.textContent = `$${product.price || '0.00'}`;

    const descriptionElement = document.querySelector('.card-info__descr');
    if (descriptionElement) descriptionElement.textContent = product.description || 'Description missing';

    const productImage = document.querySelector('.card-slider__main img');
    if (productImage) {
      productImage.src = product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg';
      productImage.alt = product.name || 'Product image';
    }

    const descriptionBlocks = document.querySelectorAll('.card-description__content');
    if (descriptionBlocks.length > 0) {
      descriptionBlocks.forEach((block, index) => {
        block.innerHTML = `<p>${index === 0 ? product.description : product.extradescription || 'Дополнительное описание отсутствует.'}</p>`;
      });
    }

  } catch (error) {
    console.error('Error loading product data:', error);
  }
});


document.addEventListener('DOMContentLoaded', async function () {
  const relatedProductsContainer = document.querySelector('.card-related__content');

  if (!relatedProductsContainer) {
    console.error('Error: The container .card-related__content was not found on the page.');
    return;
  }

  relatedProductsContainer.innerHTML = '';

  try {
    const response = await fetch('/api/products/related-products');
    if (!response.ok) {
      throw new Error('Error HTTP: ' + response.status);
    }

    const products = await response.json();

    if (products.length === 0) {
      console.error('Error: Failed to load items');
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
    console.error('Error loading product data:', error);
  }
});
