document.addEventListener("DOMContentLoaded", function () {
  const buyButton = document.querySelector(".buy-button");
  if (buyButton) {
    buyButton.addEventListener("click", function () {
      const product = {
        id: document.querySelector(".product__code")?.textContent.replace("Product code: ", "") || "",
        name: document.querySelector(".card-info__title")?.textContent || "Без названия",
        price: document.querySelector(".info-price__current")?.textContent || "0.00",
        description: document.querySelector(".card-info__descr")?.textContent || "Описание отсутствует",
        picture: document.querySelector(".card-slider__main img")?.src || "placeholder.jpg",
        quantity: 1
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingProduct = cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      window.location.href = "cart.html";
    });
  }
});
