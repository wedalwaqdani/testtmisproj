let cart = JSON.parse(localStorage.getItem("cart") || "[]");

let subtotal = 0;
cart.forEach(p => subtotal += p.price);

let vat = subtotal * 0.15;
let total = subtotal + vat;

document.getElementById("sub").innerText = "Subtotal: " + subtotal + " SAR";
document.getElementById("vat").innerText = "VAT (15%): " + vat.toFixed(2) + " SAR";
document.getElementById("total").innerText = "Total: " + total.toFixed(2) + " SAR";

function placeOrder() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let payment = document.getElementById("payment").value;

  if (name === "" || phone === "" || address === "") {
    alert("Please fill all fields.");
    return;
  }

  localStorage.setItem("orderInfo", JSON.stringify({
    name, phone, address, payment, subtotal, vat, total
  }));

  localStorage.removeItem("cart");

  window.location.href = "order-success.html";
}
function toggleCardForm() {
  let payment = document.getElementById("payment").value;
  let form = document.getElementById("cardForm");

  if (payment === "Visa" || payment === "Credit Card" || payment === "Mada") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}
function toggleCardForm() {
  let payment = document.getElementById("payment").value;
  let form = document.getElementById("cardForm");

  if (payment === "Visa" || payment === "Credit Card" || payment === "Mada") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

