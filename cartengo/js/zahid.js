
// Script for the displaying the error message directly if user not entering the valid email
document.querySelector('#UserPassword-Email').addEventListener('input', function () {
    const emailInput = this.value;
    const emailError = document.querySelector('.No-Email-Found');
    
    if (!emailInput.includes('@') || emailInput.trim() === '') {
        emailError.classList.remove('d-none'); 
    } else {
        emailError.classList.add('d-none');
    }
});


