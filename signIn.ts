import * as CryptoJS from 'crypto-js';

const signinForm = document.getElementById('signin-form') as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;

signinForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    // Validate input
    if (!email || !password) {
        alert('Please fill out all fields.');
        return;
    }

     // Retrieve stored user data
     const storedUser = localStorage.getItem('deuser');
     if (storedUser !== null) {
        const userData = JSON.parse(storedUser);
        // ...
        // Password hashing (using SHA-256): NodeJs Envitonament
        // const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

        const hashedPassword = CryptoJS.SHA256(userData.password).toString();
        // Compare passwords
        if (hashedPassword === userData.password) {
             // Redirect to home.htm
             window.location.href = 'home.htm';
            } else {
                alert('Invalid email or password.');
            }

 // Sign-in logic (e.g., API call or local storage)
    console.log('Signing in...');
    console.log(`Email: ${userData.email}`);
    console.log(`Password: ${hashedPassword}`);
       
}

 
   
});

const signUpButton = document.getElementById('sign-Up') as HTMLButtonElement;

signUpButton.addEventListener('click', () => {
  window.location.href = 'signup.htm';
  console.log('redirecting..')
});