document.addEventListener("DOMContentLoaded", function() {
    // Überprüfen, ob der Benutzer eingeloggt ist
    if (localStorage.getItem("isLoggedIn") !== "true") {
      window.location.href = "../login.html"; // Weiterleitung zur Login-Seite, wenn der Benutzer nicht eingeloggt ist
    }

    // Benutzername aus localStorage holen und anzeigen
    const username = localStorage.getItem("username");
    document.getElementById("user-name").textContent = username;  // Den Namen im HTML anzeigen
  });

  document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      window.location.href = "../login.html"; // Weiterleitung zur Login-Seite, wenn der Benutzer nicht eingeloggt ist
    }
  
    // Benutzername und Rolle aus localStorage holen und anzeigen
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");
  
    document.getElementById("user-name").textContent = name;
  
    // Inhalte basierend auf der Benutzerrolle anzeigen
    if (role === "admin") {
      document.getElementById("admin-content").style.display = "block";
    } else if (role === "user") {
      document.getElementById("user-content").style.display = "block";
    }
  });
  
  function logout() {
    // Entferne die Login-Daten aus localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
  
    // Weiterleitung zur Login-Seite
    window.location.href = "login.html";
  }
  
function logout() {
    // Entferne die Login-Daten aus localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
  
    // Weiterleitung zur Login-Seite
    window.location.href = "../login.html";
  }