function GQ() { //GET QUOTE

    fetch("https://type.fit/api/quotes")
        .then((response) => response.json())
        .then((responseJson) => {
            getRandomQuote(responseJson);
        });
    
}

function getRandomQuote(JSON) {
    console.log(`Found ${JSON.length} random quotes.`);
    const chosenQuoteIndex = Math.floor(Math.random() * JSON.length);
    console.log(`Choosing quote number ${chosenQuoteIndex}.`);
    const chosenQuote = JSON[chosenQuoteIndex];
    console.log(chosenQuote);
}

GQ();