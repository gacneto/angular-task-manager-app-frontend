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

➡️ **Repositório do Backend:** [Link para o repositório da API NestJS](https://github.com/gacneto/task-manager-app-backend.git)

---

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Features](#-features)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🚀 Como Rodar a Aplicação](#-como-rodar-a-aplicação)
- [📸 Screenshots (Sugestão)](#-screenshots-sugestão)

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
    git clone <https://github.com/gacneto/task-manager-app-frontend.git>
    cd task-manage-app-frontend
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

## 📸 Screenshots (Sugestão)

Para tornar o seu README ainda mais profissional, adicione screenshots da sua aplicação em funcionamento!

*(Aqui você pode colocar uma imagem da sua tela de login)*
**Tela de Login**

*(E aqui uma imagem do seu dashboard com algumas tarefas)*
**Dashboard de Tarefas**
