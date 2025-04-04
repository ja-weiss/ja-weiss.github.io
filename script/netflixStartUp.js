/* Open Netflix Button */
function startNetflix() {
    let overlay = document.getElementById("netflixStartUp");
    let video = document.getElementById("netflixIntro");
    let wrapper = document.querySelector(".defaultPage-wrapper1"); // Der gesamte Inhalt
    let netflix = document.getElementById("netflix");
    let button = document.getElementById("openNetflix");

    // Lädt die neue Seite bereits im Hintergrund
    let iframe = document.createElement("iframe");
    iframe.src = "netflix.html";  // Lade die Seite im Hintergrund
    iframe.style.display = "none";  // Unsichtbar, nur zum Laden
    document.body.appendChild(iframe);  // Füge das iframe in den DOM ein

    setTimeout(function() {
        // Netflix-Overlay aktivieren
        button.style.zIndex= "5";
        overlay.style.visibility = "visible";
        overlay.style.opacity = "1";

        // Video starten
        video.play();

        // Nach dem Video den neuen Inhalt zeigen
        video.onended = function() {
            window.location.href = "netflix.html";
            setTimeout(() => {
                overlay.style.opacity = "0"; // Overlay ausblenden
                overlay.style.visibility = "hidden"; // Overlay unsichtbar machen
            }, 1000);

    } }, 100);
    
    };

/* Netflix Button click effect */
document.querySelector("#openNetflix").addEventListener("click", function() {
    const button = document.querySelector("#openNetflix");

    // Klick-Effekt (Button schrumpfen und dann wachsen)
    button.classList.add("clicked");

    // Rücksetzen der Animation, um erneut ausgelöst zu werden
    setTimeout(() => {
        button.classList.remove("clicked");
    }, 1200); // Dauer der gesamten Animation (inkl. Skalierung und Rücksetzung)
});