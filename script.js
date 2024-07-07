document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");

    // Handle signup form submission
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        localStorage.setItem('userName', name); // Save the user's name in local storage
        window.open('home.html', '_blank'); // Open home.html in a new tab
    });
});
