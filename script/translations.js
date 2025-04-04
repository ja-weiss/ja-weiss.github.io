/* Übersetzungen */

const translations = {
    "de": {
        "welcome": "Willkommen auf meiner Webseite!",
        "info": "Diese Seite wird in der mobilen Ansicht vermutlich nicht wie vorgesehen dargestellt.",
        "darkmode": "Aktiviere Dark Mode für bessere Lesbarkeit.",
        "clock": "Lade Uhr..."
    },
    "en": {
        "welcome": "Welcome to my website!",
        "info": "Optimized for desktop, this site may not render as intended on mobile.",
        "darkmode": "Enable dark mode for better readability.",
        "clock": "Loading clock..."
    },
    "fr": {
        "welcome": "Bienvenue sur mon site web!",
        "info": "Ce site est optimisé pour le bureau.",
        "darkmode": "Activez le mode sombre pour une meilleure lisibilité.",
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