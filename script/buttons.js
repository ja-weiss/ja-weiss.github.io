/* Button 1 */
document.getElementsByClassName("button1")[0].addEventListener("click", function() {
    alert("How did you do that??");
});

document.querySelector(".button2").addEventListener("click", function() {
    document.getElementById("alertMessage").innerHTML = 
        "- weather<br>- number generator<br>- minigame<br><br>" +
        "<s>- particles<br>- spotify embed<br>- language switcher<br>- dark mode<br>- clock<br>- random buttons<br>- video background</s>";
    document.getElementById("customAlert").style.display = "flex";
});
function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
}


/* Button 3 */
document.querySelector(".button3").addEventListener("click", function() {
    const button = document.querySelector(".button3");
    button.style.transition = "transform 2s ease-in-out"; // Animation für den Button
    button.style.transform = "scale(50.0)"; // Vergrößert den Button

    setTimeout(() => {
        button.style.transform = "scale(1)"; // Verkleinert den Button wieder
    }, 2000);
});

document.querySelectorAll(".button4").forEach((button) => {
    button.addEventListener("mousemove", (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        button.style.setProperty("--glow-x", `${x}px`);
        button.style.setProperty("--glow-y", `${y}px`);
    });
});
