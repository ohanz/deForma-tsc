var form = document.getElementById('myForm');
var submitButton = document.getElementById('submit');
var formStatus = document.getElementById('form-status');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var formData = new FormData();
    formData.append('name', nameInput.value);
    formData.append('email', emailInput.value);
    formData.append('message', messageInput.value);
    // Validate form data
    if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
        formStatus.textContent = 'Please fill out all fields.';
        return;
    }
    else if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        formStatus.textContent = 'Please fill out all fields.';
        return;
    }
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
        formStatus.textContent = 'Invalid email format.';
        return;
    }
    if (messageInput.value.length < 10) {
        formStatus.textContent = 'Hye! Your Message must be at least 10 characters.';
        console.error('Message must be at least 10 characters.');
        return;
    }
    // Submit form data
    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('message'));
    formStatus.textContent = 'Form submitted successfully!';
    console.log(nameInput.value, emailInput.value, messageInput.value);
});
// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
//    // Create a new FormData object
// const nameInput = document.getElementById('name') as HTMLInputElement;
// const emailInput = document.getElementById('email') as HTMLInputElement;
// const messageInput = document.getElementById('message') as HTMLInputElement;
// // Create a new FormData object
// const formData = new FormData();
// // Append values to formData
// formData.append('name', nameInput.value);
// formData.append('email', emailInput.value);
// formData.append('message', messageInput.value);
// // Alternatively
// // const formData = new FormData(document.getElementById('yourFormId') as HTMLFormElement);
//     // Validate form data
//     if (!formData.name || !formData.email || !formData.message) {
//         formStatus.textContent = 'Please fill out all fields.';
//         return;
//     }
//     // Submit form data
//     console.log(formData);
//     formStatus.textContent = 'Form submitted successfully!';
// });
