# 🧾 API-ESTOQUE

API RESTful para **gestão de estoque de produtos**, com autenticação de usuários e controle de movimentações (entrada/saída), desenvolvida em **Node.js + Express** com banco de dados **MySQL/MariaDB**.

---

## 🚀 Funcionalidades

✔️ Autenticação de usuários com JWT  
✔️ Hash de senhas com bcrypt  
✔️ Gestão de usuários (admin e funcionário)  
✔️ CRUD de produtos  
✔️ Controle de organizações  
✔️ Registro de movimentações de estoque  
✔️ Suporte a relações com chaves estrangeiras  
✔️ Deploy pronta para produção

---

## 🛠 Tecnologias

Este projeto utiliza:

| Tecnologia | Descrição |
|------------|-----------|
| `Node.js` | Runtime JavaScript |
| `Express` | Framework web |
| `Sequelize` | ORM para banco |
| `MySQL/MariaDB` | Banco de dados |
| `JWT` | Autenticação |
| `bcrypt` | Criptografia de senha |
| `Docker` + `docker-compose` | Para execução isolada |

---

## 🧱 📁 Estrutura do Projeto

📦API-ESTOQUE
┣ 📂src
┣ ┣ index.js
┣ ┣ ...
┣ 📄Dockerfile
┣ 📄docker-compose.yml
┣ 📄.gitignore
┣ 📄package.json


---

## ⚙️ Pré-requisitos

Você precisa ter instalado:

✔️ Node.js  
✔️ Docker & Docker-Compose (opcional — recomendado)  
✔️ MySQL/MariaDB funcionando

---

## 🚀 Como rodar localmente

### 🐳 Com Docker (recomendado)
```sh
docker compose up --build
.

🧑‍💻 Sem Docker
npm install
Configure seu .env com variáveis de conexão e então:
npm start

📌 Endpoints principais
Método	Rota	Descrição
POST	/login	Login de usuário
GET	/produtos	Lista produtos
POST	/produtos	Cria produto
PUT	/produtos/:id	Atualiza produto
DELETE	/produtos/:id	Remove produto
POST	/movimentacoes	Cria movimentação


📄 Licença
Este projeto está sob a licença MIT.

📬 Contato
Gustavo Carvalho De Oliveira 
gustavoco2010@hotmail.com
