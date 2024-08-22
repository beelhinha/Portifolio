document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email.includes('@')) {
        alert('O contato do email foi aceito.');
    } else {
        alert('O contato do email não foi aceito.');
    }
});


//teste