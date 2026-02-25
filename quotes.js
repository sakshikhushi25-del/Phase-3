const quotes = [
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vagughan"
    },
    {
        text: "Success is not final, failure is not fatal.",
        author: "Winston S. Churchill"
    },
    {
        text: "Hard work beats talent doesn't work hard.",
        author: "Tim Notke"
    },
    {
        text: "Believe you can and you re halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Happiness depends upon ourselves.",
        author: "Arostotle"
    }
];
let lastIndex = 0;
const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author");
const nextQuote = document.querySelector(".nextBtn");
const prevQuote = document.querySelector(".prevBtn");
const copyBtn = document.querySelector(".copyBtn");
const soundBtn = document.querySelector(".sound");
const tooltip = document.querySelector(".tooltip");

function showQuote() {
    quoteText.innerText = quotes[lastIndex].text;
    authorText.innerText = "_ " + quotes[lastIndex].author;
};
showQuote();

nextQuote.addEventListener("click", () => {
    lastIndex = (lastIndex + 1) % quotes.length;
    showQuote();
});
prevQuote.addEventListener("click", () => {
    lastIndex = (lastIndex - 1 + quotes.length) % quotes.length;
    showQuote();
});

copyBtn.addEventListener("click", () => {
    let fullQuote = `${quoteText.innerText} ${authorText.innerText}`;
    navigator.clipboard.writeText(fullQuote);
    alert("Quote copied!");
});

soundBtn.addEventListener("click", () => {
    speechSynthesis.cancel();
    let speech = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorText.innerText}`);
    speechSynthesis.speak(speech);
});

