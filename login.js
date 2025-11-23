function login() {
  let e = document.getElementById("email").value;
  let p = document.getElementById("pass").value;

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let user = users.find(u => u.email === e && u.pass === p);

  if (!user) {
    alert("Wrong email or password");
    return;
  }

  localStorage.setItem("loggedUser", e);
  window.location.href = "index.html";
}
