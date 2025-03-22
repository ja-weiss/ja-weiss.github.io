const audio = document.getElementById("audio");
const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");
const toggleButton = document.getElementById("toggleAudio");

let audioCtx, analyser, source;
let dataArray, bufferLength;

toggleButton.addEventListener("click", setupAudioContext);
// Starte die Audio-Analyse beim ersten Klick
function setupAudioContext() {
    audio.volume = 1.0;
    // Audio umschalten (Play/Pause)
    if (audio.paused) {
        audio.play(); // Audio starten
        toggleButton.textContent = "Pause";
    } else {
        audio.pause(); // Audio stoppen
        toggleButton.textContent = "Play";
    }
    // Initialisiere den AudioContext nur einmal und beim ersten Klick
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        // AudioContext benötigt eine Interaktion, um den Kontext zu starten
        audioCtx.resume().then(() => {
            analyser = audioCtx.createAnalyser();
            source = audioCtx.createMediaElementSource(audio);
            source.connect(analyser);
            analyser.connect(audioCtx.destination);

            analyser.fftSize = 256;
            bufferLength = analyser.frequencyBinCount;
            dataArray = new Uint8Array(bufferLength);

            draw(); // Starte den Visualizer nach der Initialisierung
        });
    }
    
}

// Zeichne den Visualizer auf das Canvas
function draw() {
    requestAnimationFrame(draw); // Rekursiver Aufruf für kontinuierliches Zeichnen
    analyser.getByteFrequencyData(dataArray); // Frequenzdaten aus dem Analyser holen

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas zurücksetzen

    let barWidth = (canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2;
        ctx.fillStyle = `rgb(${barHeight + 100}, 50, 255)`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
    }
}