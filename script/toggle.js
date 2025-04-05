/* Dark Mode */
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const darkModeToggle = document.getElementById("toggleDarkMode");

    // Zustand im LocalStorage speichern
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.checked = true;
        
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeToggle.checked = false;
        
    }
}
document.addEventListener("DOMContentLoaded", function () {
  let darkContent = [
    ...document.querySelectorAll(".main1, .main2"),
    document.getElementById("videoBackground"),
    document.getElementById("languageSwitcher"),
    document.getElementById("reportBug"),
  ];
  const darkModeToggle = document.getElementById("toggleDarkMode");

  darkContent = darkContent.filter(element => element !== null);
  darkContent.forEach(element => element.style.transition = "all 0s"); // Deaktiviere Animation beim Laden der Seite

  if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
      darkModeToggle.checked = true;
  } 
  setTimeout(() => {
    darkContent.forEach(element => element.style.transition = ""); // Aktiviere Animation nach Laden der Seite wieder
}, 10);
});

/* Toggle Video Background */
function toggleVideoBG() {
  const videoBackground = document.getElementById("videoBackground");
  const toggleSwitch = document.getElementById("toggleVideoBG");

  if (toggleSwitch.checked) {
      videoBackground.play();  // Startet das Video
      localStorage.setItem("videoBackground", "enabled");
  } else {
      videoBackground.pause();  // Pausiert das Video
      localStorage.setItem("videoBackground", "disabled");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const videoBackground = document.getElementById("videoBackground");
  const toggleSwitch = document.getElementById("toggleVideoBG");

  // Überprüfe den gespeicherten Zustand im localStorage
  if (localStorage.getItem("videoBackground") === "disabled") {
      videoBackground.pause();  // Pausiere das Video
      toggleSwitch.checked = false;  // Setze den Schalter auf "off"
  } else {
      videoBackground.play();  // Stelle sicher, dass das Video abgespielt wird
      toggleSwitch.checked = true;  // Setze den Schalter auf "on"
  }
});