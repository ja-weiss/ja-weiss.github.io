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
            /* Wrapper (alte Inhalte) verstecken
            wrapper.style.display = "none";
            overlay.style.display = "none"; // Video ausblenden
            netflix.style.display = "flex"; // Neuen Inhalt anzeigen

            // Hier könnte man eine Animation hinzufügen, wenn der neue Inhalt erscheint
            netflix.classList.add("show"); */

            gsap.to("body", {  duration: 0, onComplete: () => {
                window.location.href = "netflix.html";
                }});
            
                overlay.style.visibility = "hidden";

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