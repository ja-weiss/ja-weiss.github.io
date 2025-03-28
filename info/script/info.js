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
    fetch('https://ipinfo.io/json?token=YOUR_API_KEY') // API-Key von ipinfo.io einfügen
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

    // Referrer (previous page)
    const referrer = document.referrer || "Kein Referrer";

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
});
