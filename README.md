<div align="center">
  <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="250" alt="Angular Logo">
  <h1>Task Manager - Frontend</h1>
  <p>
    <strong>Interface de utilizador moderna e reativa para a Task API, construída com Angular.</strong>
  </p>
  <p>
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
    <img src="https://img.shields.io/badge/Angular-v17+-red?logo=angular" alt="Angular Version">
    <img src="https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript" alt="TypeScript Version">
    <img src="https://img.shields.io/badge/SCSS-Styled-pink?logo=sass" alt="SCSS">
  </p>
</div>

---

## 🔗 Repositório do Backend

**Importante:** Esta é uma aplicação frontend que consome uma API. O projeto backend (construído em NestJS) precisa de estar em execução para que esta aplicação funcione.

➡️ **Repositório do Backend:** [Link para o repositório da API NestJS](https://github.com/gacneto/angular-task-manager-app-backend.git)

---

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Features](#-features)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🚀 Como Rodar a Aplicação](#-como-rodar-a-aplicação)
- [📸 Screenshots](#-screenshots)

---

## 📖 Sobre o Projeto

Este projeto é a interface de utilizador (UI) para a **Task API**. Ele oferece uma experiência de utilizador fluida e reativa para o registo, autenticação e gestão de tarefas. A aplicação foi construída utilizando as mais recentes práticas do Angular, incluindo componentes **standalone**, **Reactive Forms** e um fluxo de autenticação seguro baseado em **JWT**.

O design é limpo, profissional e responsivo, adaptando-se a diferentes tamanhos de ecrã, desde telemóveis a monitores de desktop.

---

## ✨ Features

- ✅ **Fluxo de Autenticação Completo**: Páginas e lógica para **Registo** e **Login** de utilizadores.
- 🔐 **Gestão de Token JWT**: O token de acesso é guardado no `localStorage` após o login.
- 🚀 **Interceptor HTTP**: Anexa automaticamente o token JWT a todas as requisições para endpoints protegidos da API.
- 🛡️ **Rotas Protegidas**: Utilização de Guardas de Rota (`CanActivate`) para proteger o dashboard, impedindo o acesso de utilizadores não autenticados.
- 🗂️ **CRUD de Tarefas Completo**:
    - **C**reate: Formulário para criar novas tarefas.
    - **R**ead: Visualização da lista de tarefas do utilizador.
    - **U**pdate: Funcionalidade para alterar o status da tarefa.
    - **D**elete: Funcionalidade para apagar tarefas.
- 📝 **Formulários Reativos**: Uso de `ReactiveFormsModule` para formulários robustos com validação em tempo real.
- 📱 **Design Responsivo**: Layout que se adapta a desktops, tablets e telemóveis.

---

## 🛠️ Tecnologias Utilizadas

- **Angular (v17+)**: Framework principal para a construção da interface.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **SCSS**: Pré-processador de CSS para estilos mais organizados e poderosos.
- **RxJS**: Biblioteca para programação reativa, usada extensivamente no Angular, especialmente para lidar com chamadas HTTP.
- **Angular CLI**: Ferramenta de linha de comando para gerir o projeto.

---

## 🚀 Como Rodar a Aplicação

Siga os passos abaixo para configurar e executar o projeto no seu ambiente local.

### **Pré-requisitos**

- [Git](https://git-scm.com)
- [Node.js (v18 ou superior)](https://nodejs.org/en/)
- **A API do Backend (NestJS) deve estar em execução** em `http://localhost:3000`.

### **Passo a Passo**

1.  **Clone o repositório:**
    ```bash
    git clone <https://github.com/gacneto/angular-task-manager-app-frontend.git>
    cd angular-task-manage-app-frontend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute a aplicação:**
    ```bash
    ng serve
    ```
    A aplicação estará disponível em `http://localhost:4200/`. Ela irá conectar-se automaticamente à API que está a ser executada em `http://localhost:3000`.

---

## 📸 Screenshots 

**Tela de Login**
<img width="1347" height="638" alt="Screenshot 2025-09-23 093017" src="https://github.com/user-attachments/assets/8eff148e-432d-4578-a2e2-d9c29735bd1a" />

**Tela de Registro**
<img width="1337" height="637" alt="Screenshot 2025-09-23 093113" src="https://github.com/user-attachments/assets/dc318369-95ca-4566-bc0e-2fb4251c88ba" />

**Dashboard de Tarefas**
<img width="1346" height="631" alt="Screenshot 2025-09-23 093129" src="https://github.com/user-attachments/assets/81c519da-df48-4e6e-8805-3e869b95fa21" />
<img width="1337" height="636" alt="Screenshot 2025-09-23 093145" src="https://github.com/user-attachments/assets/77a611d0-b821-4301-a4d2-658765e12c51" />
<img width="1349" height="631" alt="Screenshot 2025-09-23 093236" src="https://github.com/user-attachments/assets/f086debd-dae9-4210-bcf1-d5c29f410da0" />

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<div align="center">
  Feito por [Lucas Barcelar](https://github.com/gacneto)
</div>
