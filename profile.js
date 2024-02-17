document.getElementById('addContactButton').addEventListener('click', function() {
    var newContactInput = document.createElement('input');
    newContactInput.type = 'tel';
    newContactInput.name = 'emergencyContact';
    newContactInput.placeholder = 'Enter emergency contact number';
    newContactInput.className = 'emergency-contact-input';
    newContactInput.onkeypress = function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (newContactInput.value) {
                var contactsList = document.getElementById('contactsList');
                var contactItem = document.createElement('div');
                contactItem.textContent = newContactInput.value;
                contactsList.appendChild(contactItem);
                newContactInput.value = '';
            }
        }
    };

    var contactsSection = document.querySelector('.emergency-contacts');
    contactsSection.insertBefore(newContactInput, contactsSection.lastElementChild);
    newContactInput.focus();
    function saveProfile() {
        alert('Profile Updated');
        window.location.href = 'home.html'; // Replace with your actual page
    }
    
    document.getElementById('saveButton').addEventListener('click', saveProfile);
     
});
