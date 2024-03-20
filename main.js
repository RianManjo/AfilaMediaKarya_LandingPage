// Paragraf One
const typedTextElementOne = document.getElementById('typed-text1');
const textArrayOne = ["Afila Media Karya"]; 
let textOne = 0;
let One = 0;

function paragraphOne() {
    if (One < textArrayOne[textOne].length) {
        typedTextElementOne.textContent += textArrayOne[textOne].charAt(One);
        One++;
        setTimeout(paragraphOne, 20); // Waktu penundaan antara setiap huruf (ms)
    } else {
        setTimeout(wordTwo, 10); // Jeda sebelum memulai teks Two
    }
}

function wordTwo() {
    const typedTextElementTwo = document.getElementById('typed-text2');
    const textArrayTwo = ["Has A Commitment To"];
    let textTwo = 0; //textOne
    let Two = 0; //letter index
    
    function ketiktextTwo() {
        if (Two < textArrayTwo[textTwo].length) {
            typedTextElementTwo.textContent += textArrayTwo[textTwo].charAt(Two);
            Two++;
            setTimeout(ketiktextTwo, 10);
        }
    }
    ketiktextTwo();
}
paragraphOne();

// Paragraf Two
const typedTextElementThree = document.getElementById('typed-text3');
const textArrayThree = ["Develop With All Parties To"];
let textThree = 0;
let Three = 0;

function paragraphTwo() {
    if (Three < textArrayThree[textThree].length) {
        typedTextElementThree.textContent += textArrayThree[textThree].charAt(Three);
        Three++;
        setTimeout(paragraphTwo, 20);
    } else {
        setTimeout(wordFour, 10);
    }
}

function wordFour() {
    const typedTextElementFour = document.getElementById("typed-text4");
    const textArrayFour = ["Produce"];
    let textFour = 0;
    let Four = 0;

    function ketiktextFour() {
        if (Four < textArrayFour[textFour].length) {
            typedTextElementFour.textContent += textArrayFour[textFour].charAt(Four);
            Four++;
            setTimeout(ketiktextFour, 10);
        }
    }
    ketiktextFour();
}
paragraphTwo();
//Paragraf Two End

//Paragraf Three
const typedTextElementFive = document.getElementById("typed-text5");
const textArrayFive = ["Technology Products"];
let textFive = 0;
let Five = 0;

function paragraphThree() {
    if (Five < textArrayFive[textFive].length) {
        typedTextElementFive.textContent += textArrayFive[textFive].charAt(Five);
        Five++;
        setTimeout(paragraphThree, 25);
    } else {
        setTimeout(wordFive, 10);
    }
}

function wordFive() {
    const typedTextElementSix = document.getElementById("typed-text6");
    const textArraySix = ["And Service"];
    let textSix = 0;
    let Six = 0;

    function ketiktextSix() {
        if (Six < textArraySix[textSix].length) {
            typedTextElementSix.textContent += textArraySix[textSix].charAt(Six);
            Six++;
            setTimeout(ketiktextSix, 15);
        }
    }
    ketiktextSix();
}
paragraphThree();
//Paragraf Three End

// Paragraf Four
const typedTextElementSeven = document.getElementById("typed-text7");
const textArraySeven = ["Resulting In Giving Positive As Form Of"];
let textSeven = 0;
let Seven = 0;

function paragraphFour() {
    if (Seven < textArraySeven[textSeven].length) {
        typedTextElementSeven.textContent += textArraySeven[textSeven].charAt(Seven);
        Seven++;
        setTimeout(paragraphFour, 25);
    } else {
        setTimeout(wordEight, 10);
    }
}

function wordEight() {
    const typedTextElementEight = document.getElementById("typed-text8");
    const textArrayEight = ["  "];
    let textEight = 0;
    let Eight = 0;

    function ketiktextEight() {
        if (Eight < textArrayEight[textEight].length) {
            typedTextElementEight.textContent += textArrayEight[textEight].charAt(Eight);
            Eight++;
            setTimeout(ketiktextEight, 10);
        }
    }
    ketiktextEight();
}
paragraphFour();
// Paragraf Four End

const typedTextElementNine = document.getElementById("typed-text9");
const textArrayNine = ["Trust And Integrity"];
let textNine = 0;
let Nine = 0;

function paragraphFive() {
    if (Nine < textArraySeven[textSeven].length) {
        typedTextElementNine.textContent += textArrayNine[textNine].charAt(Nine);
        Nine++;
        setTimeout(paragraphFive, 25);
    } else {
        setTimeout(wordTen, 10);
    }
}
paragraphFive();



var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);