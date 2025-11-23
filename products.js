const products = [
  {
    id: 1,
    name: "Glow Cleanser",
    price: 79,
    img: "cleanser.jpg",
    desc: "Deep gentle cleanser suitable for all skin types."
  },
  {
    id: 2,
    name: "Vitamin C Serum",
    price: 120,
    img: "serum.jpg",
    desc: "Brightens skin tone and fades dark spots."
  },
  {
    id: 3,
    name: "Hydrating Toner",
    price: 65,
    img: "toner.jpg",
    desc: "Hydrates skin and balances pH levels."
  },
  {
    id: 4,
    name: "BioGlow Mask",
    price: 95,
    img: "mask.jpg",
    desc: "Deep moisture mask for healthy glowing skin."
  }
];

function loadProducts() {
  const container = document.getElementById("allProducts");

  products.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price} SAR</p>
        <button onclick="viewProduct(${p.id})">View Details</button>
      </div>
    `;
  });
}

loadProducts();

function viewProduct(id) {
  localStorage.setItem("selectedProduct", id);
  window.location.href = "product-details.html";
}
