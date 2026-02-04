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

/* FATHER PHOTO → DOWNLOAD PDF WHEN CLICKING BOTTOM-CENTER AREA */
function checkDownload(e) {
    // Get click position as percentage of viewport
    let xPerc = e.clientX / window.innerWidth;
    let yPerc = e.clientY / window.innerHeight;

    // Bottom-center clickable area (adjust percentages if needed)
    const leftPerc = 0.35;   // 35% of screen width
    const rightPerc = 0.65;  // 65% of screen width
    const topPerc = 0.8;     // 80% from top of screen
    const bottomPerc = 0.9;  // 90% from top of screen

    if (xPerc >= leftPerc && xPerc <= rightPerc && yPerc >= topPerc && yPerc <= bottomPerc) {
        // Trigger PDF download
        const link = document.createElement("a");
        link.href = "myfile.pdf";       // path to your PDF file
        link.download = "myfile.pdf";   // filename for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
