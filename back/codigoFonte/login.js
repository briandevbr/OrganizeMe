const VerSenha = document.getElementById('password');
const icon = document.getElementById('icon')


//Botão de mostrar senha login
document.querySelector('#showpassword').addEventListener('click', function() {
if (VerSenha.type === 'password') {
VerSenha.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
} 
else {
        VerSenha.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
}
});
