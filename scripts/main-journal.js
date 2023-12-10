const entryInputContainer = document.getElementById('entry-input-container');

document.addEventListener('DOMContentLoaded', () => {
    const journalBookNameElement = document.getElementById('journal-book-name');
    const quoteElement = document.getElementById('quote');
    const entriesListElement = document.getElementById('entries-list');
    const toggleEntriesButton = document.getElementById('view-entries');

    // Get the selected journal from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const selectedJournal = urlParams.get('journal');

    // Set the selected journal name at the top
    journalBookNameElement.textContent = selectedJournal;

    // Function to generate a quote using a placeholder API
    const generateQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }
            const data = await response.json();
            return `"${data.content}" - ${data.author}`;
        } catch (error) {
            console.error('Error fetching quote:', error.message);
            return 'Error fetching quote.';
        }
    };


    // Event listener for generating a quote
    document.getElementById('generate-quote').addEventListener('click', async () => {
        const quote = await generateQuote();
        quoteElement.textContent = quote;
    });

    // Event listener for writing an entry
    document.getElementById('write-entry').addEventListener('click', () => {
        entryInputContainer.style.display = 'flex';
    });

    // Event listener for saving an entry
    document.getElementById('save-entry').addEventListener('click', () => {
        const entryText = document.getElementById('entry-textarea').value.trim();
        if (entryText !== '') {
            saveEntry(selectedJournal, entryText);
            displayEntries(selectedJournal);
            entryInputContainer.style.display = 'none';
        }
    });

    // Event listener for viewing entries
    document.getElementById('view-entries').addEventListener('click', () => {
        displayEntries(selectedJournal);
    });

    // Event listener for toggling entries visibility
    toggleEntriesButton.addEventListener('click', () => {
        const entriesElement = document.getElementById('journal-entries');
        const isHidden = entriesListElement.style.display === 'none';

        if (isHidden) {
            entriesElement.style.display = 'block';
            toggleEntriesButton.textContent = 'Hide Entries';
        } else {
            entriesElement.style.display = 'none';
            toggleEntriesButton.textContent = 'View Entries';
        }
    });
});

// Function to save an entry to local storage
const saveEntry = (journalName, entryText) => {
    const entry = {
        text: entryText,
        date: new Date().toLocaleString(),
        // You can add other details like location if needed
    };

    // Retrieve existing entries from local storage
    const existingEntries = JSON.parse(localStorage.getItem(journalName)) || [];

    // Add the new entry
    existingEntries.push(entry);

    // Save the updated entries back to local storage
    localStorage.setItem(journalName, JSON.stringify(existingEntries));

    // Clear the text area after saving the entry
    document.getElementById('entry-textarea').value = '';
};

// Function to display entries for a specific journal
const displayEntries = (journalName) => {
    const entriesListElement = document.getElementById('entries-list');
    entriesListElement.innerHTML = ''; // Clear previous entries

    // Retrieve entries from local storage
    const entries = JSON.parse(localStorage.getItem(journalName)) || [];

    if (entries.length === 0) {
        entriesListElement.textContent = 'No entries available.';
    } else {
        // Create a list of entries with delete option
        entries.forEach((entry, index) => {
            const entryItem = document.createElement('div');
            entryItem.innerHTML = `<p>${entry.text} - ${entry.date}</p>`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                deleteEntry(journalName, index);
                displayEntries(journalName); // Refresh the entries after deletion
            });
            entryItem.appendChild(deleteButton);
            entriesListElement.appendChild(entryItem);
        });
    }
};

// Function to delete an entry from local storage
const deleteEntry = (journalName, index) => {
    const existingEntries = JSON.parse(localStorage.getItem(journalName)) || [];
    existingEntries.splice(index, 1);
    localStorage.setItem(journalName, JSON.stringify(existingEntries));
};
