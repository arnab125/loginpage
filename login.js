document.getElementById('but').addEventListener('click', function () {
    const email = document.getElementById('email');
    const useremail = email.value;

    const pass = document.getElementById('pass');
    const userpass = pass.value;

    if (useremail == 'ap@c.com' && userpass == 't'){
        window.location.href = 'portfolio.html';
    }
})