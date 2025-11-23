let order = JSON.parse(localStorage.getItem("orderInfo"));
let box = document.getElementById("orderBox");

box.innerHTML = `
  <p><b>Name:</b> ${order.name}</p>
  <p><b>Phone:</b> ${order.phone}</p>
  <p><b>Address:</b> ${order.address}</p>
  <p><b>Payment:</b> ${order.payment}</p>
  <p><b>Subtotal:</b> ${order.subtotal} SAR</p>
  <p><b>VAT:</b> ${order.vat.toFixed(2)} SAR</p>
  <p><b>Total:</b> ${order.total.toFixed(2)} SAR</p>
`;
