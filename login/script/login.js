document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Verhindert das Neuladen der Seite
    checkLogin();
  });
});

const users = [
  { username: "administrator", password: "admin", role: "admin", name: "Administrator" },
  { username: "user1", password: "user1pass", role: "user", name: "User 1" },
  { username: "user2", password: "user2pass", role: "user", name: "User 2" }
];

function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Benutzerüberprüfung
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    localStorage.setItem("role", user.role);  // Speichern der Benutzerrolle
    localStorage.setItem("name", user.name);  // Speichern des Benutzernamens
    error.textContent = "";
    window.location.href = "login/access.html";  // Weiterleitung zur "access.html"
  } else {
    error.textContent = "Benutzername oder Passwort ist falsch.";
  }
}
