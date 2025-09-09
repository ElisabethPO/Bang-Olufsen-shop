document.querySelector(".cart__checkout").addEventListener("click", async () => {
  const cartItems = document.querySelectorAll(".cart__item");
  let order = [];

  cartItems.forEach(item => {
      const name = item.querySelector(".cart__name").textContent;
      const quantity = parseInt(item.querySelector(".cart__quantity-value").textContent);

      order.push({ name, quantity });
  });

  try {
      const response = await fetch("http://localhost:5000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: order })
      });

      if (response.ok) {
          alert("The order has been successfully placed.!");
      } else {
          alert("Error while placing your order.");
      }
  } catch (error) {
      console.error("Request error:", error);
  }
});
