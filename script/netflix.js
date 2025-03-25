/* Netflix Button */
document.querySelector("#openNetflix").addEventListener("click", function() {
    const button = document.querySelector("#openNetflix");

    // Klick-Effekt (kurzes Schrumpfen)
    button.style.transition = "transform 0.1s ease-in-out";
    button.style.transform = "scale(0.9)";

    setTimeout(() => {
        // Vergrößern nach dem Klick-Effekt
        button.style.transition = "transform 0.1s ease-in-out"; 
        button.style.transform = "scale(1.0)";

        setTimeout(() => {
            button.style.transition = "transform 0.8s ease-out"; 
            button.style.transform = "scale(2.0)";

            setTimeout(() => {
                button.style.transform = "scale(1)";
            
            }, 800);
        }, 100);
    }, 100); // Kurzer Klick-Effekt für 100ms
});


function startNetflix() {
    let overlay = document.getElementById("overlay");
    let video = document.getElementById("intro-video");
    let wrapper = document.querySelector(".wrapper"); // Der gesamte Inhalt
    let newContent = document.getElementById("new-content");
    let videoBackground = document.getElementById("video-background");

    // Netflix-Overlay aktivieren
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";

    // Video starten
    video.play();

    // Nach dem Video den neuen Inhalt zeigen
    video.onended = function() {
        // Wrapper (alte Inhalte) verstecken
        wrapper.style.display = "none";
        overlay.style.display = "none"; // Video ausblenden
        newContent.style.display = "flex"; // Neuen Inhalt anzeigen
    };
}
