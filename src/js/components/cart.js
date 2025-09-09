import vars from '../_vars';

let count = 0;

vars.$cartButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const quantityInput = button.closest('.card-info').querySelector('.stepper__input');
    let quantity = parseInt(quantityInput.value, 10) || 1;

    count += quantity;

    vars.$cartCounter.textContent = count;
  });
});


vars.$buyButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    vars.$cartCounter.textContent = count;
  });
});


document.querySelectorAll('.cart__btn').forEach(button => {
  button.addEventListener('click', function () {
    const index = this.getAttribute('data-index');
    const quantityElement = document.querySelector(`.cart__quantity-value[data-index='${index}']`);
    let quantity = parseInt(quantityElement.textContent);

    if (this.classList.contains('cart__btn--increase')) {
      quantity++;
    } else if (this.classList.contains('cart__btn--decrease') && quantity > 1) {
      quantity--;
    }

    quantityElement.textContent = quantity;
    updateTotal();
  });
});

function updateTotal() {
  let total = 0;
  document.querySelectorAll('.cart__item').forEach(item => {
    const price = parseFloat(item.querySelector('.cart__price').textContent.replace('$', ''));
    const quantity = parseInt(item.querySelector('.cart__quantity-value').textContent);
    total += price * quantity;
  });
  document.querySelector('.cart__total-value').textContent = `$${total.toFixed(2)}`;
}

document.querySelectorAll('.cart__remove').forEach(button => {
  button.addEventListener('click', function () {
    const itemElement = this.closest('.cart__item');
    if (itemElement) {
      itemElement.remove();
      updateTotal();
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const vars = {
    cartProductsList: document.querySelector(".cart__items"),
  };
  const totalPriceElement = document.querySelector(".cart__total-value");


  if (!vars.cartProductsList || !totalPriceElement) {
    console.error("Помилка: Не знайдено vars.cartProductsList или .cart__total-value");
    return;
  }

  console.log("Кошик заповнено!");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartDisplay() {
    vars.cartProductsList.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((product, index) => {
      totalPrice += parseFloat(product.price.replace("$", "")) * product.quantity;

      const itemHTML = `
        <div class="cart__item" data-id="${product.id}">
           <img src="${product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg'}"
               alt="${product.name}"
               class="cart__image">
          <div class="cart__details">
            <h2 class="cart__name">${product.name}</h2>
            <p class="cart__price">$${product.price}</p>
            <div class="cart__quantity">
              <button class="cart__btn cart__btn--decrease" data-index="${index}">-</button>
              <span class="cart__quantity-value" data-index="${index}">${product.quantity}</span>
              <button class="cart__btn cart__btn--increase" data-index="${index}">+</button>
            </div>
          </div>
          <button class="cart__remove" data-index="${index}">
            Remove
          </button>
        </div>
      `;

      vars.cartProductsList.innerHTML += itemHTML;
    });

    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    attachEventListeners();
  }

  function attachEventListeners() {
    document.querySelectorAll(".cart__remove").forEach((button) => {
      button.addEventListener("click", function () {
        const index = this.dataset.index;
        cart.splice(index, 1);
        saveAndUpdate();
      });
    });

    document.querySelectorAll(".cart__btn--increase").forEach((button) => {
      button.addEventListener("click", function () {
        const index = this.dataset.index;
        cart[index].quantity += 1;
        saveAndUpdate();
      });
    });

    document.querySelectorAll(".cart__btn--decrease").forEach((button) => {
      button.addEventListener("click", function () {
        const index = this.dataset.index;
        if (cart[index].quantity > 1) {
          cart[index].quantity -= 1;
        } else {
          cart.splice(index, 1);
        }
        saveAndUpdate();
      });
    });
  }

  function saveAndUpdate() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }

  updateCartDisplay();
});

const addEventsToCartCheckout = () => {
  const cartCheck = document.querySelector(".cart__checkout a")
  if (!cartCheck) return

  cartCheck.addEventListener("click", function () {
    localStorage.removeItem("cart");
  });
}

addEventsToCartCheckout()

