// Define an array of quotes
var quotes = [
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
     author: " ― Ralph Waldo Emerson" },
    { quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
     author: " ― Oscar Wilde" },
    { quote: "Without music, life would be a mistake.", 
    author: " ― Friedrich Nietzsche," },
    { quote: "It is better to be hated for what you are than to be loved for what you are not.", 
    author: " ―  Andre Gide" },
];

// Function to add a random quote
function addQuote() {
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * quotes.length);

    // Get the quote at the random index
    var randomQuote = quotes[randomIndex];

    
    // Update the HTML content
    document.getElementById("qoute").innerHTML = randomQuote.quote ;
    document.getElementById("author").innerHTML = randomQuote.author;
}

