const validarEmail = (email) => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.(com|br|edu|sempreuninassau)$/i;

  if (!regexEmail.test(email)) return { erro: "email invalido" };

  return email.trim();
};

const validarSenha = (senha) => {
  const temOitoCaracteres = senha.length >= 8;
  const temCaracEspecial = /[!@#$%*]/.test(senha);
  const temMaiuscula = /[A-Z]/.test(senha);
  const temEspacoEmBranco = /\s/.test(senha);

  if (!temOitoCaracteres)
    return { erro: "a senha precisa ter mais de 8 caracteres" };
  if (!temCaracEspecial) return { erro: "1 caractere especial ex: !@#$%*" };
  if (!temMaiuscula) return { erro: "precisa de 1 letra maiuscula" };
  if (temEspacoEmBranco)
    return { erro: "a senha nao pode ter espacos em branco" };

  return senha;
};

export const login = (email, senha) => {
  if (
    [email, senha].every((str) => typeof str !== "string" || str.trim() === "")
  )
    return "dados invalidos";

  const emailLimpo = validarEmail(email);
  if (emailLimpo.erro) return emailLimpo;

  const senhaLimpa = validarSenha(senha);
  if (senhaLimpa.erro) return senhaLimpa;

  return {
    dados: {
      email: emailLimpo,
      senha: senhaLimpa,
    },
  };
};
