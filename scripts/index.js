"use strict";

/**
 * This code demonstrates how to implement iterators and generators in JavaScript.
 * It loads code from a json file and then iterates over it using a generator.
 * It then displays the results in the index page.
 */

// Load the data from the json file

function FetchData() {
    fetch("./scripts/quotes.json")
        .then(response => response.json())
        .then(data => {
            // Create a generator to iterate over the data
            let iterator = CreateIterator(data['quotes']);

            // Iterate over the data
            let result = iterator.next();
            while (!result.done) {
                // Display the data
                let quote = result.value;
                let quoteElement = document.createElement("div");
                quoteElement.className = "quote";
                quoteElement.innerHTML = quote.quote;
                document.body.appendChild(quoteElement);

                // Move to the next item
                result = iterator.next();
            }
        });
}

// Create a generator to iterate over the data
function* CreateIterator(data) {
    for (let i = 0; i < data.length; i++) {
        yield data[i];
    }
}

// Call the function to load the data
FetchData();