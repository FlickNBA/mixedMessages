function getRandomQuote() {
    let XHR = new XMLHttpRequest();
    XHR.open("GET", "https://type.fit/api/quotes");
    XHR.send();
    XHR.onload = () => console.log(XHR.responseText);
}

getRandomQuote();