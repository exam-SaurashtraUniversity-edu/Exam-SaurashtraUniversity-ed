/* LOGIN FUNCTION */
function login() {

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "karitik47@gmail.com" && password === "ritikkll") {
    window.location.href = "profile.html";
  }
  else {
    alert("Wrong email or password");
  }
}

/* PROFILE → MENU */
function goMenu() {
  window.location.href = "menu.html";
}

/* MENU → YOUR PHOTO */
function openMyPhoto() {
  window.location.href = "me.html";
}

/* YOUR PHOTO → FATHER PHOTO */
function openFatherPhoto() {
  window.location.href = "father.html";
}
