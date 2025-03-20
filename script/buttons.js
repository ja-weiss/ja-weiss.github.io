/* Button 1 */
document.getElementsByClassName("button1")[0].addEventListener("click", function() {
    alert("Why did you click The Button\u2122? .-.");
});

/* Button 2 */
document.getElementsByClassName("button2")[0].addEventListener("click", function() {
    alert("You clicked The Second Button\u2122.");
});

/* Button 3 */
document.querySelector(".button3").addEventListener("click", function() {
    const button = document.querySelector(".button3");
    button.style.transition = "transform 2s ease-in-out"; // Animation für den Button
    button.style.transform = "scale(50.0)"; // Vergrößert den Button

    setTimeout(() => {
        button.style.transform = "scale(1)"; // Verkleinert den Button wieder
    }, 2000);
});