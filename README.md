# API de Gestão de Ingressos 🎟️

Este projeto é uma API para a gestão de ingressos de eventos, permitindo operações como criação, atualização, exclusão, consulta e venda de ingressos.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução do JavaScript no servidor.
- **Express**: Framework para criação de APIs.
- **PostgreSQL**: Banco de dados relacional.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **cors**: Habilitação de CORS para a API.
- **nodemon**: Ferramenta para desenvolvimento com reinicialização automática do servidor.

## Instalação e Configuração

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd AtividadeBack-end-Gestao-de-Ingressos
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
    PORT=5000
    DB_USER=postgres
    DB_HOST=localhost
    DB_NAME=bilheteria
    DB_PASSWORD=amods
    DB_PORT=7777
   ```

4. **Configure o banco de dados**:
   Execute o script SQL localizado em `src/database/schema.sql` para criar o banco de dados e a tabela de ingressos:
   ```bash
   psql -U <seu_usuario> -f src/database/schema.sql
   ```

5. **Inicie o servidor**:
     ```
     npm run dev
     ```

## Endpoints

### Ingressos

- **GET** `/api/tickets`: Retorna todos os ingressos.
- **GET** `/api/tickets/:id`: Retorna um ingresso pelo ID.
- **POST** `/api/tickets`: Cria um novo ingresso.
- **PUT** `/api/tickets/:id`: Atualiza um ingresso existente.
- **DELETE** `/api/tickets/:id`: Exclui um ingresso.

### Venda de Ingressos

- **POST** `/api/venda`: Realiza a venda de ingressos.

#### Exemplo para Venda:
```json
{
  "id": 1,
  "quantidade": 2,
  "preco": 150.00
}
```

## Estrutura do Projeto

```
AtividadeBack-end-Gestao-de-Ingressos/
├── src/
│   ├── config/
│   │   └── database.js      
│   ├── controllers/
│   │   └── ticketController.js 
│   ├── models/
│   │   └── ticketModel.js    
│   ├── routes/
│   │   └── ticketRoutes.js   
│   ├── database/
│   │   └── schema.sql        
├── server.js                 
├── package.json              
└── README.md                 
```
## Licença

Este projeto está licenciado sob a licença MIT.

