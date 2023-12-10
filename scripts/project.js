document.addEventListener('DOMContentLoaded', () => {
    const journalListElement = document.getElementById('journal-list');
    const newJournalNameElement = document.getElementById('new-journal-name');
    const existingJournalSelect = document.getElementById('existing-journal-select');

    // Load existing journals from local storage
    const existingJournals = JSON.parse(localStorage.getItem('journals')) || [];

    // Display existing journals in the list
    existingJournals.forEach(journal => {
        const listItem = document.createElement('li');
        listItem.textContent = journal;
        journalListElement.appendChild(listItem);

        // Add the journal to the dropdown
        const option = document.createElement('option');
        option.value = journal;
        option.textContent = journal;
        existingJournalSelect.appendChild(option);
    });

    // Event listener for adding a new journal
    document.getElementById('add-new-journal').addEventListener('click', () => {
        const newJournalName = newJournalNameElement.value.trim();
        if (newJournalName !== '') {
            // Add the new journal to the list
            const listItem = document.createElement('li');
            listItem.textContent = newJournalName;
            journalListElement.appendChild(listItem);

            // Add the new journal to the dropdown
            const option = document.createElement('option');
            option.value = newJournalName;
            option.textContent = newJournalName;
            existingJournalSelect.appendChild(option);

            // Save the updated journals to local storage
            existingJournals.push(newJournalName);
            localStorage.setItem('journals', JSON.stringify(existingJournals));

            // Clear the input field
            newJournalNameElement.value = '';
        } else {
            alert('Please enter a valid journal name.');
        }
    });

    // Event listener for choosing an existing journal
    document.getElementById('choose-existing-journal').addEventListener('click', () => {
        const selectedJournal = existingJournalSelect.value;
        if (selectedJournal) {
            // Redirect to the main journal page with the selected journal
            window.location.href = `main-journal.html?journal=${encodeURIComponent(selectedJournal)}`;
        }
    });
});
