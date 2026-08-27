# OrganizeMe

> **Projeto acadêmico colaborativo desenvolvido por um grupo de alunos do 2º período de Análise e Desenvolvimento de Sistemas (ADS) do Centro Universitário Mauricío de Nassau de Olinda Pernambuco, integrado à disciplina de Coding do professor Felipe Araujo.**

---

# 📑 Sumário

- [📍Introdução](#-introdução)
- [👥 Descrição dos Envolvidos e dos Usuarios](#-professor-responsável)
- [📂 Estrutura do projeto](#-estrutura-do-projeto)
- [📋 Especificação Técnica de Requisitos](#-especificação-técnica-de-requisitos)
- [Posicionamento]
- [Descrição da Solução]
- [Recursos do Produto]

---

# 📍Introdução

**O OrganizeMe é uma plataforma global de gestão financeira desenvolvida para simplificar o controle operacional e a previsibilidade de lucros ou prejuízos de empresas de qualquer porte. Com uma abordagem intuitiva e foco em eficiência, a solução se destaca no mercado ao consolidar dados complexos em insights simples. O projeto foi construído utilizando as seguintes tecnologias:**

[![Project](https://skillicons.dev/icons?i=js,nodejs,html,css)](https://skillicons.dev)

---

## 💻 Equipe de desenvolvimento

- [David Brian](https://github.com/briandevbr)
- [Davi Perreli](https://github.com/DaviPerrelli15)
- [Thiago Guimarães](https://github.com/thiagoguimaraessf-afk)
- [Rayanne Melo](https://github.com/rayannemelo222)
- [Kauã Heinzel](https://github.com/kauaheinzel)
- [Guilherme Cauã](https://github.com/gui-cauadev)
- [Miguel Arthur](https://github.com/miguelarthur202)
- [Carlos Henrique](https://github.com/carloshenrique1611)

## 👤 Tutor

- [Felipe Araujo](https://github.com/FilipeHSAraujo)

---

# 📂 Estrutura do projeto

```text
├── 📂back
│   ├── 📂bancoDeDados
│   │   ├── 📃dadosPessoais.json
│   │   └── 📃inventario.json
│   └── 📂codigoFonte
│       └── 📃cadastro.js
├── 📂front
│   ├── 📂CSS
│   │   └── 📃estilo.css
│   └── 📂HTML
│       └── 📃login.html
├── 📃index.html
└── 📃README.md
```

# 📋 Especificação Técnica de Requisitos

> **O escopo deste projeto é composto por requisitos funcionais e não funcionais, além de suas respectivas regras de negócio.**

## Requisitos Funcionais & Fluxos de Navegação (UX)

- **Anchor Link (Planos):** Rolagem suave (_smooth scroll_) para a seção de planos na _Landing Page_.
- **Redirect (Suporte):** Direcionamento para a Central de Ajuda via _Navbar_ (cabeçalho).
- **Gate de Autenticação (Perfil):** Redirecionamento condicional via _Navbar_. Se o usuário estiver autenticado, acessa o _Dashboard_ de Perfil; caso contrário, é retido e enviado para o fluxo de _Sign-In_.

## Mapeamento de Componentes por Tela

### 🏠 Home Page

| Componente / Feature | Prioridade | Descrição Técnica                                |
| :------------------- | :--------- | :----------------------------------------------- |
| **Auth CTA**         | Alta       | Botão de acesso para Login/Cadastro na _Navbar_. |
| **Help Center Link** | Média      | Atalho de suporte no cabeçalho.                  |
| **Profile Shortcut** | Alta       | Ícone de acesso ao perfil do usuário conectado.  |

### ❓ Central de Ajuda (Help Center)

- **FAQ Integrado:** Seção de perguntas frequentes com componentes _Accordion_.
- **Omnichannel Support:** Canais de atendimento (E-mail, Chat ou WhatsApp).

### 🔐 Tela de Login (Sign-In)

| Input / Ação            | Prioridade | Tipo de Componente                          |
| :---------------------- | :--------- | :------------------------------------------ |
| **User Identification** | Alta       | _Input_ de E-mail com validação de formato. |
| **Password Field**      | Alta       | _Input_ de senha com máscara de caracteres. |
| **Sign-Up Redirect**    | Alta       | Link de conversão para novos usuários.      |

- **Recuperação de Acesso:** Fluxo de _Forgot Password_ (Esqueci minha senha).
- **CTA Primário:** Botão de submissão do formulário de autenticação.
- **Password Toggle:** Ícone de visibilidade (olho) para exibir/ocultar senha.

### 📝 Tela de Cadastro (Sign-Up)

- **Email Input:** Campo para registro de e-mail corporativo/pessoal.
- **Password Input:** Campo de criação de senha com validador de complexidade (_Regex_).
- **Username Input:** Campo para definição de ID único do usuário.
- **Form Submission:** CTA para finalização do registro e criação da conta.

## Requisitos Não-Funcionais

- **Segurança e Privacidade:** Criptografia de ponta a ponta (AES-256), conformidade com a **LGPD**, hashing de senhas (bcrypt/argon2) e uso obrigatório de protocolo HTTPS.

## Regras de Negócio (Business Rules)

- **RN01 - Tiering de Assinatura:** O volume de produtos ativos e o limite de estoque disponível na plataforma são restritos de forma dinâmica, indexados ao plano contratado pelo usuário (_Paywall/Subscription Limit_).
