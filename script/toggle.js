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

