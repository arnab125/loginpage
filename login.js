document.getElementById('but').addEventListener('click', function (event) {
        event.preventDefault()
        const email = document.getElementById('email-a');
        const userEmail = email.value;
    //geettingelement
        const pass = document.getElementById('pass-w');
        const userPass = pass.value;
    // condition
        if (userEmail == 'a' && userPass == 't'){
            window.location.href = 'portfolio.html';
        }
})