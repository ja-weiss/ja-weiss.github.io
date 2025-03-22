/* Button 1 */
document.getElementsByClassName("button1")[0].addEventListener("click", function() {
    alert("How did you do that??");
});

document.querySelector(".button2").addEventListener("click", function() {
    document.getElementById("alertMessage").innerHTML = 
        "- weather<br>- number generator<br>- minigame<br><br>" +
        "<s>- particles<br>- spotify embed<br>- language switcher<br>- dark mode<br>- clock<br>- random buttons<br>- video background</s>";
    document.getElementById("customAlert").style.display = "block";
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
