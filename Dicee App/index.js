var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var correctPath1 = 'images/dice' + randomNumber1 + '.png';
var correctPath2 = 'images/dice' + randomNumber2 + '.png';

document.querySelector(".img1").setAttribute("src", correctPath1);
document.querySelector(".img2").setAttribute("src", correctPath2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("div h1").textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("div h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("div h1").textContent = "Draw!";
}
