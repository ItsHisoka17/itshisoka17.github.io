function sayYes() {
    document.getElementById("response").innerText = "Amazing! I will be seeing you on Friday February 14th \n I can't wait fatty 💕";
document.title = "She said YES!!!!!"
}

document.getElementById("noButton").addEventListener("mouseover", function() {
    const x = Math.random() * window.innerWidth * 0.6;
    const y = Math.random() * window.innerHeight * 0.6;

    this.style.position = "absolute";
    this.style.left = x + "px";
    this.style.top = y + "px";
});