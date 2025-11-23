function signup() {
  let e = document.getElementById("email").value;
  let p = document.getElementById("pass").value;

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push({email: e, pass: p});
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created!");
  window.location.href = "login.html";
}
