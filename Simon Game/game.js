var colors = ['red', 'blue', 'green', 'yellow'];
var colorPattern = [];
var userPattern = [];
var newGame = true;
var level = 1;
var gameOv = false;

$(".btn").click(function () {
  if (!gameOv && !newGame) {
    animate($(this).attr("id"));
    userPattern.push($(this).attr("id"));
    playSound($(this).attr("id"));
    console.log(userPattern);
    if (!comparePattern(userPattern)) {
      setTimeout(function () {
        gameOver();
      }, 200);
    } else if (userPattern.length === colorPattern.length) {
      userPattern = [];
      setTimeout(function () {
        nextSequence();
      }, 500);
    }
  }
});

$(document).keydown(function(e) {
  if(newGame) {
    nextSequence();
  }
  newGame = false;
});

function nextSequence() {
  var randNum = Math.floor(Math.random() * 4);
  var randColor = colors[randNum];
  if (!gameOv) {
    colorPattern.push(randColor);
    animate(randColor);
    playSound(randColor);
    $("#level-title").text("Level " + level);
    ++level;
    console.log(colorPattern);
  }
}

function animate(id) {
  $('#' + id).addClass("pressed");
  setTimeout(function () {
    $('#' + id).removeClass("pressed");
  }, 100);
}

function playSound(id) {
  var audio = new Audio("sounds/" + id + ".mp3");
  audio.play();
}

function comparePattern(pattern) {
  var correct = false;
  for (var i = 0; i < pattern.length; ++i) {
    correct = (pattern[i] === colorPattern[i]);
  }
  return correct;
}

function gameOver() {
  gameOv = true;
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("#level-title").text("Game over mate! You got to " + (level - 1) + " !");
  console.log("gameover");
  $(".row").addClass("pressed");
  $(".restart").css("display", "block");
}
