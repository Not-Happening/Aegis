document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    
    var emailPattern = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    var isEmailValid = emailPattern.test(emailInput.value);
   
    var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    var isPasswordValid = passwordPattern.test(passwordInput.value);

    if (isEmailValid && isPasswordValid) {
        
        window.location.href = 'profile.html'; 
    } else {
        
        if (!isEmailValid) {
            alert("Invalid email");
            emailInput.focus();
        } else if (!isPasswordValid) {
            alert("Invalid password");
            passwordInput.focus();
        }
    }
});
