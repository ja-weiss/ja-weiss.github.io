document.addEventListener('DOMContentLoaded', function() {
    // Browser Information
    const browser = navigator.userAgent;
    const os = navigator.platform;
    const language = navigator.language;
    const resolution = `${window.screen.width}x${window.screen.height}`;

    // Geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Call to external API to get country and city (example)
            fetch(`https://geocode.xyz/${lat},${lon}?json=1`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('country').textContent = data.country;
                    document.getElementById('city').textContent = data.city;
                });
        });
    }

    // Referrer (previous page)
    const referrer = document.referrer || "Kein Referrer";

    // Display Information
    document.getElementById('browser').textContent = browser;
    document.getElementById('os').textContent = os;
    document.getElementById('language').textContent = language;
    document.getElementById('resolution').textContent = resolution;
    document.getElementById('ip').textContent = "IP-Adresse wird hier angezeigt, falls verfügbar.";
    document.getElementById('referrer').textContent = referrer;

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
