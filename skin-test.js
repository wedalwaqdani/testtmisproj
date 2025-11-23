function testSkin() {
  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;

  let result = "";

  if (q1 === "dry" && q2 === "dry") result = "Dry Skin – Best product: Glow Mask";
  if (q1 === "oily" || q2 === "oily") result = "Oily Skin – Best product: Cleanser";
  if (q1 === "mixed") result = "Combination Skin – Best product: Toner";
  if (q1 === "normal" && q2 === "normal") result = "Normal Skin – Best product: Vitamin C Serum";

  document.getElementById("result").innerHTML =
    `<h3>${result}</h3>`;
}
