const products = [
  {id:1, name:"Glow Cleanser", price:79, img:"cleanser.jpg", desc:"Deep cleanser for glowing skin."},
  {id:2, name:"Vitamin C Serum", price:120, img:"serum.jpg", desc:"Brightens and evens skin tone."},
  {id:3, name:"Hydrating Toner", price:65, img:"toner.jpg", desc:"Restores hydration and balances pH."},
  {id:4, name:"BioGlow Mask", price:95, img:"mask.jpg", desc:"Moisturizing and glow boosting mask."}
];

const id = localStorage.getItem("selectedProduct");
const p = products.find(x => x.id == id);

document.getElementById("pName").innerText = p.name;
document.getElementById("pImg").src = p.img;
document.getElementById("pPrice").innerText = p.price + " SAR";
document.getElementById("pDesc").innerText = p.desc;

function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(p);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added!");
}
