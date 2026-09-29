const VerSenha = document.getElementById('password');
const VerSenhaConfi = document.getElementById('confirm-password');
const icon = document.getElementById('icon')
const iconc = document.getElementById('icon-confi')
//erros da senha do cadastro
const erro1 = document.getElementById('erro1');
const erro2 = document.getElementById('erro2');
const erro3 = document.getElementById('erro3');
const erro4 = document.getElementById('erro4');

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

const verificarSenha = document.querySelector('#formulario').addEventListener('submit', function(evento)  {  evento.preventDefault();
        let ValidarSenha = 0;
        // para retirar os erros que estavam antes
        erro1.classList.replace('ativo', 'msg-erro');
        erro2.classList.replace('ativo', 'msg-erro');
        erro3.classList.replace('ativo', 'msg-erro');
        erro4.classList.replace('ativo', 'msg-erro');
        

        const senha = document.getElementById('password')
        if (senha.value.length < 8) {
                console.log("erro: tem menos que 8 caracteres");
                ValidarSenha = 1;
                erro1.classList.replace('msg-erro', 'ativo');
        }
        const temCaracEspecial = /[!@#$%*]/.test(senha.value)
        if (!temCaracEspecial) {
                console.log("erro: senha precisa de caracteres especiais");
                ValidarSenha = 1;
                erro2.classList.replace('msg-erro', 'ativo');
        }
         const temMaiuscula = /[A-Z]/.test(senha.value);
        if (!temMaiuscula) {
                console.log("erro: tem que ter letra Maiuscula");
                ValidarSenha = 1;
                erro3.classList.replace('msg-erro', 'ativo');
        }
        const temEspacoEmBranco = /\s/.test(senha.value);
         if (temEspacoEmBranco) {
                console.log("erro: não pode ter espaço na senha");
                ValidarSenha = 1;
                erro4.classList.replace('msg-erro', 'ativo');
                
         }
        if (!ValidarSenha) {
         console.log("senha valida")
        }
 })

