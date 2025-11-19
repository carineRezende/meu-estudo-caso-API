# 🚀 Estudo de Caso: Sistema Completo de Produtos (API, Web e Mobile)

### 📝 Descrição do Projeto

Este projeto é um **Estudo de Caso Full Stack**, demonstrando a comunicação e integração entre três plataformas distintas:

* **API REST** (Node + Express)
* **Aplicação Web** (React + Vite)
* **Aplicação Mobile** (React Native + Expo)

O objetivo funcional é implementar um **CRUD completo de produtos** (Create, Read, Update, Delete), garantindo que as operações sejam refletidas em todas as plataformas:

* Listagem
* Cadastro
* Edição
* Exclusão
* Detalhes

Toda a navegação é organizada por rotas (Web + Mobile), consumindo a API central.

---

### 🌐 Acesso Online (Vercel)

A aplicação Web está hospedada na Vercel e pode ser acessada aqui:

👉 **[https://SEU-PROJETO.vercel.app/produtos](https://SEU-PROJETO.vercel.app/produtos)](https://meu-estudo-caso-api.vercel.app/)**

---

### 💻 Tecnologias e Dependências

| Camada | Framework / Ambiente | Bibliotecas Principais | Linguagem |
| :--- | :--- | :--- | :--- |
| **API** (`api/`) | Node.js | Express, Nodemon | JavaScript |
| **Web** (`web/`) | React + Vite | Axios, React Router DOM | JavaScript/JSX |
| **Mobile** (`mobile/`) | React Native (Expo) | Axios, Expo Router | JavaScript |

---

### 🗺️ Rotas Implementadas

#### 🌐 Aplicação Web (React Router DOM)

| URL | Página | Descrição |
| :--- | :--- | :--- |
| `/produtos` | `Produtos.jsx` | Lista todos os produtos |
| `/produtos/novo` | `FormProduto.jsx` | Cadastro de novo produto |
| `/produtos/:id` | `DetalhesProd.jsx` | Detalhes do produto |
| `/produtos/editar/:id` | `FormProduto.jsx` | Edição do produto |

#### 📱 Aplicação Mobile (Expo Router)

| Rota | Tela | Descrição |
| :--- | :--- | :--- |
| `/(produtos)/index` | `index.tsx` | Lista de produtos |
| `/(produtos)/novo` | `novo.tsx` | Cadastro de novo produto |
| `/(produtos)/[id]` | `[id].tsx` | Detalhes do produto |
| `/(produtos)/editar/[id]` | `editar/[id].tsx` | Edição do produto |

#### 🔌 API (Node + Express)

| Rota | Método | Descrição |
| :--- | :--- | :--- |
| `/produtos` | **GET** | Lista todos os produtos |
| `/produtos/:id` | **GET** | Retorna um produto específico |
| `/produtos` | **POST** | Cria um novo produto |
| `/produtos/:id` | **PUT** | Atualiza um produto específico |
| `/produtos/:id` | **DELETE** | Remove um produto específico |

---

### 🗂️ Estrutura de Pastas

meu-estudo-caso/
├── api/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   ├── produtos.json
│   └── package.json
│
├── web/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
└── mobile/
    ├── app/
    │   ├── produtos/
    │   │   ├── index.tsx
    │   │   ├── novo.tsx
    │   │   └── [id].tsx
    ├── package.json
    └── app.config.js

---

### 🔧 Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo em terminais separados:

#### 1️⃣ API (Node + Express)

```bash
cd api
npm install
npm start
```

👉 **Status:** A API estará disponível em: `http://localhost:3000/produtos`

#### 2️⃣ Web (React + Vite)

```bash
cd web
npm install
npm run dev
```

#### 3️⃣ Mobile (React Native + Expo)
```bash
cd mobile
npm install
npx expo start
```
👉 **Status**: O servidor Expo será iniciado. Abra o aplicativo Expo Go no seu dispositivo móvel e escaneie o QR Code.

## ▶️ Ordem de Execução Recomendada

É essencial iniciar a **API primeiro** para que as aplicações Web e Mobile possam consumir os dados.

1.  **Iniciar API**
    ```bash
    cd api
    npm start
    ```

2.  **Rodar Web**
    ```bash
    cd web
    npm run dev
    ```

3.  **Rodar Mobile**
    ```bash
    cd mobile
    npx expo start
    ```

⚠️ **Configuração para Mobile:** Lembre-se de configurar a URL base da API no código mobile para o seu endereço IP de rede, como: `http://SEU-IP:3000/produtos`, para que o app consiga se conectar ao servidor da sua máquin

## 📚 Créditos e Referências

* Documentação React
* Documentação React Native
* Documentação Expo
* Documentação Node/Express

