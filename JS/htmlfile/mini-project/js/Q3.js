const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

async function getQuote() {
    try {
        const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

        // An error can occur here if the request fails
        // perhaps due to a lack of internet connection
        // or if a response was never received
        const response = await fetch(endpoint)
        if (!response.ok) {
            throw Error(response.statusText)
        }
        // An error can also occur here if you attempt to
        // access a non JSON response as JSON. This shouldn't happen
        // here because we know that the What Does Trump Think API
        // returns a JSON response
        const json = await response.json();
        // document.write("<em>- " + JSON.stringify(json['message']) + "</em>");
        alert("Random Quote: "+JSON.stringify(json['message']));
        console.log(json);
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote');
    }
}
