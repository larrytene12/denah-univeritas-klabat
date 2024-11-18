// Function to search destinations based on user input
function searchDestinations() {
    // Get the search input value and convert it to lowercase for case-insensitive comparison
    const searchInput = document.getElementById('filter');
    const searchTerm = searchInput.value.toLowerCase();
    
    // Get all destination items
    const destinationItems = document.getElementsByClassName('destinasi-item');
    
    // Loop through all destination items to check if they match the search term
    Array.from(destinationItems).forEach(item => {
        // Get the title and description text from each destination item
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        const combinedText = `${title} ${description}`;  // Combine both title and description
        
        // Check if the search term exists in either title or description
        if (combinedText.includes(searchTerm)) {
            item.style.display = ''; // Show the item if it matches the search term
            
            // If an exact match is found in the title, scroll to the item
            if (title.includes(searchTerm)) {
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            item.style.display = 'none'; // Hide the item if it doesn't match
        }
    });
}

// Add event listener for real-time search, calling searchDestinations whenever input changes
document.getElementById('filter').addEventListener('input', searchDestinations);

//

