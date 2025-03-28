document.addEventListener('DOMContentLoaded', function() {
    // Browser Information
    const browser = navigator.userAgent;
    const os = navigator.platform;
    const language = navigator.language;
    const resolution = `${window.screen.width}x${window.screen.height}`;

    // Geolocation: Browser-based
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Zeige Koordinaten an
            document.getElementById('coordinates').textContent = `${lat}, ${lon}`;
        }, function() {
            document.getElementById('coordinates').textContent = 'Geolocation konnte nicht ermittelt werden';
        });
    } else {
        document.getElementById('coordinates').textContent = 'Geolocation nicht unterstützt';
    }

    // IP-Adresse und Geolokalisierung via API (ipinfo.io)
    fetch('https://ipinfo.io/json?token=5966cf8eb55b01') // Ersetze 'YOUR_API_KEY' mit deinem echten API-Key von ipinfo.io
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip').textContent = data.ip;
            document.getElementById('country').textContent = data.country;
            document.getElementById('region').textContent = data.region;
            document.getElementById('city').textContent = data.city;
        })
        .catch(error => {
            document.getElementById('ip').textContent = 'IP-Adresse konnte nicht ermittelt werden';
            document.getElementById('country').textContent = 'Land konnte nicht ermittelt werden';
            document.getElementById('region').textContent = 'Region konnte nicht ermittelt werden';
            document.getElementById('city').textContent = 'Stadt konnte nicht ermittelt werden';
        });

    // Referrer - Verwendet document.referrer und prüft die Bedingungen
    const referrer = document.referrer || "Kein Referrer verfügbar";

    // Display Information
    document.getElementById('browser').textContent = browser;
    document.getElementById('os').textContent = os;
    document.getElementById('language').textContent = language;
    document.getElementById('resolution').textContent = resolution;

    // Track Time on Page
    let timeSpent = 0;
    setInterval(function() {
        timeSpent++;
        document.getElementById('time-spent').textContent = `${timeSpent} Sekunden`;
    }, 1000);

    // Track Page Visit
    document.getElementById('page-visited').textContent = window.location.href;

    // Track Last Click
    document.body.addEventListener('click', function(event) {
        const lastClick = `${event.clientX}, ${event.clientY}`;
        document.getElementById('last-click').textContent = lastClick;
    });

    // Anzeige des Referrers
    document.getElementById('referrer').textContent = referrer;

    // Setze die Ursprungsseite im localStorage
    if (!localStorage.getItem('original_referrer')) {
        localStorage.setItem('original_referrer', document.referrer);
    }

    // Anzeige der originalen Referrer-Seite
    document.getElementById('original-referrer').textContent = localStorage.getItem('original_referrer') || 'Kein Referrer verfügbar';

    // Verbindungstyp (Wi-Fi, Mobilnetz)
    if (navigator.connection) {
        document.getElementById('connection-type').textContent = navigator.connection.effectiveType || "Nicht verfügbar";
    } else {
        document.getElementById('connection-type').textContent = "Nicht verfügbar";
    }

    // Maximale Anzahl von Touchpunkten
    document.getElementById('max-touchpoints').textContent = navigator.maxTouchPoints || "Nicht verfügbar";

    // Gerätespeicher (z. B. 4 GB)
    document.getElementById('device-memory').textContent = navigator.deviceMemory || "Nicht verfügbar";

    // CPU-Kerne
    document.getElementById('cpu-cores').textContent = navigator.hardwareConcurrency || "Nicht verfügbar";

    // Speicherstatus
    if (navigator.storage && navigator.storage.estimate) {
        navigator.storage.estimate().then(function(estimate) {
            document.getElementById('storage-status').textContent = `Verfügbar: ${estimate.quota - estimate.usage} Bytes`;
        }).catch(() => {
            document.getElementById('storage-status').textContent = "Speicherstatus konnte nicht ermittelt werden";
        });
    } else {
        document.getElementById('storage-status').textContent = "Nicht verfügbar";
    }

    // Verwendete Plugins
    let pluginsList = "";
    if (navigator.plugins) {
        for (let i = 0; i < navigator.plugins.length; i++) {
            pluginsList += navigator.plugins[i].name + " ";
        }
        document.getElementById('plugins').textContent = pluginsList || "Keine Plugins gefunden";
    } else {
        document.getElementById('plugins').textContent = "Nicht verfügbar";
    }

    // Bildschirmorientierung
    if (window.screen.orientation) {
        document.getElementById('screen-orientation').textContent = window.screen.orientation.type;
    } else {
        document.getElementById('screen-orientation').textContent = "Nicht verfügbar";
    }

    // Batteriestatus
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            document.getElementById('battery-status').textContent = `Level: ${battery.level * 100}% | Ladezustand: ${battery.charging ? "Lädt" : "Nicht ladend"}`;
        }).catch(() => {
            document.getElementById('battery-status').textContent = "Batteriestatus konnte nicht ermittelt werden";
        });
    } else {
        document.getElementById('battery-status').textContent = "Nicht verfügbar";
    }
});
