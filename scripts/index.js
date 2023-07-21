// Create a generator to iterate over the data
function* CreateIterator(data) {
  for (let i = 0; i < data.length; i += 1) {
    yield data[i];
  }
}

async function displayQuote(data) {
  // Create a generator to iterate over the data
  const iterator = CreateIterator(data.quotes);
  const result = iterator.next();

  if (!result.done) {
    const quote = result.value;
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = quote.quote;
    document.getElementById('author').innerHTML = quote.author;
    setTimeout(displayQuote, 5000); // Delay of 5 seconds
  }
}
// Load the data from the json file
async function FetchData() {
  try {
    const response = await fetch('./scripts/quotes.json');
    const data = await response.json();  

    // Start displaying quotes
    displayQuote(data);
  } catch (error) {
    document.getElementById('quote').innerHTML = "Error fetching data:", error";
  }
}

// Call the function to load the data and start displaying quotes
FetchData();
