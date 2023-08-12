// coded by Mohammad Zefri
// contact me on mdzefri.code@gmail.com


var conOfAll = document.getElementById("container-of-all");
var wordDiv = document.getElementById("word-div");
var dashesSpan = document.getElementById("dashes-span");
var conOfSquares = document.getElementById("container-of-squares");
var controlButtons = document.getElementById("control-buttons");
var nextBtn = document.getElementById("next-button");
var previousBtn = document.getElementById("previous-button");
var resetBtn = document.getElementById("reset-button");
var correctSound = document.getElementById("correct");
var wrongSound = document.getElementById("wrong");
var victorySound = document.getElementById("victory");



myArrWords = [
    // 1
    ["Die Rennen", ""],
    ["Die Befehle", ""],
    ["Die Mechaniker", ""],
    ["Die Erdbeeren", ""],
    ["Die Äpfel", ""],
    ["Die Bananen", ""],
    ["Die Birnen", ""],
    ["Die Tomaten", ""],
    ["Die Gurken", ""],
    ["Die Kartoffeln", ""],
    ["Die Zwiebeln", ""],
    ["Die Karotten", ""],
    ["Die Beispiele", ""],
    ["Die Eier", ""],
    ["Die Monate", ""],
    ["Die Tiere", ""],
    ["Die Geschenke", ""],
    ["Die Sprachen", ""],
    ["Die Fragen", ""],
    ["Die Sekunden", ""],
    // 2
    ["Die Minuten", ""],
    ["Die Stunden", ""],
    ["Die Tage", ""],
    ["Die Wochen", ""],
    ["Die Jahre", ""],
    ["Die Familien", ""],
    ["Die Frauen", ""],
    ["Die Kinder", ""],
    ["Die Städte", ""],
    ["Die Farben", ""],
    ["Die Bücher", ""],
    ["Die Autos", ""],
    ["Die Hobbys", ""],
    ["Die Ameisen", ""],
    ["Die Stühle", ""],
    ["Die Freunde", ""],
    ["Die Fenster", ""],
    ["Die Bäume", ""],
    ["Die Tische", ""],
    ["Die Gegner", ""],
];

var index = 0;

// index of the first letter in a word after slicing it removing "Die "
var indexTwo = 0;

var indexThree = 1;



function shuffleString(inputString) {
    let charArray = inputString.split("");

    for (let i = charArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    };

    return charArray.join("");
};



function displayWord() {
    dashesSpan.innerHTML = `${"-".repeat(myArrWords[index][0].slice(4, myArrWords[index][0].length).length)}`;
};
displayWord();


function displaySquares() {
    let myString = myArrWords[index][0].slice(4, myArrWords[index][0].length);
    let myShuffledString = shuffleString(myString);

    myShuffledString.split("").forEach(function(ele){
        var div = document.createElement(`div`);
        div.appendChild(document.createTextNode(`${ele.toLowerCase()}`));
        div.classList.add("letter-div");
        conOfSquares.appendChild(div);
    });
};
displaySquares();


function fill() {
    conOfSquares.childNodes.forEach(function(div){
        div.addEventListener("click", function() {
            if (div.innerHTML === myArrWords[index][0].slice(4, myArrWords[index][0].length)[indexTwo].toLowerCase()) {
                correctSound.play();
                if (indexTwo === 0) {
                    dashesSpan.innerHTML = div.textContent.toUpperCase() + "-".repeat(dashesSpan.textContent.slice(indexThree).length);
                } else {
                    dashesSpan.innerHTML = dashesSpan.textContent.slice(0, indexThree) + div.textContent + "-".repeat(dashesSpan.textContent.slice(indexThree).length - 1);
                    indexThree++;
                };
                var divPos = document.createElement("div");
                divPos.classList.add("div-pos");
                conOfSquares.replaceChild(divPos, div);
                indexTwo++;
            } else {
                wrongSound.play();
            };
            if (dashesSpan.innerHTML === myArrWords[index][0].slice(4, myArrWords[index][0].length)) {
                wordDiv.style.color = "rgb(0, 255, 0)";
                victorySound.play();
            };
        });
    });
};
fill();

nextBtn.addEventListener("click", function(){
    if (index < myArrWords.length - 1 && wordDiv.style.color == "rgb(0, 255, 0)") {
        wordDiv.style.color = "yellow";
        conOfSquares.innerHTML = "";
        index++;
        indexTwo = 0;
        indexThree = 1;
        displayWord();
        displaySquares();
        fill();
    };
});

previousBtn.addEventListener("click", function(){
    if (index > 0) {
        wordDiv.style.color = "yellow";
        conOfSquares.innerHTML = "";
        index--;
        indexTwo = 0;
        indexThree = 1;
        displayWord();
        displaySquares();
        fill();
    };
});

resetBtn.addEventListener("click", function(){
    wordDiv.style.color = "yellow";
    conOfSquares.innerHTML = "";
    index=0;
    indexTwo=0;
    indexThree=1;
    displayWord();
    displaySquares();
    fill();
});




