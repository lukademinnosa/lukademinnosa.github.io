/**
 * This code demonstrates how to implement iterators and generators in JavaScript.
 * It loads code from a json file and then iterates over it using a generator.
 * It then displays the results in the index page.
 */

// Create a generator to iterate over the data

function* CreateIterator(data) {
  for (let i = 0; i < data.length; i += 1) {
    yield data[i];
  }
}

// Load the data from the json file

function FetchData() {
  fetch('./scripts/quotes.json')
    .then((response) => response.json())
    .then((data) => {
      // Create a generator to iterate over the data
      const iterator = CreateIterator(data.quotes);

      // Iterate over the data
      let result = iterator.next();
      while (!result.done) {
        // Display the data
        const quote = result.value;
        const quoteElement = document.createElement('div');
        quoteElement.className = 'quote';
        quoteElement.innerHTML = quote.quote;
        document.body.appendChild(quoteElement);

        // Move to the next item
        result = iterator.next();
      }
    });
}

// Call the function to load the data
FetchData();