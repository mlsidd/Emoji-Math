//Start wins, losses, and player number at 0
var wins = 0;
var winEl = document.getElementById("winScore");

var losses = 1;
var lossEl = document.getElementById("lossScore");

var userCount = 0;
var playerNumberEl = document.getElementById("playerNumber");

//Generate random target number between 19 and 120 is generated
var randomNumber, targetNum, emojiRandomNum1, emojiRandomNum2, emojiRandomNum3, emojiRandomNum4;

function generateRandomNumbers() {
randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
targetNum = document.getElementById("targetNumber");
targetNum.textContent = randomNumber;

//AND each emoji is assigned a random value between 1 and 12

emojiRandomNum1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1
emojiRandomNum2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
emojiRandomNum3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
emojiRandomNum4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

//Add click event so that above 2 functions are called when player clicks start
var startBut = document.getElementById("startButton");
startBut.addEventListener('click', generateRandomNumbers, false);

//when player clicks on an emoji, the number gets added to the "your number" count
function add1ToCount() {
    userCount =+ emojiRandomNum1;
    playerNumberEl = document.getElementById("playerNumber");
    playerNumberEl.innerHTML = userCount;
}

function add2ToCount() {
    userCount =+ emojiRandomNum2;
    playerNumberEl = document.getElementById("playerNumber");
    playerNumberEl.innerHTML = userCount;
}

function add3ToCount() {
    userCount =+ emojiRandomNum3;
    playerNumberEl = document.getElementById("playerNumber");
    playerNumberEl.innerHTML = userCount;
}

function add4ToCount() {
    userCount =+ emojiRandomNum4;
    playerNumberEl = document.getElementById("playerNumber");
    playerNumberEl.innerHTML = userCount;
}

//add click event so that above function is called when player clicks on an emoji
var emoji1 = document.getElementById("imageOne");
var emoji2 = document.getElementById("imageTwo");
var emoji3 = document.getElementById("imageThree");
var emoji4 = document.getElementById("imageFour");

emoji1.addEventListener('click', add1ToCount, false);
emoji2.addEventListener('click', add2ToCount, false);
emoji3.addEventListener('click', add3ToCount, false);
emoji4.addEventListener('click', add4ToCount, false);

//Game ends when one of 2 things occur...

//when player number equals the target number, the game ends and a win is added to total wins
if (userCount == randomNumber) {
    wins = wins + 1;
    winEl = document.getElementById("winScore");
    winEl.textContent = wins;
} else

//when player number goes over the target number, the game ends and a loss is added to total losses
if(userCount > randomNumber) {
    losses = losses + 1;
    lossEl = document.getElementById("lossScore");
    lossEl.innerHTML = losses;
}

//in both events, the computer resets and a new random number is picked