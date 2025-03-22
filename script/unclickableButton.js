document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button1");
    const placeholder = document.getElementById("button1placeholder");

    button.addEventListener("mouseover", function () {
        
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.position = "absolute";
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
        button1placeholder.style.display = "block";
    });
});