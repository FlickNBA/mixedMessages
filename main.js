function GQ() { //GET QUOTE

    fetch("https://type.fit/api/quotes")
        .then((response) => response.json())
        .then((responseJson) => {
            getRandomQuote(responseJson);
        });
    
}

function getRandomQuote(JSON) {
    //console.log(`Found ${JSON.length} random quotes.`);
    const chosenQuoteIndex = Math.floor(Math.random() * JSON.length);
    //console.log(`Choosing quote number ${chosenQuoteIndex}.`);
    const chosenQuote = JSON[chosenQuoteIndex];
    //console.log(chosenQuote);

    let H1 = chosenQuote.text;
    let H2 = chosenQuote.author;
    let H3 = `Out of ${JSON.length} random quotes this quote was number ${chosenQuoteIndex}.`;

    document.getElementsByTagName("h1")[0].innerHTML = H1;

    document.getElementsByTagName("h2")[0].innerHTML = H2;

    document.getElementsByTagName("h3")[0].innerHTML = H3;

    document.getElementsByTagName("main")[0].style.opacity = 1;

    //I would love to use jQuery here but JS is JS.

}

GQ();