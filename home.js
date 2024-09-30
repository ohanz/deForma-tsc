var usernameElement = document.getElementById('username');
// Check if user is signed in
var storedUser = localStorage.getItem('deuser');
if (storedUser !== null) {
    var userData = JSON.parse(storedUser);
    if (userData) {
        // Display username
        usernameElement.textContent = "Welcome, ".concat(userData.name, "!");
    }
    else {
        // Redirect to sign-in page if not signed in
        window.location.href = 'signIn.htm';
    }
}
else {
    console.log('Null UserData');
}
var signOutButton = document.getElementById('sign-out');
signOutButton.addEventListener('click', function () {
    localStorage.removeItem('deuser');
    window.location.href = 'signIn.htm';
});
