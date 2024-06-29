const quotes = [
    {
        quote: "It ain't over till it's over",
        author: "Yogi Berra",
    },
    {
        quote: "Batting is timing, Pitching is upsetting timing.",
        author: "Warren Spahn",
    },
    {
        quote: "You can't measure heart with a radar gun.", 
        author: "Tom Glavine",
    },
    {
        quote: "Throw strikes. Home plate don’t move.",
        author: "Satchel Paige",
    },
    {
        quote: "Baseball is not a sport you can achieve individually.",
        author: "Curt Schilling",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function getQuote() {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = "-" + todaysQuote.author + "-";
}

getQuote();
setInterval(getQuote, 5000);