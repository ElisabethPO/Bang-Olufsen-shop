const t="https://tech-showcase-store.onrender.com/api";async function e(){try{let e=await fetch(`${t}/products`);if(!e.ok)throw Error(`Error HTTP: ${e.status}`);let c=await e.json();!function(e){let c=document.querySelector(".catalog-cntr");if(!c)return console.error("Error: container .catalog-cntr not found");console.log("RENDER"),c.innerHTML="",e.forEach(t=>{let e=`
      <article class="product">
        ${"new"===t.type?'<span class="product-prop product__prop new">New</span>':""}
        <div class="product__top">
          <img src="${t.picture?`data:image/jpeg;base64,${t.picture}`:"placeholder.jpg"}"
               alt="${t.name}"
               class="product__image">
        </div>
        <h2 class="product__title">
          <a href="product.html?id=${t._id}" class="product-link">
            ${t.name}
          </a>
        </h2>
        <p class="product__code">Product code: ${t._id||"N/A"}</p>
        <p class="product__price">
          <span class="product__price-name">Price:</span>
          <span class="product__price-value">$${t.price||"0.00"}</span>
        </p>
        <button class="product__button buy-btn" data-product-id="${t._id}">Buy</button>
      </article>`;c.insertAdjacentHTML("beforeend",e)}),console.log("RENDER2"),console.log("add to buy button"),document.querySelectorAll(".buy-btn").forEach(e=>{e.addEventListener("click",async function(){let e=this.getAttribute("data-product-id");console.log("Product id",e);try{let c=await fetch(`${t}/products/${e}`),a=await c.json();if(!c.ok)throw Error("Product not found");let o=JSON.parse(localStorage.getItem("cart"))||[],n=o.findIndex(t=>t._id===a._id);n>=0?o[n].quantity+=1:o.push({...a,quantity:1}),localStorage.setItem("cart",JSON.stringify(o)),r()}catch(t){console.error("Error loading product data:",t)}})}),r()}(c)}catch(t){console.error("Error loading product list:",t)}}function r(){let t=(JSON.parse(localStorage.getItem("cart"))||[]).reduce((t,e)=>t+e.quantity,0),e=document.querySelector(".icon__quantity");e&&(e.textContent=t)}document.addEventListener("DOMContentLoaded",e),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".menu__nav .nav__link"),r=document.querySelector(".catalog-cntr");e.forEach(e=>{e.addEventListener("click",async c=>{c.preventDefault();let a=e.dataset.category;try{let e=await fetch(`${t}/products/filter?type=${a}`),c=await e.json();r.innerHTML="",c.forEach(t=>{let e=`
            <article class="product">
              ${"new"===t.type?'<span class="product-prop product__prop new">New</span>':""}
                <div class="product__top">
                  <img src="${t.picture?`data:image/jpeg;base64,${t.picture}`:"placeholder.jpg"}"
                        alt="${t.name}"
                        class="product__image">
                </div>
                <h2 class="product__title">
                  <a href="product.html?id=${t._id}" class="product-link" data-id="${t._id}">
                    ${t.name}
                  </a>
                </h2>
                <p class="product__code">Product code: ${t._id||"N/A"}</p>
                <p class="product__price">
                  <span class="product__price-name">Price:</span>
                  <span class="product__price-value">$${t.price||"0.00"}</span>
                </p>
                <a href="#" class="product__button" data-qa="product-hover">Buy</a>
            </article>`;r.insertAdjacentHTML("beforeend",e)})}catch(t){console.error("Error loading products:",t)}})})}),document.addEventListener("DOMContentLoaded",()=>{try{let e=document.querySelectorAll(".catalog-filter__items .custom-checkbox__input"),r=document.querySelector(".catalog-cntr");if(!r)return void console.error("Element .catalog-cntr not found!");let c=async()=>{let c=(()=>{let t=[];return e.forEach(e=>{if(e.checked){let r=e.closest(".custom-checkbox").dataset.text;t.push(r)}}),t})();try{let e=c.length?`?subCategory=${c.join(",")}`:"",a=await fetch(`${t}/products/filter${e}`),o=await a.json();r.innerHTML="",o.forEach(t=>{let e=`
              <article class="product">
                ${"new"===t.type?'<span class="product-prop product__prop new">New</span>':""}
                  <div class="product__top">
                    <img src="${t.picture?`data:image/jpeg;base64,${t.picture}`:"placeholder.jpg"}"
                          alt="${t.name}"
                          class="product__image">
                  </div>
                  <h2 class="product__title">
                    <a href="product.html?id=${t._id}" class="product-link" data-id="${t._id}">
                      ${t.name}
                    </a>
                  </h2>
                  <p class="product__code">Product code: ${t._id||"N/A"}</p>
                  <p class="product__price">
                    <span class="product__price-name">Price:</span>
                    <span class="product__price-value">$${t.price||"0.00"}</span>
                  </p>
                  <a href="#" class="product__button" data-qa="product-hover">Buy</a>
              </article>`;r.insertAdjacentHTML("beforeend",e)})}catch(t){console.error("Error loading products:",t)}};e.forEach(t=>{t.addEventListener("change",c)}),c()}catch(t){console.log(t)}}),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("color-filter"),r=document.querySelector(".catalog-cntr");if(!e||!r)return void console.error('Element with ID "color-filter" not found');e.addEventListener("change",async c=>{if(c.target.classList.contains("custom-checkbox__input")){let c=Array.from(e.querySelectorAll("input:checked")).map(t=>t.closest("label").dataset.text);try{var a;let e=await fetch(`${t}/products/filter?color=${c.join(",")}`);a=await e.json(),r.innerHTML="",a.forEach(t=>{let e=`
        <article class="product">
          ${"new"===t.type?'<span class="product-prop product__prop new">New</span>':""}
          <div class="product__top">
            <img src="${t.picture?`data:image/jpeg;base64,${t.picture}`:"placeholder.jpg"}"
                 alt="${t.name}"
                 class="product__image">
          </div>
          <h2 class="product__title">
            <a href="product.html?id=${t._id}" class="product-link" data-id="${t._id}">
              ${t.name}
            </a>
          </h2>
          <p class="product__code">Product code: ${t._id||"N/A"}</p>
          <p class="product__price">
            <span class="product__price-name">Price:</span>
            <span class="product__price-value">$${t.price||"0.00"}</span>
          </p>
          <a href="#" class="product__button" data-qa="product-hover">Buy</a>
        </article>`;r.insertAdjacentHTML("beforeend",e)})}catch(t){console.error("Ошибка при фильтрации:",t)}}})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".product__buy-btn").forEach(r=>{r.addEventListener("click",async r=>{let c=r.target.getAttribute("data-product-id");try{if(!(await fetch(`${t}/cart/add`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:c})})).ok)throw Error("Error adding product to cart");e()}catch(t){console.error("Error adding to cart:",t)}})});async function e(){try{let e=await fetch(`${t}/cart`),r=await e.json(),c=document.querySelector(".cart__items");c.innerHTML="",r.forEach(t=>{let e=document.createElement("div");e.classList.add("cart__item"),e.innerHTML=`
          <img src="${t.product.picture||"default.jpg"}" class="cart__image">
          <div class="cart__details">
            <h2 class="cart__name">${t.product.name}</h2>
            <p class="cart__price">$${t.product.price}</p>
            <div class="cart__quantity">
              <button class="cart__btn cart__btn--decrease" data-id="${t.product._id}">-</button>
              <span class="cart__quantity-value">${t.quantity}</span>
              <button class="cart__btn cart__btn--increase" data-id="${t.product._id}">+</button>
            </div>
          </div>
        `,c.appendChild(e)});let a=r.reduce((t,e)=>t+e.product.price*e.quantity,0);document.querySelector(".cart__total-value").textContent=`$${a.toFixed(2)}`}catch(t){console.error("Error updating cart:",t)}}});
//# sourceMappingURL=page2.968e6037.js.map
