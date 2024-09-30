const usernameElement = document.getElementById('username') as HTMLSpanElement;

// Check if user is signed in
const storedUser = localStorage.getItem('deuser');
if (storedUser !== null) {
    const userData = JSON.parse(storedUser);
if (userData) {
  // Display username
  usernameElement.textContent = `Welcome, ${userData.name}!`;
} else {
  // Redirect to sign-in page if not signed in
  window.location.href = 'signIn.htm';
}
}
else {
  console.log('Null UserData');
}

const signOutButton = document.getElementById('sign-out') as HTMLButtonElement;

signOutButton.addEventListener('click', () => {
  localStorage.removeItem('deuser');
  window.location.href = 'signIn.htm';
});




