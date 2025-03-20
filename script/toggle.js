/* Dark Mode */
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Zustand im LocalStorage speichern
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
  }
});
