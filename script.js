function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "A" && password === "s") {
    window.location.href = "profile.html";
  } else {
    alert("Wrong email or password");
  }
}

function goMenu() {
  window.location.href = "menu.html";
}

function openMyPhoto() {
  window.location.href = "me.html";
}

function openFatherPhoto() {
  window.location.href = "father.html";
}

function checkDownload(e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  if (x >= 0.50 && x <= 0.74 && y >= 0.75 && y <= 0.80) {
    const link = document.createElement("a");
    link.href = "myfile.pdf";
    link.download = "myfile.pdf";
    link.click();
  }
}
