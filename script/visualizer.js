/* 
const audio = document.getElementById("audio");
const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");
const toggleButton = document.getElementById("toggleAudio");

let audioCtx, analyser, source;
let dataArray, bufferLength;

// Werte für die Steuerung
let barWidthFactor = 2.5; // Balkenbreite (skalierbar)
let barHeightFactor = 100;  // Balkenhöhe als Prozentwert der Canvas-Höhe
let colorValue = 100;     // Farbwert (für RGB)
let previousDataArray = new Uint8Array(256); // Für Animationseffekt

// Starte die Audio-Analyse beim ersten Klick
function setupAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioCtx.createAnalyser();
        source = audioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);

        analyser.fftSize = 256;
        bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        draw();
    }

    // Audio umschalten (Play/Pause)
    if (audio.paused) {
        audio.play();
        toggleButton.textContent = "Pause";
    } else {
        audio.pause();
        toggleButton.textContent = "Play";
    }
}

// Zeichne den Visualizer auf das Canvas
function draw() {
    requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Berechne die Anzahl der Balken, die wir anzeigen möchten
    const barCount = Math.floor(bufferLength / barWidthFactor);

    // Berechne die Breite eines Balkens
    let barWidth = (canvas.width / barCount);

    let barHeight;
    let x = 0;

    // Berechne den Abstand der Balken basierend auf der Breite
    let barSpacing = Math.max(1, (canvas.width - (barWidth * barCount)) / (barCount - 1));

    for (let i = 0; i < barCount; i++) {
        // Aggregiere die Daten für mehrere benachbarte Balken
        let sum = 0;
        for (let j = 0; j < barWidthFactor; j++) {
            let dataIndex = i * barWidthFactor + j;
            if (dataIndex < bufferLength) {
                sum += dataArray[dataIndex];
            }
        }

        // Berechne die Höhe des Balkens als Mittelwert der aggregierten Frequenzen
        barHeight = (sum / barWidthFactor) / 256 * canvas.height;

        // Skaliere die Balkenhöhe basierend auf dem barHeightFactor (Prozent der Canvas-Höhe)
        barHeight = barHeight * (barHeightFactor / 100);

        // Sanfte Übergänge für die Animation
        barHeight = (barHeight + previousDataArray[i]) / 2;

        // Dynamische Farbänderung basierend auf dem Farbwert
        let r = colorValue;
        let g = barHeight + 100;
        let b = 255 - barHeight;

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        // Speichern der aktuellen Frequenz für den nächsten Frame
        previousDataArray[i] = sum / barWidthFactor;

        // X-Wert für den nächsten Balken
        x += barWidth + barSpacing;
    }
}

// Event-Listener für die Steuerungen
toggleButton.addEventListener("click", setupAudioContext);

// Steuerung für die Balkenbreite
const barWidthRange = document.getElementById("barWidthRange");
barWidthRange.addEventListener("input", (event) => {
    barWidthFactor = event.target.value;
});

// Steuerung für die Balkenhöhe (jetzt in Prozent der Canvas-Höhe)
const barHeightRange = document.getElementById("barHeightRange");
barHeightRange.addEventListener("input", (event) => {
    barHeightFactor = event.target.value;
});

// Steuerung für den Farbwert
const colorRange = document.getElementById("colorRange");
colorRange.addEventListener("input", (event) => {
    colorValue = event.target.value;
});

// Anpassung der Canvas-Auflösung basierend auf der Gerätedichte
function setCanvasSize() {
    const ratio = window.devicePixelRatio || 1;
    const width = canvas.clientWidth * ratio;
    const height = canvas.clientHeight * ratio;

    // Canvas-Größe auf die skalierte Größe setzen
    canvas.width = width;
    canvas.height = height;

    // Setze die Skalierung des Canvas-Kontexts nicht, sondern lass die Standardgröße erhalten
}

// Initialisiere die Canvas-Größe beim Laden
setCanvasSize();

// Rufe diese Funktion bei der Fenstergrößeänderung auf
window.addEventListener('resize', setCanvasSize);
