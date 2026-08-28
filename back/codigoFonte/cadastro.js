const verificarEmail = (email) => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  return regexEmail.test(email);
};

const verificarSenha = (senha) => {
  const temOitoCaracteres = senha.length >= 8;
  if (!temOitoCaracteres)
    return { erro: "a senha precisa ter mais de 8 caracteres" };

  const temCaracEspecial = /[!@#$%*]/.test(senha);
  if (!temCaracEspecial) return { erro: "1 caractere especial ex: !@#$%*" };

  const temMaiuscula = /[A-Z]/.test(senha);
  if (!temMaiuscula) return { erro: "precisa de 1 letra maiuscula" };

  const temEspacoEmBranco = /\s/.test(senha);
  if (temEspacoEmBranco)
    return { erro: "a senha nao pode ter espacos em branco" };

  return { valido: true };
};

const possuiEspacoEmBranco = (user) => /\s/.test(user);

export const login = (email, senha, username) => {
  if (
    [email, senha, username].some(
      (str) => typeof str !== "string" || str.trim() === "",
    )
  ) {
    return { erro: "entradas incorretas." };
  }

  const emailLimpo = email.trim();
  const emailValido = verificarEmail(emailLimpo);
  if (!emailValido) return { erro: "email invalido" };

  const statusSenha = verificarSenha(senha);
  if (statusSenha.erro) return statusSenha;

  const usernameLimpo = username.trim();
  const usuarioPossuiEspaco = possuiEspacoEmBranco(usernameLimpo);
  if (usuarioPossuiEspaco) return { erro: "usuario nao pode conter espaco" };

  return {
    dados: {
      email: emailLimpo,
      senha,
      username: usernameLimpo,
    },
  };
};
