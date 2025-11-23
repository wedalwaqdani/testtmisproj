function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  let box = document.getElementById("cartItems");

  let subtotal = 0;

  cart.forEach((p, i) => {
    subtotal += p.price;

    box.innerHTML += `
      <div class="product-card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price} SAR</p>
        <button onclick="removeItem(${i})">Delete</button>
      </div>
    `;
  });

  let vat = subtotal * 0.15;
  let total = subtotal + vat;

  document.getElementById("sub").innerText = "Subtotal: " + subtotal + " SAR";
  document.getElementById("vat").innerText = "VAT (15%): " + vat.toFixed(2) + " SAR";
  document.getElementById("total").innerText = "Total: " + total.toFixed(2) + " SAR";
}

function removeItem(i) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

loadCart();
