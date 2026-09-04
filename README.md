# OrganizeMe

> **Projeto acadêmico colaborativo desenvolvido por um grupo de alunos do 2º período de Análise e Desenvolvimento de Sistemas (ADS) do Centro Universitário Mauricío de Nassau de Olinda Pernambuco, integrado à disciplina de Coding do professor Felipe Araujo.**

---

# 📑 Sumário

- [📍Introdução](#-introdução)
- [👥 Descrição dos Envolvidos e dos Usuarios](#-professor-responsável)
- [📂 Estrutura do projeto](#-estrutura-do-projeto)
- [📋 Especificação Técnica de Requisitos](#-especificação-técnica-de-requisitos)
- [🗺️ Posicionamento](posicionamento)
- [Descrição da Solução]
- [Recursos do Produto]
- [📰 Regra de Negócios](#-regra-de-negócios)
- [🔭Escopo de Negócios](#-escopo-de-negócios)
---

# 📍 Introdução

**O OrganizeMe é uma plataforma global de gestão financeira desenvolvida para simplificar o controle operacional e a previsibilidade de lucros ou prejuízos de empresas de qualquer porte. Com uma abordagem intuitiva e foco em eficiência, a solução se destaca no mercado ao consolidar dados complexos em insights simples. O projeto foi construído utilizando as seguintes tecnologias:**

[![Project](https://skillicons.dev/icons?i=js,nodejs,html,css,git,github)](https://skillicons.dev)

---

## 💻 Equipe de desenvolvimento

- [David Brian](https://github.com/briandevbr)
- [Davi Perrelli](https://github.com/DaviPerrelli15)
- [Thiago Guimarães](https://github.com/thiagoguimaraessf-afk)
- [Rayanne Melo](https://github.com/rayannemelo222)
- [Kauã Heinzel](https://github.com/kauaheinzel)
- [Guilherme Cauã](https://github.com/gui-cauadev)
- [Miguel Arthur](https://github.com/miguelarthur202)
- [Carlos Henrique](https://github.com/carloshenrique1611)
- [Eduardo Willian](https://github.com/BigEddie-png)
- [Renato Vinícius](https://github.com/v1ninato)
- [Pedro Madson](https://github.com/PedroMadsonDevBr)

## 👤 Tutor

- [Filipe Araujo](https://github.com/FilipeHSAraujo)

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

## 🗺️ Posicionamento

Para empresas de qualquer porte que buscam controle financeiro sem complicações, o OrganizeMe é a plataforma global de gestão que transforma dados complexos em previsibilidade e decisões estratégicas, oferecendo clareza operacional e eficiência intuitiva em um só lugar.

## 📰 Regras de Negócio (Business Rules)

- **RN01:** O sistema deve registrar a entrada e saída de produtos.
- **RN02:** O sistema deve atualizar automaticamente a quantidade disponível - após uma movimentação.
- **RN03:** O sistema deve alertar quando um produto atingir o estoque mínimo.
- **RN04:** Cada produto deve possuir um código identificador único.
- **RN05:** O sistema deve registrar o responsável por cada movimentação.
- **RN06:** Produtos com quantidade igual a zero devem ser identificados como "Sem estoque".
- **RN07:** O acesso a determinadas funções deve depender do nível de permissão do usuário.

---

## 🔭 Escopo  de Negócios

O sistema terá como escopo o gerenciamento e controle do estoque de produtos, permitindo acompanhar a quantidade física, a quantidade disponível e a quantidade reservada durante o processo de compra.

**O sistema deverá contemplar:**

- Controle da quantidade física e disponível dos produtos;
- Reserva temporária de produtos durante o checkout;
- Registro do prazo de expiração das reservas;
- Atualização do estoque após a confirmação do pagamento;
- Baixa do estoque no momento da expedição do pedido;
- Cancelamento e liberação automática de produtos quando a reserva expirar ou o pagamento não for confirmado;
- Atualização automática das quantidades disponíveis após cada operação.
