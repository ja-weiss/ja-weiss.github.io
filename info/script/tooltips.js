document.addEventListener('DOMContentLoaded', function () {
    const langSelect = document.getElementById('lang-select');
    const tooltipElements = document.querySelectorAll('.info-btn');
    let currentLanguage = 'de'; // Standard-Sprache: Deutsch

    // Lade die entsprechenden Übersetzungen beim Laden der Seite
    loadTranslations(currentLanguage);

    // Event-Listener für Sprachumschaltung
    langSelect.addEventListener('change', function () {
        currentLanguage = langSelect.value;
        loadTranslations(currentLanguage);
    });

    // Funktion, um Übersetzungen zu laden
    function loadTranslations(language) {
        fetch('info/translations/' + language + '.json')  // Sicherstellen, dass der Pfad korrekt ist
            .then(response => response.json())
            .then(data => {
                // Übersetze alle Tooltip-Inhalte
                tooltipElements.forEach(element => {
                    const tooltipId = element.getAttribute('data-tooltip-id');
                    const tooltipText = data.tooltips[tooltipId];
                    if (tooltipText) {
                        const tooltipSpan = element.querySelector('.tooltip');
                        tooltipSpan.textContent = tooltipText;
                    }
                });
            })
            .catch(error => {
                console.error("Fehler beim Laden der Übersetzungen:", error);
            });
    }
});
