# 📊💰 OrganizeMe

> 🌐 Read this in [English](./README.en.md)

**Projeto acadêmico colaborativo** desenvolvido por alunos do 2º período de Análise e Desenvolvimento de Sistemas (ADS) do Centro Universitário Maurício de Nassau (Olinda/PE), na disciplina de Coding do professor Filipe Araújo. O OrganizeMe se propõe a ser uma plataforma de gestão financeira e controle de estoque, com telas de login, cadastro e regras de negócio para movimentação de produtos. **Projeto em desenvolvimento (MVP em construção).**

## 📑 Sumário

- [🗂️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [👥 Equipe de Desenvolvimento](#-equipe-de-desenvolvimento)
- [⚙️ Tecnologias usadas](#️-tecnologias-usadas)
- [🚀 Como rodar](#-como-rodar)
- [✨ Funcionalidades](#-funcionalidades)
- [📰 Regras de Negócio](#-regras-de-negócio)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

## 🗂️ Estrutura do Projeto

| Caminho                                | Descrição                                                                             |
| -------------------------------------- | ------------------------------------------------------------------------------------- |
| `back/bancoDeDados/dadosPessoais.json` | Persistência dos dados de cadastro/pessoais dos usuários                              |
| `back/bancoDeDados/inventario.json`    | Persistência dos dados de estoque/inventário de produtos                              |
| `back/codigoFonte/cadastro.js`         | Lógica de cadastro de usuários                                                        |
| `back/codigoFonte/cad.js`              | Lógica de cadastro em consolidação/rascunho (ainda a ser unificado com `cadastro.js`) |
| `front/HTML/index.html`                | Página inicial da aplicação                                                           |
| `front/HTML/login.html`                | Tela de login                                                                         |
| `front/HTML/cadastro.html`             | Tela de cadastro de usuários                                                          |
| `front/CSS/estilo.css`                 | Estilos gerais da aplicação                                                           |
| `front/CSS/login.css`                  | Estilos da tela de login                                                              |
| `front/CSS/cadastro.css`               | Estilos da tela de cadastro                                                           |
| `front/CSS/fontes/Golos-Text.ttf`      | Fonte customizada usada no front-end                                                  |
| `front/fonts/KOLAK.ttf`                | Fonte customizada usada no front-end                                                  |
| `Icone.ico`                            | Ícone (favicon) do projeto                                                            |
| `README.md`                            | Documentação do projeto (PT-BR)                                                       |
| `README.en.md`                         | Documentação do projeto (EN)                                                          |

## 👥 Equipe de Desenvolvimento

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

**Tutor:** [Filipe Araújo](https://github.com/FilipeHSAraujo)

## ⚙️ Tecnologias usadas

- JavaScript
- Node.js
- HTML5
- CSS3
- Git
- GitHub

## 🚀 Como rodar

O projeto ainda está em desenvolvimento e por enquanto só tem uma forma de visualização (o back-end não tem um servidor configurado ainda):

1. Clone o repositório:
   ```bash
   git clone https://github.com/briandevbr/OrganizeMe.git
   ```
2. Abra a pasta do projeto no VS Code.
3. Instale a extensão **Live Server**.
4. Clique com o botão direito em `front/HTML/index.html` (ou `login.html`/`cadastro.html`) e escolha **"Open with Live Server"**.

## ✨ Funcionalidades

- **Autenticação:** tela de login com validação de e-mail, máscara de senha e ícone de visibilidade (mostrar/ocultar senha).
- **Cadastro:** formulário de sign-up com validação de complexidade de senha e definição de nome de usuário único.
- **Navegação:** CTA de acesso a Login/Cadastro e atalho de perfil na página inicial, com redirecionamento condicional conforme o usuário estar autenticado.
- **Central de Ajuda:** seção de FAQ (accordion) e canais de suporte (e-mail, chat, WhatsApp).
- **Controle de estoque:** registro de entrada/saída de produtos, atualização automática de quantidade disponível, alerta de estoque mínimo e identificação de produtos "sem estoque".
- **Controle de acesso:** funções do sistema restritas conforme o nível de permissão do usuário.

## 📰 Regras de Negócio

- **RN01:** o sistema deve registrar a entrada e saída de produtos.
- **RN02:** o sistema deve atualizar automaticamente a quantidade disponível após uma movimentação.
- **RN03:** o sistema deve alertar quando um produto atingir o estoque mínimo.
- **RN04:** cada produto deve possuir um código identificador único.
- **RN05:** o sistema deve registrar o responsável por cada movimentação.
- **RN06:** produtos com quantidade igual a zero devem ser identificados como "Sem estoque".
- **RN07:** o acesso a determinadas funções deve depender do nível de permissão do usuário.

Além disso, o escopo de negócio prevê: reserva temporária de produtos durante o checkout, registro do prazo de expiração da reserva, atualização do estoque após confirmação de pagamento, baixa do estoque na expedição do pedido, e liberação automática de produtos reservados quando a reserva expira ou o pagamento não é confirmado.

## 🤝 Contribuindo

Este é um projeto acadêmico em grupo. Contribuições da equipe seguem o fluxo padrão de Pull Request: crie uma branch, faça as alterações e abra um PR para revisão antes do merge em `main`.

## 📄 Licença

Não especificada.
