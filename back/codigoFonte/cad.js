const VerSenha = document.getElementById("password");
const VerSenhaConfi = document.getElementById("confirm-password");
const icon = document.getElementById("icon");
const iconc = document.getElementById("icon-confi");
const senhaNconfere = document.getElementById("senha-nao-confere");
// Tipos de erros de senha no cadastro
const erroSenha = {
  tamanhoMinimo: document.getElementById("erro1"),
  caractereEspecial: document.getElementById("erro2"),
  letraMaiuscula: document.getElementById("erro3"),
  comNumeros: document.getElementById("erro4"),
};

//Botão de mostrar senha
document.querySelector("#showpassword").addEventListener("click", function () {
  if (VerSenha.type === "password") {
    VerSenha.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    VerSenha.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
});

//Botão de mostrar senha confirmada
document.querySelector("#showconfirm-password").addEventListener("click", function () {
    if (VerSenhaConfi.type === "password") {
      VerSenhaConfi.type = "text";
      iconc.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      VerSenhaConfi.type = "password";
      iconc.classList.replace("fa-eye-slash", "fa-eye");
    }
  });

const verificarSenha = document.querySelector("#formulario").addEventListener("submit", function (evento) {
    evento.preventDefault();
    let ValidarSenha = 0;
    // Limpa erros apos apertar o botão e checa a senha novamente
    erroSenha.tamanhoMinimo.classList.replace("ativo", "msg-erro");
    erroSenha.caractereEspecial.classList.replace("ativo", "msg-erro");
    erroSenha.letraMaiuscula.classList.replace("ativo", "msg-erro");
    erroSenha.comNumeros.classList.replace("ativo", "msg-erro");
    senhaNconfere.classList.replace("senha-nao-confere-ativo", "senha-nao-confere");
    VerSenhaConfi.classList.replace("boxtext-confi-erro", "boxtext-confi");

    const senha = document.getElementById("password");// Regra 1: Checa se a senha possui pelo menos 8 caracteres
    if (senha.value.length > 8) {
      ValidarSenha = 1;
      erroSenha.tamanhoMinimo.classList.replace("msg-erro", "ativo");
    }
    const temCaracEspecial = /[!@#$%*]/.test(senha.value);// Regra 2: Testa se a senha contém ao menos um caractere especial
    if (temCaracEspecial) {
      ValidarSenha = 1;
      erroSenha.caractereEspecial.classList.replace("msg-erro", "ativo");
    }
    const temMaiuscula = /[A-Z]/.test(senha.value);// Regra 3: Testa se a senha contém ao menos uma letra maiúscula (A-Z)
    if (temMaiuscula) {
      ValidarSenha = 1;
      erroSenha.letraMaiuscula.classList.replace("msg-erro", "ativo");
    }
    const temNumero = /\d/.test(senha.value);// Regra 4: Garante que a senha contenha ao menos um número
    if (temNumero) {
      ValidarSenha = 1;
      erroSenha.comNumeros.classList.replace("msg-erro", "ativo");
    }
    const temEspacos = /\s/.test(senha.value);// Regra 5: checa se a senha contém espaço
    if (temEspacos) {
      ValidarSenha = 1;
      console.log("senha contem espaço");
    }
    if (VerSenha.value !== VerSenhaConfi.value) {// Regra 6: checa se a senha e a senha confirmada são iguais
      ValidarSenha = 1;
       senhaNconfere.classList.replace("senha-nao-confere", "senha-nao-confere-ativo");
       VerSenhaConfi.classList.replace("boxtext-confi", "boxtext-confi-erro");
    }
    if (ValidarSenha === 0) {
      console.log("senha valida");
    }

  });
 
  