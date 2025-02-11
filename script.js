let doggy = document.getElementById("doggy");
let noButton = document.getElementById("noButton");
let yesButton = document.getElementById("yesButton");
let message = document.getElementById("message");
let response = document.getElementById("response");
let response1 = document.getElementById("response1");

function createHeartAnimation() {
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "<i class=\"fa fa-heart\"style=\"color:#fa7a7a;font-size:15px\"></i>";

  let x = Math.random() * window.innerWidth * 0.8;
  let y = Math.random() * window.innerHeight * 0.5;

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
};

function sayYes() {
    response1.innerText = "Amazing!";
    response.innerText = "I will be seeing you on Friday February 14th \n I can't wait fatty 💕";
document.title = "She said YES!!!!!"
    doggy.src = "https://static.vecteezy.com/system/resources/previews/036/472/480/non_2x/ai-generated-graphics-of-two-cats-in-love-hugging-each-other-and-red-hearts-png.png";
    noButton.style.display = "none";
    yesButton.style.display = "none";
    message.style.display = "none";

    for (let i = 0; i < 150; i++){
        createHeartAnimation();
    }
}

noButton.addEventListener("mouseover", function() {
    doggy.src = "https://cdn2.iconfinder.com/data/icons/cute-pug-dog-emoticon/512/Pug_Emoji_cry-512.png";
    const x = Math.random() * window.innerWidth * 0.6;
    const y = Math.random() * window.innerHeight * 0.6;

    this.style.position = "absolute";
    this.style.left = x + "px";
    this.style.top = y + "px";
});

yesButton.addEventListener("mouseover", function(){
    doggy.src = "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-cute-cartoon-happy-dog-png-file-png-image_10201724.png";
});
