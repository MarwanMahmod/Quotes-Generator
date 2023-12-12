var Quotes = [
    {"author": "Woody Allen", 
    "quote": "Iam not afraid of death I just do not want to be there when it happens."
    },
    {"author": " J.K. Rowling", 
    "quote": "To the well-organized mind, death is but the next great adventure."
    },
    {"author": "Mark Twain", 
    "quote": "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time."
    },
    {"author": " Oscar Wilde", 
    "quote": "A thing is not necessarily true because a man dies for it."
    },
    {"author": "Chuck Palahniuk", 
    "quote": "I don't want to die without any scars."
    },
    {"author": "Rick Riordan", 
    "quote": "Don't feel bad, I'm usually about to die"
    },
];

var currentQuoteIndex = -1;
function QuoteApp(){
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * Quotes.length);
    } while (randomIndex === currentQuoteIndex);

    currentQuoteIndex = randomIndex;

    var randomQuote = Quotes[randomIndex];
    document.getElementById("Quote").innerHTML = randomQuote.quote;
    document.getElementById("Author").innerHTML = '- ' + randomQuote.author;
}






