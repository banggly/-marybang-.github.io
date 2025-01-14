const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote:
            "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // Corrected Math.random()

quote.innerText = todaysQuote.quote; // Changed todaysQuote.quotes to todaysQuote.quote
author.innerText = todaysQuote.author;
