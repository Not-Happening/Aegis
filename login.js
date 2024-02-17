document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    if (username === 'Sreejitha12345' && password === 'sreejitha12345') {
        window.location.href = 'home.html';
    } else {
        alert('The username or password is wrong');
    }   
});

document.getElementById('signup').onclick = function() {
    window.location.href = 'signup.html'; 
};

document.getElementById('forgotPassword').onclick = function() {
    window.location.href = 'forgot-password.html'; 
};



