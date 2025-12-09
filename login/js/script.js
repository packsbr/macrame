document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const cpf = document.getElementById('cpf').value;
            
            console.log('Login attempt:', { email, cpf });
            
            // Redirect to the member area
            window.location.href = "https://rea-de-membros-curso-7i7q.bolt.host/";
        });
    }
});
