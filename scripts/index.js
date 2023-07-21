// Create a generator to iterate over the data
function* CreateIterator(data) {
  for (let i = 0; i < data.length; i += 1) {
    yield data[i];
  }
}

// Load the data from the json file
async function FetchData() {
  try {
    const response = await fetch('./scripts/quotes.json');
    const data = await response.json();  
    const iterator = CreateIterator(data.quotes); // Create a generator to iterate over the data  
    async function displayQuote() {
      const result = iterator.next();

      if (!result.done) {
        const quote = result.value;
        const quoteElement = document.getElementById('quote');
        quoteElement.innerHTML = quote.quote;
        document.getElementById('author').innerHTML = quote.author;
        setTimeout(displayQuote, 5000); // Delay of 5 seconds
      }
}
    // Start displaying quotes
    displayQuote();
  } catch (error) {
    document.getElementById('quote').innerHTML = "Error fetching data";
  }
}

// Call the function to load the data and start displaying quotes
FetchData();
