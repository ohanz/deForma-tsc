"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoJS = require("crypto-js");
var signinForm = document.getElementById('signin-form');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
signinForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = emailInput.value;
    var password = passwordInput.value;
    // Validate input
    if (!email || !password) {
        alert('Please fill out all fields.');
        return;
    }
    // Retrieve stored user data
    var storedUser = localStorage.getItem('deuser');
    if (storedUser !== null) {
        var userData = JSON.parse(storedUser);
        // ...
        // Password hashing (using SHA-256): NodeJs Envitonament
        // const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        var hashedPassword = CryptoJS.SHA256(userData.password).toString();
        // Compare passwords
        if (hashedPassword === userData.password) {
            // Redirect to home.htm
            window.location.href = 'home.htm';
        }
        else {
            alert('Invalid email or password.');
        }
        // Sign-in logic (e.g., API call or local storage)
        console.log('Signing in...');
        console.log("Email: ".concat(userData.email));
        console.log("Password: ".concat(hashedPassword));
    }
});
var signUpButton = document.getElementById('sign-Up');
signUpButton.addEventListener('click', function () {
    window.location.href = 'signup.htm';
    console.log('redirecting..');
});
