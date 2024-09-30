// import * as crypto from 'crypto';
import * as CryptoJS from 'crypto-js';

const signupForm = document.getElementById('signup-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const signUpEmailInput = document.getElementById('email') as HTMLInputElement;
const signUpPasswordInput = document.getElementById('password') as HTMLInputElement;
const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;

// We renamed variables due to typescript naming-conflict during compilation.
// Alternatively, we could use namespace to avoid such conflicts
// namespace SignUp {
//   const emailInput = document.getElementById('email') as HTMLInputElement;
//   const passwordInput = document.getElementById('password') as HTMLInputElement;
//   // ...
// }

signupForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const name = nameInput.value;
    const email = signUpEmailInput.value;
    const password = signUpPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

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
     const hashedPassword = CryptoJS.SHA256(password).toString();

  // Store user data (e.g., local storage or API call)
  localStorage.setItem('deuser', JSON.stringify({ name, email, password: hashedPassword }));

  // Redirect to home.html
  window.location.href = 'home.htm';
  // Sign-up logic (e.g., API call or local storage)
    console.log('Signing up...');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${hashedPassword}`);
    
});

const signUpButton = document.getElementById('sign-In') as HTMLButtonElement;

signUpButton.addEventListener('click', () => {
//   localStorage.removeItem('deuser');
  window.location.href = 'signIn.htm';
});

