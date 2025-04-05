function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");
  
    // Dummy-Daten – kann jeder sehen, also nix Wichtiges hier speichern!
    if (username === "admin" && password === "1234") {
      window.location.href = "login/access.html";
    } else {
      error.textContent = "Falscher Benutzername oder Passwort!";
    }
  }
  