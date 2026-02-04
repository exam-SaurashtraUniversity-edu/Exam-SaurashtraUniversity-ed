/* LOGIN FUNCTION */
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "karitik47@gmail.com" && password === "ritikkll") {
    window.location.href = "profile.html";
  } else {
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

/* FATHER PHOTO → DOWNLOAD PDF */
function checkDownload(e) {
  let x = e.clientX;
  let y = e.clientY;

  // Bottom-center clickable area
  // Adjust these numbers if needed
  if (x > 80 && x < 280 && y > 700 && y < 780) {
    const link = document.createElement("a");
    link.href = "myfile.pdf";  // PDF file path
    link.download = "myfile.pdf"; // filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
