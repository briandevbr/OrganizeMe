# 📊💰 OrganizeMe

> 🌐 Leia em [Português](./README.md)

**Collaborative academic project** developed by 2nd-period Systems Analysis and Development (ADS) students at Centro Universitário Maurício de Nassau (Olinda/PE), for the Coding course led by professor Filipe Araújo. OrganizeMe aims to be a financial management and inventory control platform, with login and sign-up screens plus business rules for product movement. **The project is under development (MVP in progress).**

## 📑 Table of Contents

- [🗂️ Project Structure](#️-project-structure)
- [👥 Development Team](#-development-team)
- [⚙️ Technologies used](#️-technologies-used)
- [🚀 How to run](#-how-to-run)
- [✨ Features](#-features)
- [📰 Business Rules](#-business-rules)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🗂️ Project Structure

| Path                                   | Description                                                                    |
| -------------------------------------- | ------------------------------------------------------------------------------ |
| `back/bancoDeDados/dadosPessoais.json` | Storage for user registration/personal data                                    |
| `back/bancoDeDados/inventario.json`    | Storage for stock/inventory data                                               |
| `back/codigoFonte/cadastro.js`         | User sign-up logic                                                             |
| `back/codigoFonte/cad.js`              | Sign-up logic being consolidated/draft (still to be merged with `cadastro.js`) |
| `front/HTML/index.html`                | Application home page                                                          |
| `front/HTML/login.html`                | Login screen                                                                   |
| `front/HTML/cadastro.html`             | User sign-up screen                                                            |
| `front/CSS/estilo.css`                 | General application styles                                                     |
| `front/CSS/login.css`                  | Login screen styles                                                            |
| `front/CSS/cadastro.css`               | Sign-up screen styles                                                          |
| `front/CSS/fontes/Golos-Text.ttf`      | Custom font used in the front-end                                              |
| `front/fonts/KOLAK.ttf`                | Custom font used in the front-end                                              |
| `Icone.ico`                            | Project icon (favicon)                                                         |
| `README.md`                            | Project documentation (PT-BR)                                                  |
| `README.en.md`                         | Project documentation (EN)                                                     |

## 👥 Development Team

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

## ⚙️ Technologies used

- JavaScript
- Node.js
- HTML5
- CSS3
- Git
- GitHub

## 🚀 How to run

The project is still under development and currently has only one way to preview it (the back-end doesn't have a configured server yet):

1. Clone the repository:
   ```bash
   git clone https://github.com/briandevbr/OrganizeMe.git
   ```
2. Open the project folder in VS Code.
3. Install the **Live Server** extension.
4. Right-click `front/HTML/index.html` (or `login.html`/`cadastro.html`) and choose **"Open with Live Server"**.

## ✨ Features

- **Authentication:** login screen with e-mail format validation, password masking, and a show/hide password toggle.
- **Sign-up:** registration form with password complexity validation and a unique username field.
- **Navigation:** Login/Sign-up CTA and a profile shortcut on the home page, with conditional redirect based on whether the user is authenticated.
- **Help Center:** FAQ section (accordion) and support channels (e-mail, chat, WhatsApp).
- **Inventory control:** logs product entries/exits, automatically updates available quantity, alerts on minimum stock, and flags products as "out of stock".
- **Access control:** system functions restricted according to the user's permission level.

## 📰 Business Rules

- **RN01:** the system must log product entries and exits.
- **RN02:** the system must automatically update the available quantity after a movement.
- **RN03:** the system must alert when a product reaches the minimum stock level.
- **RN04:** each product must have a unique identifier code.
- **RN05:** the system must log who was responsible for each movement.
- **RN06:** products with a quantity of zero must be flagged as "Out of stock".
- **RN07:** access to certain functions must depend on the user's permission level.

The business scope also covers: temporary product reservation during checkout, tracking the reservation's expiration deadline, updating stock after payment confirmation, deducting stock upon order shipment, and automatically releasing reserved products when the reservation expires or payment isn't confirmed.

## 🤝 Contributing

This is a group academic project. Team contributions follow the standard Pull Request flow: create a branch, make your changes, and open a PR for review before merging into `main`.

## 📄 License

Not specified.
