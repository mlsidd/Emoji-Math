//Generate random target number between 19 and 120 is generated
var randomNumber, targetNum; 

var targetNumber = function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    targetNum = document.getElementById("targetNumber");
    targetNum.textContent = randomNumber;
};

//Add click event so that above function is called when player clicks start
var startBut = document.getElementById("startButton");
startBut.addEventListener('click', targetNumber, false);


//CREATE PICTURE 1 RANDOM VALUE (between 1 and 12)
var emojiRandomNum1, emoji1Value;

var emoji1Num = function assignEmoji1Number() {
    emojiRandomNum1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    emoji1Value = document.getElementById("imageOne");
    emoji1Value.setAttribute('value', emojiRandomNum1);
}

var startBut = document.getElementById("startButton");
startBut.addEventListener('click', emoji1Num, false);

//CREATE PICTURE 2 RANDOM VALUE
var emojiRandomNum2, emoji2Value;

var emoji2Num = function assignEmoji2Number() {
    emojiRandomNum2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    emoji2Value = document.getElementById("imageTwo");
    emoji2Value.setAttribute('value', emojiRandomNum2);
}

var startBut = document.getElementById("startButton");
startBut.addEventListener('click', emoji2Num, false);

//CREATE PICTURE 3 RANDOM VALUE
var emojiRandomNum3, emoji3Value;

var emoji3Num = function assignEmoji3Number() {
    emojiRandomNum3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    emoji3Value = document.getElementById("imageThree");
    emoji3Value.setAttribute('value', emojiRandomNum3);
}

var startBut = document.getElementById("startButton");
startBut.addEventListener('click', emoji3Num, false);

//CREATE PICTURE 4 RANDOM VALUE
var emojiRandomNum4, emoji4Value;

var emoji4Num = function assignEmoji4Number() {
    emojiRandomNum4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    emoji4Value = document.getElementById("imageFour");
    emoji4Value.setAttribute('value', emojiRandomNum4);
}

var startBut = document.getElementById("startButton");
startBut.addEventListener('click', emoji4Num, false);

//add click event to each emoji so that user Number increase by emoji value
var userCount = 0; 
var playerNumEl;

//emoji image 1
var counter1 = function () {
    userCount = userCount + emojiRandomNum1;    
    playerNumEl = document.getElementById("playerNumber");
    playerNumEl.textContent = userCount;
    checkForMatch();
};

var image1Click = document.getElementById("imageOne");
image1Click.addEventListener('click', counter1, false);

//emoji image 2
var counter2 = function () {
    userCount = userCount + emojiRandomNum2;    
    playerNumEl = document.getElementById("playerNumber");
    playerNumEl.textContent = userCount;
    checkForMatch();
};

var image2Click = document.getElementById("imageTwo");
image2Click.addEventListener('click', counter2, false);

//emoji image 3
var counter3 = function () {
    userCount = userCount + emojiRandomNum3;    
    playerNumEl = document.getElementById("playerNumber");
    playerNumEl.textContent = userCount;
    checkForMatch();
};

var image3Click = document.getElementById("imageThree");
image3Click.addEventListener('click', counter3, false);

//emoji image 4
var counter4 = function () {
    userCount = userCount + emojiRandomNum4;    
    playerNumEl = document.getElementById("playerNumber");
    playerNumEl.textContent = userCount;
    checkForMatch();
};

var image4Click = document.getElementById("imageFour");
image4Click.addEventListener('click', counter4, false);


//Set wins and losses to 0
var wins = 0;
var winEl = document.getElementById("winScore");

var losses = 0;
var lossEl = document.getElementById("lossScore");

//when player number equals the target number, the game ends and a win is added to total wins
function checkForMatch() {
    if (userCount == randomNumber) {
        alert("You did it!");
        wins ++;
        winEl.textContent = wins;
        reset();
    } else
    if (userCount > randomNumber) {
        alert("You lose...try again!");
        losses ++;
        lossEl.textContent = losses;
        reset();
    }
}

function reset() {


}

