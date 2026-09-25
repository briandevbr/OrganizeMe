const VerSenha = document.getElementById('password');
const VerSenhaConfi = document.getElementById('confirm-password');
const icon = document.getElementById('icon')
const iconc = document.getElementById('icon-confi')


//Botão de mostrar senha
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

//Botão de mostrar senha confirmada
document.querySelector('#showconfirm-password').addEventListener('click', function() {
if (VerSenhaConfi.type === 'password') {
        VerSenhaConfi.type = 'text';
        iconc.classList.replace('fa-eye', 'fa-eye-slash');
} 
else {
        VerSenhaConfi.type = 'password';
        iconc.classList.replace('fa-eye-slash', 'fa-eye');
}
});