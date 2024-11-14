# Sistema de Loja de Infoprodutos

Este é um aplicativo front-end feito em **Angular** para um sistema de loja de infoprodutos.

### Requisitos

- **Node.js** >= 20.
- **Angular CLI** == 17

## Instalação
### Clone o repositório:

Clone o repositório para a sua máquina local:

```bash
git clone git@github.com:joaocoelhoo/desafio-infoprodutos-fe.git
cd desafio-infoprodutos-fe
```

### Instale as Dependências

Instale as dependências do projeto usando o `npm`:

```bash
npm install
```

### Configure a API

Configure a URL da API no arquivo `src/environments/environment.development.ts`.

```typescript
export const environment = {
  apiUrl: 'http://localhost:8001'
};

```

### Execute a aplicação

Após instalar as dependências e configurar a API, inicie o servidor de desenvolvimento:

```bash
ng serve
```

O aplicativo estará disponível em [http://localhost:4200](http://localhost:4200).


## Funcionalidades

1. **Autenticação de Usuários**:
   - Login com email e senha. (`/login`)
   - Cadastro de novos usuários. (`/register`)
   - Armazenamento do token JWT no LocalStorage.

2. **Listagem de Itens**:
   - Exibição de itens disponíveis na loja de infoprodutos. (`/items`)

3. **Gestão de Itens e Usuários (Somente para Administradores)**:
   - Visualização, criação, edição e exclusão de usuários. (`/admin/items`)

   - Visualização, criação, edição e exclusão de itens. (`/admin/users`)

> **Nota**: o fluxo entre rotas está em progresso e, por isso, a navegação deve ser feita digitando a URL na barra de navegação.


## Funcionalidades futuras

1. **Filtragem de itens por categoria**;

2. **Carrinho de compras e dashboard**;

4. **Gestão de categorias de itens e papéis de usuários (admin)**;

## Referências

https://medium.com/@manjushakatakam/login-page-in-angular-creating-a-login-page-in-angular-involves-several-steps-bdbe51300159
https://www.techiediaries.com/login-signup-api-angular-17/
https://angular.dev/overview