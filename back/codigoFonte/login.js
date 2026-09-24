const VerSenha = document.getElementById('password');

//Botão de mostrar senha login
document.querySelector('#showpassword').addEventListener('click', function() {
if (VerSenha.type === 'password') {
VerSenha.type = 'text';
} 
else {
        VerSenha.type = 'password';
}
});
