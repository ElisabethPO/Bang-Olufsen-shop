document.addEventListener("DOMContentLoaded", function() {
  function showSection(section) {
    const sections = document.querySelectorAll('.admin__section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
  }

  async function loadProducts() {
    const response = await fetch('/products');
    const products = await response.json();
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
      productList.innerHTML += `
        <tr>
          <td>${product._id}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td><button onclick="deleteProduct('${product._id}')">Delete</button></td>
        </tr>
      `;
    });
  }

  async function loadOrders() {
    const response = await fetch('/orders');
    const orders = await response.json();
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';

    orders.forEach(order => {
      orderList.innerHTML += `
        <tr>
          <td>${order._id}</td>
          <td>${order.user.name}</td>
          <td>${order.totalPrice}</td>
          <td>${order.status}</td>
        </tr>
      `;
    });
  }

  async function loadUsers() {
    const response = await fetch('/users');
    const users = await response.json();
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
      userList.innerHTML += `
        <tr>
          <td>${user._id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
        </tr>
      `;
    });
  }

  async function deleteProduct(productId) {
    await fetch(`/products/${productId}`, { method: 'DELETE' });
    loadProducts();
  }
});
