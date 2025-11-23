const featuredProducts = [
  {name: "Glow Cleanser", price: 79, img: "cleanser.jpg"},
  {name: "Vitamin C Serum", price: 120, img: "serum.jpg"},
  {name: "Hydrating Toner", price: 65, img: "toner.jpg"},
  {name: "BioGlow Mask", price: 95, img: "mask.jpg"}
];

function loadFeatured() {
  const container = document.getElementById("featuredProducts");

  featuredProducts.forEach((p, i) => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price} SAR</p>
        <button onclick="addToCart(${i})">Add to Cart</button>
      </div>
    `;
  });
}

loadFeatured();

function addToCart(i) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(featuredProducts[i]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
