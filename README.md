# Culture Code

***Descrição***

O Culture Code é uma aplicação backend de gamificação desenvolvida para uma empresa. A aplicação foi construída com Nest.js e inclui funcionalidades de autenticação, gerenciamento de usuários, produtos e jóias. O sistema utiliza PostgreSQL como banco de dados e JWT para autenticação.

---

## **Tecnologias Utilizadas**

- **Nest.js**: Framework backend para Node.js.
- **TypeORM**: ORM utilizado para interagir com o PostgreSQL.
- **PostgreSQL**: Banco de dados relacional utilizado no projeto.
- **JWT (JSON Web Token)**: Para autenticação e autorização.
- **Swagger**: Para documentação das rotas da API.

---

## **Funcionalidades**

### **Funcionalidades Públicas**
- **Autenticação**:
  - Registro de usuários.
  - Login com geração de token JWT.
- **Produtos**:
  - Buscar todos os produtos com paginação e filtros.

### **Funcionalidades Privadas (Usuários)**
- Atualizar informações do usuário (self-update ou admin).
- Soft delete de usuários.
- Buscar usuários por ID (admin).
- Rota de perfil do usuário com informações detalhadas.

### **Funcionalidades Privadas (Produtos)**
- CRUD de produtos (somente admin).
- Resgatar produtos e descontar jóias do usuário.

### **Funcionalidades Privadas (Jóias)**
- CRUD de jóias (somente admin).
- Atribuir jóias a usuários.

---

## **Instalação e Execução**

### **Requisitos**
- Node.js (v16 ou superior)
- PostgreSQL

### **Passos para Instalar**

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/culture-code.git
   cd culture-code
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env` com as credenciais do banco de dados:
   ```plaintext
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=sua_senha
   DB_NAME=culture_code
   ```

4. Execute a aplicação:
   ```bash
   npm run start:dev
   ```

5. Acesse o Swagger para documentação:
   ```plaintext
   http://localhost:3000/api
   ```

---

## **Estrutura do Banco de Dados**

As entidades principais incluem:
- **Users**:
  - ID, Username, Password, IsActive, CreatedAt, UpdatedAt.
- **Products**:
  - ID, Name, Price, IsAvailable, CreatedAt, UpdatedAt.
- **Jewels**:
  - ID, Name, Value, AssignedTo, CreatedAt, UpdatedAt.

---

## **Rotas Principais**

### **Autenticação**
- `POST /auth/register`: Registra um novo usuário.
- `POST /auth/login`: Autentica um usuário e retorna um token JWT.

### **Usuários**
- `PATCH /users/:id`: Atualiza informações do usuário.
- `DELETE /users/:id`: Soft delete de um usuário.
- `GET /users/profile`: Retorna informações detalhadas do usuário logado.

### **Produtos**
- `GET /products`: Lista todos os produtos com paginação e filtros.
- `POST /products`: Cria um produto (somente admin).
- `POST /products/:id/redeem`: Resgata um produto e desconta jóias do usuário.

### **Jóias**
- `POST /jewels`: Cria uma jóia (somente admin).
- `POST /jewels/:id/assign`: Atribui uma jóia a um usuário.

---

## **Testes**

- Testes foram implementados para os serviços, controladores e módulos principais.
- Execute os testes com:
  ```bash
  npm run test
  ```

---

## **Deploy**

- O projeto está pronto para ser implantado em plataformas como Vercel, Railway, Render ou AWS.

---

**Autor:** Mozar Lima
