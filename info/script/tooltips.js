document.addEventListener('DOMContentLoaded', function () {
    const langSelect = document.getElementById('lang-select');
    const textElements = document.querySelectorAll('[data-translate-id]');
    const tooltipElements = document.querySelectorAll('.info-btn');
  
    // Detektiere die Browsersprache (z.B. "de", "en-US" etc.)
    let browserLang = navigator.language || navigator.userLanguage || 'en';
    // Wenn die Sprache mit "de" beginnt, nutze Deutsch, ansonsten Englisch
    let currentLanguage = browserLang.toLowerCase().startsWith('de') ? 'de' : 'en';
  
    // Setze das Dropdown auf die erkannte Sprache
    langSelect.value = currentLanguage;
  
    // Übersetzungen laden
    loadTranslations(currentLanguage);
  
    // Sprachumschaltung
    langSelect.addEventListener('change', function () {
      currentLanguage = langSelect.value;
      loadTranslations(currentLanguage);
    });
  
    // Funktion, um Übersetzungen zu laden
    function loadTranslations(language) {
      // Passe den Pfad an, falls nötig (hier: info/translations/...)
      fetch('info/translations/' + language + '.json')
        .then(response => response.json())
        .then(data => {
          // Übersetze alle statischen Texte
          textElements.forEach(element => {
            const translateId = element.getAttribute('data-translate-id');
            if (data[translateId]) {
              element.innerHTML = data[translateId];
            }
          });
          // Übersetze die Tooltips (mit Präfix "tooltip-")
          tooltipElements.forEach(element => {
            const tooltipId = element.getAttribute('data-tooltip-id');
            if (data["tooltip-" + tooltipId]) {
              element.querySelector('.tooltip').innerHTML = data["tooltip-" + tooltipId];
            }
          });
        })
        .catch(error => console.error('Fehler beim Laden der Übersetzungen:', error));
    }
  });  