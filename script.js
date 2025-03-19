document.getElementsByClassName("button1")[0].addEventListener("click", function() {
    alert("Why did you click The Button\u2122? .-.");
});

document.getElementsByClassName("button2")[0].addEventListener("click", function() {
    alert("You clicked The Second Button\u2122.");
});

document.querySelector(".button3").addEventListener("click", function() {
    const button = document.querySelector(".button3");
    button.style.transition = "transform 5s ease";
    button.style.transform = "scale(50.0)"; // Vergrößert den Button

    setTimeout(() => {
        button.style.transform = "scale(1)"; // Verkleinert den Button wieder
    }, 5000);
});


/* Übersetzungen */

const translations = {
    "de": {
        "welcome": "Willkommen auf meiner Webseite!",
        "info": "Diese Seite sieht auf dem Desktop am besten aus.",
        "clock": "Lade Uhr..."
    },
    "en": {
        "welcome": "Welcome to my website!",
        "info": "This site looks best on desktop.",
        "clock": "Loading clock..."
    },
    "fr": {
        "welcome": "Bienvenue sur mon site web!",
        "info": "Ce site est optimisé pour le bureau.",
        "clock": "Horloge de chargement..."
    }
};

document.getElementById("languageSwitcher").addEventListener("change", function() {
    let selectedLang = this.value;
    document.querySelectorAll("[data-lang]").forEach(element => {
        let key = element.getAttribute("data-lang");
        element.textContent = translations[selectedLang][key];
    });
});

/* Uhr */
function updateClock() {
    // Erstelle ein neues Date-Objekt, um die aktuelle Zeit zu holen
    const now = new Date();

    // Extrahiere die Stunden, Minuten und Sekunden
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Stelle sicher, dass Minuten und Sekunden immer zweiziffrig sind (z. B. 09 statt 9)
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Baue den Uhrzeitstring zusammen
    const timeString = hours + ':' + minutes + ':' + seconds;

    // Finde das HTML-Element und setze den Text auf die aktuelle Uhrzeit
    document.getElementById('clock').textContent = timeString;
}

// Stelle sicher, dass die Uhr sofort beim Laden der Seite angezeigt wird
updateClock();

// Aktualisiere die Uhr jede Sekunde (1000 Millisekunden)
setInterval(updateClock, 1000);

/* Dark Mode */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  