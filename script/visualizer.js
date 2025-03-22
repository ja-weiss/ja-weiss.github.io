const audio = document.getElementById("audio");
const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");
const toggleButton = document.getElementById("toggleAudio");

let audioCtx, analyser, source;
let dataArray, bufferLength;

// Werte für die Steuerung
let barWidthFactor = 2.5; // Balkenbreite
let barHeightFactor = 1;  // Balkenhöhe
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

    let barWidth = (canvas.width / bufferLength) * barWidthFactor;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / barHeightFactor;

        // Sanfte Übergänge für die Animation
        barHeight = (barHeight + previousDataArray[i]) / 2;

        // Dynamische Farbänderung basierend auf dem Farbwert
        let r = colorValue;
        let g = barHeight + 100;
        let b = 255 - barHeight;

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        // Speichern der aktuellen Frequenz für den nächsten Frame
        previousDataArray[i] = dataArray[i];

        x += barWidth + 1;
    }
}

// Event-Listener für die Steuerungen
toggleButton.addEventListener("click", setupAudioContext);

// Steuerung für die Balkenbreite
const barWidthRange = document.getElementById("barWidthRange");
barWidthRange.addEventListener("input", (event) => {
    barWidthFactor = event.target.value;
});

// Steuerung für die Balkenhöhe
const barHeightRange = document.getElementById("barHeightRange");
barHeightRange.addEventListener("input", (event) => {
    barHeightFactor = event.target.value;
});

// Steuerung für den Farbwert
const colorRange = document.getElementById("colorRange");
colorRange.addEventListener("input", (event) => {
    colorValue = event.target.value;
});
