document.addEventListener('DOMContentLoaded', function() {
    // Browser Information
    const browser = navigator.userAgent;
    const os = navigator.platform;
    const language = navigator.language;
    const resolution = `${window.screen.width}x${window.screen.height}`;

    // Zeige Browser-Informationen an
    document.getElementById('user-agent').textContent = browser;
    document.getElementById('os').textContent = os;
    document.getElementById('language').textContent = language;
    document.getElementById('resolution').textContent = resolution;

    function detectBrowser(userAgent) {
        if (userAgent.includes("Firefox/")) return "Firefox";
        if (userAgent.includes("Edg/")) return "Microsoft Edge";
        if (userAgent.includes("OPR/") || userAgent.includes("Opera")) return "Opera";
        if (userAgent.includes("Chrome/")) return "Google Chrome";
        if (userAgent.includes("Safari/")) return "Safari";
        return "Unbekannt";
    }
    
    function detectOS(userAgent) {
        if (userAgent.includes("Windows NT 10.0")) return "Windows 10";
        if (userAgent.includes("Windows NT 11.0")) return "Windows 11";
        if (userAgent.includes("Mac OS X")) return "macOS";
        if (userAgent.includes("Android")) return "Android";
        if (userAgent.includes("iPhone")) return "iOS";
        if (userAgent.includes("Linux")) return "Linux";
        return "Unbekannt";
    }
    
    // In deiner DOMContentLoaded-Funktion:
    const browserDetected = detectBrowser(browser);
    const osDetected = detectOS(browser);
    document.getElementById('browser').textContent = browserDetected;
    document.getElementById('os-detected').textContent = osDetected;
    
    // Geolocation: Browser-based
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
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
    const referrer = document.referrer || "Die Website wurde direkt aufgerufen oder der Referrer wurde blockiert.";
    document.getElementById('referrer').textContent = referrer;

    // Anzeige der aktuellen URL
    document.getElementById('page-visited').textContent = window.location.href;

    // Track Time on Page
    let timeSpent = 0;
    setInterval(function() {
        timeSpent++;
        document.getElementById('time-spent').textContent = `${timeSpent} Sekunden`;
    }, 1000);

    // Track Last Click
    document.body.addEventListener('click', function(event) {
        const lastClick = `${event.clientX}, ${event.clientY}`;
        document.getElementById('last-click').textContent = lastClick;
    });


    // Verbindungstyp (Wi-Fi, Mobilnetz)
    if (navigator.connection) {
        const connectionType = navigator.connection.effectiveType;
    
        // Überprüfe auf '5g', 'wifi' und andere Netzwerktypen
        if (connectionType === 'wifi') {
            document.getElementById('connection-type').textContent = "WLAN";
        } else if (connectionType === '5g') {
            document.getElementById('connection-type').textContent = "5G";
        } else if (connectionType === '4g') {
            document.getElementById('connection-type').textContent = "4G";
        } else if (connectionType === '3g') {
            document.getElementById('connection-type').textContent = "3G";
        } else if (connectionType === '2g') {
            document.getElementById('connection-type').textContent = "2G";
        } else if (connectionType === 'slow-2g') {
            document.getElementById('connection-type').textContent = "Langsames 2G";
        } else {
            document.getElementById('connection-type').textContent = "Unbekannter Netzwerktyp";
        }
    } else {
        document.getElementById('connection-type').textContent = "Verbindungsinformationen nicht verfügbar";
    }
    
    
    // Maximale Anzahl von Touchpunkten
    document.getElementById('max-touchpoints').textContent = navigator.maxTouchPoints || "Nicht verfügbar";

    // Gerätespeicher (z. B. 4 GB)
    document.getElementById('device-memory').textContent = navigator.deviceMemory + " GB" || "Nicht verfügbar";

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