"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as crypto from 'crypto';
var CryptoJS = require("crypto-js");
var signupForm = document.getElementById('signup-form');
var nameInput = document.getElementById('name');
var signUpEmailInput = document.getElementById('email');
var signUpPasswordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('confirm-password');
// We renamed variables due to typescript naming-conflict during compilation.
// Alternatively, we could use namespace to avoid such conflicts
// namespace SignUp {
//   const emailInput = document.getElementById('email') as HTMLInputElement;
//   const passwordInput = document.getElementById('password') as HTMLInputElement;
//   // ...
// }
signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = nameInput.value;
    var email = signUpEmailInput.value;
    var password = signUpPasswordInput.value;
    var confirmPassword = confirmPasswordInput.value;
    // Validate input
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill out all fields.');
        return;
    }
    // Check password match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    // Password hashing (using SHA-256)
    var hashedPassword = CryptoJS.SHA256(password).toString();
    // Store user data (e.g., local storage or API call)
    localStorage.setItem('deuser', JSON.stringify({ name: name, email: email, password: hashedPassword }));
    // Redirect to home.html
    window.location.href = 'home.htm';
    // Sign-up logic (e.g., API call or local storage)
    console.log('Signing up...');
    console.log("Name: ".concat(name));
    console.log("Email: ".concat(email));
    console.log("Password: ".concat(hashedPassword));
});
var signUpButton = document.getElementById('sign-In');
signUpButton.addEventListener('click', function () {
    //   localStorage.removeItem('deuser');
    window.location.href = 'signIn.htm';
});
