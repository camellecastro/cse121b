document.addEventListener('DOMContentLoaded', () => {
    const journalListElement = document.getElementById('journal-list');
    const newJournalNameElement = document.getElementById('new-journal-name');
    const existingJournalSelect = document.getElementById('existing-journal-select');

    function loadExistingJournals() {
        const existingJournals = JSON.parse(localStorage.getItem('journals')) || [];
        existingJournals.forEach(journal => {
            renderJournalList(journal);
            renderJournalDropdown(journal);
        });
    }

    function renderJournalList(journal) {
        const listItem = document.createElement('li');
        listItem.textContent = journal;
        journalListElement.appendChild(listItem);
    }

    function renderJournalDropdown(journal) {
        const option = document.createElement('option');
        option.value = journal;
        option.textContent = journal;
        existingJournalSelect.appendChild(option);
    }

    function addNewJournal() {
        const newJournalName = newJournalNameElement.value.trim();
        if (newJournalName !== '') {
            renderJournalList(newJournalName);
            renderJournalDropdown(newJournalName);

            const existingJournals = JSON.parse(localStorage.getItem('journals')) || [];
            existingJournals.push(newJournalName);
            localStorage.setItem('journals', JSON.stringify(existingJournals));

            newJournalNameElement.value = '';
        } else {
            alert('Please enter a valid journal name.');
        }
    }

    function chooseExistingJournal() {
        const selectedJournal = existingJournalSelect.value;
        if (selectedJournal) {
            window.location.href = `main-journal.html?journal=${encodeURIComponent(selectedJournal)}`;
        }
    }

    loadExistingJournals();

    document.getElementById('add-new-journal').addEventListener('click', addNewJournal);
    document.getElementById('choose-existing-journal').addEventListener('click', chooseExistingJournal);
});
