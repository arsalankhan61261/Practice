// Retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



// Event Listeners
// Create event listener for submit button
form.addEventListener('submit', function(e) {
    // Stop page from reloading on submit
    e.preventDefault();

    // Check if username is empty
    if(username.value === '')  {
        alert('Username is required');
    }
});