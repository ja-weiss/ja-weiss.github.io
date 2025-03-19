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