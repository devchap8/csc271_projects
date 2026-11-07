import cardData from './cards.json' with { type: 'json' };
let cards = [...cardData]; // so its not read only

const numCards = document.querySelector(".numCards");
const totalCards = document.querySelector(".totalCards");
const word = document.querySelector(".word");
const sentence = document.querySelector(".sentence");
const sentenceReading = document.querySelector(".sentence-reading");
const sentenceTranslation = document.querySelector(".sentence-translation");
const cardImg = document.querySelector(".card-image");
const wordReading = document.querySelector(".word-reading");
const definition = document.querySelector(".definition");
const sentenceNumber = document.querySelector(".sentence-number");
const sentenceTotal = document.querySelector(".sentence-total");
const answerIntervals = Array.from(document.querySelectorAll(".answer-interval"));
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const doneScreen = document.querySelector(".done-message-container");
const answers = Array.from(document.querySelectorAll(".answer"));
answers.forEach(answer => {
    answer.childElements = {
        answerInterval: answer.querySelector(":scope > .answer-interval"),
        answerButton: answer.querySelector(":scope > .answer-button")
    };
});

const totalCardsAmt = cards.length;
let currCardsAmt = cards.length;
let currCard;
const getRandomCard = () => cards[Math.floor(Math.random() * cards.length)];

function loadCard(card) {
    currCard = card;
    word.innerHTML = card.word;
    sentence.innerHTML = card.sentence;
    sentenceReading.innerHTML = card.sentenceReading;
    sentenceTranslation.innerHTML = card.translation;
    cardImg.src = card.image;
    cardImg.alt = card.imageAlt;
    wordReading.innerHTML = card.reading;
    definition.innerHTML = card.definition;
    sentenceNumber.innerHTML = card.sentenceNumber;
    sentenceTotal.innerHTML = card.sentenceTotal;
    const intervals = Object.values(card.intervals);
    for(let i = 0; i < intervals.length; i++) {
        answerIntervals[i].innerHTML = intervals[i];
    }
}

function loadRandomCard() {
    let card = getRandomCard();
    // prevents same card from showing up twice in a row
    while(currCardsAmt != 1 && card.id === currCard.id) {
        card = getRandomCard();
    }
    loadCard(card);
}

function removeAndLoad() {
    cards = cards.filter(c => c.id !== currCard.id);
    numCards.innerHTML = --currCardsAmt;
    if(cards.length < 1) {
        showDoneScreen();
        return;
    }
    loadRandomCard();
}

function onDOMContentLoaded() {
    loadCard(getRandomCard());
    totalCards.innerHTML = totalCardsAmt;
    numCards.innerHTML = currCardsAmt;
}

function onButtonClick(intervalName) {
    currCard.intervals[intervalName].at(-1) == "m"
        ? loadRandomCard() : removeAndLoad();
}

function showDoneScreen() {
    main.classList.add("hidden");
    footer.classList.add("hidden");
    doneScreen.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
answers.forEach(answer => answer.childElements.answerButton.addEventListener
    ("click", () => onButtonClick(answer.childElements.answerButton.innerHTML.toLowerCase())));