// Create a generator to iterate over the data
function* CreateIterator(data) {
  for (let i = 0; i < data.length; i += 1) {
    yield data[i];
  }
}

async function displayQuote(iterator) {
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

    // Create a generator to iterate over the data
    const iterator = CreateIterator(data.quotes);

    // Start displaying quotes
    displayQuote(iterator);
  } catch (error) {

    // console.error("Error fetching data:", error);
  }
}

// Call the function to load the data and start displaying quotes
FetchData();
