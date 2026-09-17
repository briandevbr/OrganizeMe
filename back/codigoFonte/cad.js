const VerSenha = document.getElementById('password');
const VerSenhaConfi = document.getElementById('confirm-password');


//Botão de mostrar senha
document.querySelector('#showpassword').addEventListener('click', function() {
if (VerSenha.type === 'password') {
VerSenha.type = 'text';
} 
else {
        VerSenha.type = 'password';
}
});

//Botão de mostrar senha confirmada
document.querySelector('#showconfirm-password').addEventListener('click', function() {
if (VerSenhaConfi.type === 'password') {
VerSenhaConfi.type = 'text';
} 
else {
        VerSenhaConfi.type = 'password';
}
});