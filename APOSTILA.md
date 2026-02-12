# 📚 APOSTILA COMPLETA - Movies App

## Curso Fullstack: Vue.js 3 + .NET API

> ⚠️ **IMPORTANTE:** Todos os códigos desta apostila são **idênticos** aos arquivos do projeto real.  
> Siga cada passo e copie os códigos exatamente como apresentados.

---

# PARTE 1: CONFIGURAÇÃO DO AMBIENTE

Nesta parte você vai instalar todas as ferramentas necessárias.

---

## Índice da Parte 1

1. [Requisitos Mínimos](#1-requisitos-mínimos)
2. [Instalando o Node.js](#2-instalando-o-nodejs)
3. [Instalando o Visual Studio Code](#3-instalando-o-visual-studio-code)
4. [Instalando o Visual Studio Community](#4-instalando-o-visual-studio-community)
5. [Instalando o Git](#5-instalando-o-git)
6. [Instalando o .NET SDK](#6-instalando-o-net-sdk)
7. [Configurando o Backend](#7-configurando-o-backend)
8. [Resolvendo Problemas Comuns](#8-resolvendo-problemas-comuns)

---

## 1. Requisitos Mínimos

| Item                | Mínimo      | Recomendado  |
| ------------------- | ----------- | ------------ |
| Sistema Operacional | Windows 10  | Windows 11   |
| Memória RAM         | 4 GB        | 8 GB ou mais |
| Espaço em Disco     | 5 GB livres | 10 GB livres |
| Processador         | Dual-core   | Quad-core    |
| Internet            | Necessária  | Banda larga  |

---

## 2. Instalando o Node.js

O Node.js é necessário para executar o frontend (Vue.js).

### Passo 1: Baixar o Node.js
1. Abra seu navegador (Chrome, Edge, Firefox)
2. Acesse: **https://nodejs.org**
3. Clique no botão verde **"LTS"** (versão estável)
4. O download começará automaticamente

### Passo 2: Instalar
1. Encontre o arquivo baixado (geralmente em `Downloads`)
2. Nome do arquivo: `node-vXX.XX.X-x64.msi`
3. Dê **duplo clique** no arquivo
4. Clique **"Next"** em todas as telas
5. Marque a opção **"Automatically install necessary tools"**
6. Clique **"Install"**
7. Aguarde a instalação (pode demorar alguns minutos)
8. Clique **"Finish"**

### Passo 3: Verificar a Instalação
1. Pressione `Windows + R`
2. Digite `cmd` e pressione Enter
3. No terminal preto, digite:
```bash
node --version
```
4. Deve aparecer algo como: `v20.11.0`
5. Digite também:
```bash
npm --version
```
6. Deve aparecer algo como: `10.2.4`

✅ **Node.js instalado com sucesso!**

---

## 3. Instalando o Visual Studio Code

O VS Code é o editor de código que usaremos.

### Passo 1: Baixar
1. Acesse: **https://code.visualstudio.com**
2. Clique no botão azul **"Download for Windows"**

### Passo 2: Instalar
1. Execute o arquivo `VSCodeUserSetup-x64-X.XX.X.exe`
2. Aceite os termos de licença
3. **IMPORTANTE:** Marque todas estas opções:
   - ☑️ Criar um ícone na área de trabalho
   - ☑️ Adicionar ação "Abrir com Code" ao menu de contexto
   - ☑️ Adicionar ao PATH
4. Clique **"Install"**
5. Clique **"Finish"**

### Passo 3: Instalar Extensões Úteis
1. Abra o VS Code
2. Clique no ícone de quadradinhos na barra lateral esquerda (Extensions)
3. Pesquise e instale:
   - **Vue - Official** (para Vue.js)
   - **C#** (para o backend)
   - **Material Icon Theme** (ícones bonitos)
   - **Portuguese (Brazil) Language Pack** (tradução)

✅ **VS Code instalado com sucesso!**

---

## 4. Instalando o Visual Studio Community

O Visual Studio Community é a IDE usada para desenvolver e executar o backend (.NET 8.0).

### Passo 1: Baixar
1. Acesse: **https://visualstudio.microsoft.com/pt-br/vs/community/**
2. Clique no botão **"Download gratuito"**

### Passo 2: Instalar
1. Execute o arquivo `VisualStudioSetup.exe`
2. O **Visual Studio Installer** será aberto
3. Na tela de **Cargas de trabalho**, marque:
   - ☑️ **Desenvolvimento Web e em ASP.NET** (obrigatório para .NET 8.0)
4. Clique **"Instalar"**
5. Aguarde o download e instalação (pode demorar 10-30 minutos)
6. Ao finalizar, clique **"Iniciar"**

### Passo 3: Configuração Inicial
1. Na primeira abertura, escolha o tema de cores (Escuro é o mais popular)
2. Clique **"Iniciar o Visual Studio"**

### Passo 4: Verificar
1. Abra o Visual Studio Community
2. Vá em **Help > About Microsoft Visual Studio**
3. Deve aparecer: `Visual Studio Community 2022 - Version 17.X.X`

### Para que usamos o Visual Studio Community?

| Função             | Descrição                                   |
| ------------------ | ------------------------------------------- |
| Executar o Backend | Rodar a API .NET 8.0 com debug              |
| Gerenciar NuGet    | Instalar pacotes como EF Core, JWT, Npgsql  |
| Swagger            | Testar endpoints diretamente no navegador   |
| Debug              | Colocar breakpoints e inspecionar variáveis |

> 💡 **Dica:** O VS Code é usado para o **frontend** (Vue.js) e o Visual Studio Community para o **backend** (.NET).

✅ **Visual Studio Community instalado com sucesso!**

---

## 5. Instalando o Git

O Git é usado para baixar e versionar código.

### Passo 1: Baixar
1. Acesse: **https://git-scm.com/download/windows**
2. O download começará automaticamente

### Passo 2: Instalar
1. Execute o arquivo `Git-X.XX.X-64-bit.exe`
2. Clique **"Next"** em todas as telas (configurações padrão estão OK)
3. Na tela de editor, escolha **"Use Visual Studio Code as Git's default editor"**
4. Continue clicando **"Next"**
5. Clique **"Install"**
6. Clique **"Finish"**

### Passo 3: Verificar
1. Abra o CMD (`Windows + R`, digite `cmd`)
2. Digite:
```bash
git --version
```
3. Deve aparecer: `git version 2.XX.X`

✅ **Git instalado com sucesso!**

---

## 6. Instalando o .NET SDK

O .NET é necessário para executar o backend (API em C#).

### Passo 1: Baixar
1. Acesse: **https://dotnet.microsoft.com/pt-br/download/dotnet**
2. Clique em **".NET 8.0"**
3. Clique em **"Download .NET SDK x64"**

### Passo 2: Instalar
1. Execute o arquivo `dotnet-sdk-8.X.XXX-win-x64.exe`
2. Clique **"Install"**
3. Aguarde (pode demorar alguns minutos)
4. Clique **"Close"**

### Passo 3: Verificar
1. **FECHE** o CMD se estiver aberto
2. Abra um **novo** CMD
3. Digite:
```bash
dotnet --version
```
4. Deve aparecer: `8.0.XXX`

✅ **.NET SDK instalado com sucesso!**

---

## 7. Configurando o Backend (.NET 8.0 + EF Core + JWT)

> ⚠️ **IMPORTANTE:** O backend (.NET 8.0) **NÃO será alterado** durante a aula de frontend.  
> Ele já está pronto e serve como referência de endpoints para o frontend.

---

### Passo 1: Baixar o Projeto

**Opção A - Com Git:**
```bash
cd C:\Users\SeuNome\Documents
git clone https://github.com/usuario/Movies.API.git
cd Movies.API
```

**Opção B - Com ZIP:**
1. Baixe o ZIP do projeto
2. Extraia para `C:\Users\SeuNome\Documents\Movies.API`

### Passo 2: Abrir no VS Code
1. Abra o VS Code
2. Vá em **File > Open Folder**
3. Selecione a pasta `Movies.API`

### Passo 3: Acessar a pasta do projeto
```bash
cd .\Movies.API\
```

### Passo 4: Restaurar dependências
```bash
dotnet restore
```

---

### 📦 Pacotes NuGet Necessários

Instalar via **Gerenciador de Pacotes NuGet** do projeto (botão direito no projeto > Manage NuGet Packages):

| Pacote                                               | Função                            |
| ---------------------------------------------------- | --------------------------------- |
| `Npgsql.EntityFrameworkCore.PostgreSQL`              | PostgreSQL para EF Core           |
| `Microsoft.EntityFrameworkCore`                      | Entity Framework Core             |
| `Microsoft.EntityFrameworkCore.Design`               | Ferramentas de migration          |
| `Microsoft.AspNetCore.Authentication.JwtBearer` (v8) | Autenticação Bearer/JWT           |
| `System.IdentityModel.Tokens.Jwt`                    | Geração e validação de tokens JWT |

---

### 🧱 Configuração do Entity Framework Core

**1️⃣ Instalar o dotnet-ef (ferramenta global):**
```bash
dotnet tool install --global dotnet-ef
```

**2️⃣ Instalar o pacote Design no projeto:**
```bash
dotnet add package Microsoft.EntityFrameworkCore.Design
```

**3️⃣ Criar a primeira migration:**
```bash
dotnet ef migrations add DatabaseCreation
```

**4️⃣ Atualizar o banco de dados (criar tabelas):**
```bash
dotnet ef database update
```

> ⚠️ **Observação sobre erros de migration:**  
> Se ocorrer erro no código ou estrutura:
> 1. Apague a pasta `Migrations/`
> 2. Crie novamente: `dotnet ef migrations add DatabaseCreation`
> 3. Atualize: `dotnet ef database update`

---

### 🗑️ Exclusão e Recriação do Banco (se necessário)

Se o banco foi criado sem as tabelas `Users` e `Movies`:

1. **Excluir** o database `movies` no pgAdmin
2. Criar nova migration que contenha obrigatoriamente:
   - Tabela **Users**
   - Tabela **Movies**
3. Atualizar o banco novamente:
```bash
dotnet ef database update
```

O banco será recriado automaticamente com as duas tabelas.

---

### 🔐 Configuração de Autenticação (JWT Bearer Token)

O backend utiliza **JWT (JSON Web Token)** para proteger os endpoints.

#### O que é JWT?

```
1. Usuário envia credenciais (username + password)
2. Backend valida e gera um TOKEN (string codificada)
3. Frontend guarda o token no localStorage
4. Em toda requisição, o frontend envia o token no header
5. Backend valida o token e libera o acesso
```

#### Configuração no appsettings.json:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=127.0.0.1;Port=5433;Database=movies;Username=postgres;Password=123456"
  },
  "JwtSettings": {
    "Key": "YourStrongSecretKeyHere1234567890",
    "Issuer": "YourAppIssuer",
    "Audience": "YourAppAudience",
    "DurationMinutes": 60
  }
}
```

| Campo             | Função                                |
| ----------------- | ------------------------------------- |
| `Key`             | Chave secreta para assinar o token    |
| `Issuer`          | Quem emitiu o token (backend)         |
| `Audience`        | Para quem o token é válido (frontend) |
| `DurationMinutes` | Tempo de validade do token (60 min)   |

#### Configuração no Program.cs (.NET 8.0):

```csharp
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Movies.API.Authentication;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// Lê configurações do JWT
var jwtSettings = builder.Configuration.GetSection("JwtSettings").Get<JwtSettings>()
    ?? throw new InvalidOperationException("JwtSettings section is not configured. Please add JwtSettings in appsettings.json.");

// Configura autenticação JWT
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtSettings.Issuer,
            ValidAudience = jwtSettings.Audience,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Key ?? string.Empty))
        };
    });

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });

    var securityScheme = new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Enter: Bearer {your token}"
    };

    c.AddSecurityDefinition("Bearer", securityScheme);

    var securityRequirement = new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                },
                In = ParameterLocation.Header
            },
            new List<string>()
        }
    };

    c.AddSecurityRequirement(securityRequirement);
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

```

---

### 🔓 O que é [Authorize] e [AllowAnonymous]?

| Atributo           | Função                                              |
| ------------------ | --------------------------------------------------- |
| `[Authorize]`      | **Exige** token JWT válido. Sem token → erro 401    |
| `[AllowAnonymous]` | **Libera** o método para acesso público (sem token) |

#### Exemplo no UserController:

```csharp
[ApiController]
[Route("api/[controller]")]
[Authorize]                    // ← TODO o controller exige JWT
public class UserController : ControllerBase
{
    [AllowAnonymous]           // ← MAS este método é público (sem JWT)
    [HttpPost]                 // POST /api/User → Cadastro livre
    public IActionResult Create([FromBody] UserCreateRequest request)
    {
        // Qualquer pessoa pode criar uma conta
    }

    [HttpGet("{id:int}")]      // GET /api/User/1 → Precisa de JWT
    public IActionResult GetById(int id) { ... }
}
```

#### Por que o cadastro é público?

> **Como alguém pode criar uma conta se precisa estar logado para criar uma conta?**

Por isso `[AllowAnonymous]` no `Create` é necessário e seguro:
- ✅ Permite cadastro sem login (essencial para novos usuários)
- ✅ A senha é criptografada antes de salvar no banco
- ✅ O token JWT **só é emitido** após login com credenciais válidas
- ✅ Todas as outras rotas continuam protegidas por `[Authorize]`

---

### 👤 Criando o Primeiro Usuário (Administrador)

> ⚠️ **Regra de Arquitetura (Muito Importante):**  
> Todo sistema deve iniciar com um **usuário administrador**.  
> O administrador é essencial para gerenciar usuários, controlar permissões e garantir a segurança do sistema.

#### Passo a passo para criar o primeiro usuário:

**Opção A - Via Swagger (durante desenvolvimento):**
1. Executar o backend: `dotnet run`
2. Acessar: `https://localhost:7185/swagger`
3. Expandir `POST /api/User`
4. Clicar em "Try it out"
5. Preencher o body:
```json
{
  "username": "admin",
  "password": "admin123"
}
```
6. Clicar em "Execute"
7. Resposta esperada: `"User created with success!"`

**Opção B - Via Frontend (após criar a tela de cadastro):**
1. Acessar `http://localhost:3000/register`
2. Preencher usuário e senha
3. Clicar em "Cadastrar"

---

### 🔑 Login e Autorização

Após criar o usuário:

1. **Fazer login** via `POST /api/Login`
2. O backend retorna o **token JWT**
3. Usar o token no **header Authorization** de todas as requisições protegidas:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### No Swagger:
1. Fazer login e copiar o token
2. Clicar em **"Authorize"** (cadeado no topo)
3. Digitar: `Bearer {seu_token_aqui}`
4. Clicar em "Authorize"
5. Agora todas as rotas protegidas funcionam

---

### 📋 Mapa Completo de Endpoints

#### Endpoints Públicos (sem JWT):

| Método | Rota         | Ação              | Body                     |
| ------ | ------------ | ----------------- | ------------------------ |
| `POST` | `/api/User`  | Cadastrar usuário | `{ username, password }` |
| `POST` | `/api/Login` | Fazer login       | `{ username, password }` |

#### Endpoints Protegidos (com JWT):

| Método   | Rota                 | Ação                     | Body                             |
| -------- | -------------------- | ------------------------ | -------------------------------- |
| `GET`    | `/api/User/{id}`     | Buscar usuário por ID    | -                                |
| `PUT`    | `/api/User/{id}`     | Atualizar usuário        | `{ username, password }`         |
| `DELETE` | `/api/User/{id}`     | Deletar usuário          | -                                |
| `GET`    | `/api/User/get-all`  | Listar todos os usuários | -                                |
| `POST`   | `/api/Movie`         | Criar filme              | `{ title, posterUrl, overview }` |
| `GET`    | `/api/Movie/{id}`    | Buscar filme por ID      | -                                |
| `PUT`    | `/api/Movie/{id}`    | Atualizar filme          | `{ title, posterUrl, overview }` |
| `DELETE` | `/api/Movie/{id}`    | Deletar filme            | -                                |
| `GET`    | `/api/Movie/get-all` | Listar todos os filmes   | -                                |

#### Fluxo Completo de Autenticação:

```
┌─────────────────────────────────────────────────────┐
│  1. CADASTRO (público)                              │
│     POST /api/User  { username, password }          │
│     → "User created with success!"                  │
├─────────────────────────────────────────────────────┤
│  2. LOGIN (público)                                 │
│     POST /api/Login  { username, password }         │
│     → "Login successfull! Jwt: eyJhbGci..."         │
├─────────────────────────────────────────────────────┤
│  3. USAR TOKEN (protegido)                          │
│     GET /api/Movie/get-all                          │
│     Header: Authorization: Bearer eyJhbGci...       │
│     → [ { id, title, posterUrl, overview }, ... ]   │
└─────────────────────────────────────────────────────┘
```

---

### Passo 5: Confiar no certificado HTTPS
```bash
dotnet dev-certs https --trust
```

### Passo 6: Executar o Backend
```bash
dotnet run
```
Deve aparecer:
```
Now listening on: https://localhost:7185
```

✅ **Backend configurado!** Deixe esse terminal rodando.

> 📌 **Agora siga para a Parte 2** para criar o frontend Vue.js!

---

## 8. Resolvendo Problemas Comuns

### ❌ Erro: "node não é reconhecido como comando"
**Solução:** Reinicie o computador após instalar o Node.js

### ❌ Erro: "dotnet não é reconhecido como comando"  
**Solução:** Reinicie o computador após instalar o .NET

### ❌ Erro de certificado HTTPS
**Solução:** Execute:
```bash
dotnet dev-certs https --trust
```

### ❌ Erro: "npm install" demora muito
**Solução:** Isso é normal na primeira vez. Aguarde.

---

## Checklist da Parte 1

Antes de continuar, verifique:

- [ ] Node.js instalado (`node --version` funciona)
- [ ] VS Code instalado com extensões
- [ ] Git instalado (`git --version` funciona)
- [ ] .NET instalado (`dotnet --version` funciona)
- [ ] Backend rodando na porta 7185

---

---

# PARTE 2: CRIANDO O FRONTEND DO ZERO

Nesta parte você vai criar o frontend Vue.js passo a passo.

---

## Índice da Parte 2

1. [Criando o Projeto com Vite](#1-criando-a-pasta-do-frontend)
2. [Atualizando o package.json](#2-atualizando-o-packagejson)
3. [Estrutura de Pastas](#3-estrutura-de-pastas)
4. [Criando o index.html](#4-criando-o-indexhtml)
5. [Criando o vite.config.js](#5-criando-o-viteconfigjs)
6. [Criando o main.js](#6-criando-o-mainjs)
7. [Criando o api.js](#7-criando-o-apijs)
8. [Criando o Store (Vuex)](#8-criando-o-store-vuex)
9. [Criando o Router](#9-criando-o-router)
10. [Criando os Componentes](#10-criando-os-componentes)
11. [Criando as Páginas](#11-criando-as-páginas)
12. [Criando o App.vue](#12-criando-o-appvue)
13. [Executando o Projeto](#13-executando-o-projeto)

---

## 1. Criando a Pasta do Frontend

### Passo 1: Abrir o Terminal
1. No VS Code (com a pasta Movies.API aberta)
2. Pressione `` Ctrl + ` `` para abrir o terminal
3. Certifique-se de estar na pasta raiz:
```bash
cd C:\Users\SeuNome\Documents\Movies.API
```

### Passo 2: Criar o Projeto com Vite
Execute o comando abaixo para criar um novo projeto Vue.js com Vite:

```bash
npm create vite@latest frontend -- --template vue
```

Quando perguntar, responda:
- **Select a framework:** Vue
- **Select a variant:** JavaScript

### Passo 3: Entrar na Pasta
```bash
cd frontend
```

### Passo 4: Instalar Dependências Adicionais
Instale as bibliotecas necessárias para o projeto:

```bash
npm install vue-router@4 vuex@4 vuetify@3 @mdi/font axios
```

```bash
npm install -D sass
```

### Passo 5: Limpar Arquivos Desnecessários
O Vite cria alguns arquivos de exemplo. Vamos removê-los:

```bash
rm -rf src/components/HelloWorld.vue
rm -rf src/assets/vue.svg
rm -rf public/vite.svg
```

No Windows (CMD), use:
```cmd
del src\components\HelloWorld.vue
del src\assets\vue.svg
del public\vite.svg
```

---

## 2. Atualizando o package.json

Após instalar as dependências, seu `package.json` deve ficar assim:

```json
{
  "name": "movies-frontend",
  "version": "1.0.0",
  "description": "Frontend Vue.js 3 para Movies API - Aula Fullstack",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.2.0",
    "vuex": "^4.1.0",
    "vuetify": "^3.4.0",
    "@mdi/font": "^7.4.0",
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vite": "^5.0.0",
    "sass": "^1.69.0"
  }
}
```

> ⚠️ **Nota:** As versões podem variar ligeiramente dependendo de quando você instalar.

### O que cada dependência faz:

| Dependência          | Função                                |
| -------------------- | ------------------------------------- |
| `vue`                | Framework JavaScript reativo          |
| `vue-router`         | Navegação entre páginas               |
| `vuex`               | Estado global da aplicação            |
| `vuetify`            | Componentes visuais (Material Design) |
| `@mdi/font`          | Ícones Material Design                |
| `axios`              | Requisições HTTP para a API           |
| `vite`               | Servidor de desenvolvimento           |
| `@vitejs/plugin-vue` | Plugin Vite para Vue                  |
| `sass`               | Pré-processador CSS                   |

---

## 3. Estrutura de Pastas

O Vite já cria a estrutura básica. Agora crie as pastas adicionais:

```
frontend/
├── src/
│   ├── components/      ← Componentes reutilizáveis
│   ├── pages/           ← Páginas da aplicação
│   ├── router/          ← Configuração de rotas
│   ├── store/           ← Estado global (Vuex)
│   ├── api.js           ← Chamadas HTTP
│   ├── App.vue          ← Componente raiz
│   └── main.js          ← Inicialização
├── index.html           ← HTML base
├── package.json         ← Dependências
└── vite.config.js       ← Configuração do Vite
```

### Comandos para criar as pastas adicionais:
```bash
mkdir src/pages
mkdir src/router
mkdir src/store
```

---

## 4. Criando o index.html

Este é o arquivo HTML base da aplicação.

### Criar arquivo `frontend/index.html`:

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Movies App - Vue 3</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

### Explicação:
- `<div id="app">`: Onde o Vue vai renderizar a aplicação
- `<script src="/src/main.js">`: Carrega o código Vue

---

## 5. Criando o vite.config.js

Configuração do servidor de desenvolvimento.

### Criar arquivo `frontend/vite.config.js`:

```javascript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://localhost:7185",
        changeOrigin: true,
        secure: false, // Ignora certificado SSL auto-assinado
      },
    },
  },
});
```

### Explicação:
- `plugins: [vue()]`: Habilita suporte ao Vue
- `alias: { "@": ... }`: Permite usar `@` como atalho para `src/`
- `port: 3000`: Frontend rodará na porta 3000
- `proxy`: Redireciona chamadas `/api` para o backend na porta 7185

### O que é Proxy?
O proxy resolve o problema de CORS (bloqueio de segurança do navegador).

**Sem proxy:**
- Frontend: `http://localhost:3000`
- Backend: `https://localhost:7185`
- ❌ Navegador bloqueia por segurança

**Com proxy:**
- Frontend chama `/api/Movie`
- Vite redireciona para `https://localhost:7185/api/Movie`
- ✅ Funciona!

---

## 6. Criando o main.js

Ponto de entrada da aplicação Vue.

### Criar arquivo `frontend/src/main.js`:

```javascript
/**
 * MAIN.JS - Inicialização do Vue
 */
import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

// Store e Router (em pastas)
import store from "./store";
import router from "./router";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(store).use(router).mount("#app");
```

### Explicação:
1. Importa `createApp` do Vue
2. Importa o componente `App.vue`
3. Configura o Vuetify (UI)
4. Importa o store (Vuex) e router
5. Cria a aplicação e monta no elemento `#app`

---

## 7. Criando o api.js

Centraliza todas as chamadas HTTP ao backend.

### Criar arquivo `frontend/src/api.js`:

```javascript
/**
 * API - Chamadas ao Backend
 * Arquivo único e simples para todas as requisições
 */
import axios from "axios";

// Cliente HTTP
const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

// Adiciona token em todas as requisições
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ========== FILMES ==========

export async function getMovies() {
  const response = await api.get("/Movie/get-all");
  return response.data;
}

export async function getMovie(id) {
  const response = await api.get(`/Movie/${id}`);
  return response.data;
}

export async function createMovie(movie) {
  const response = await api.post("/Movie", movie);
  return response.data;
}

export async function updateMovie(id, movie) {
  const response = await api.put(`/Movie/${id}`, movie);
  return response.data;
}

export async function deleteMovie(id) {
  const response = await api.delete(`/Movie/${id}`);
  return response.data;
}

// ========== LOGIN / USUÁRIO ==========

export async function login(username, password) {
  const response = await api.post("/Login", { username, password });
  return response.data;
}

export async function register(username, password) {
  const response = await api.post("/User", { username, password });
  return response.data;
}

export function saveToken(token) {
  localStorage.setItem("token", token);
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function saveUsername(username) {
  localStorage.setItem("username", username);
}

export function getUsername() {
  return localStorage.getItem("username");
}

export function removeUsername() {
  localStorage.removeItem("username");
}

export function isLoggedIn() {
  return !!localStorage.getItem("token");
}
```

### Tabela de Métodos HTTP:

| Método   | Função       | Exemplo                      |
| -------- | ------------ | ---------------------------- |
| `GET`    | Buscar dados | `api.get("/Movie/get-all")`  |
| `POST`   | Criar novo   | `api.post("/Movie", dados)`  |
| `PUT`    | Atualizar    | `api.put("/Movie/1", dados)` |
| `DELETE` | Deletar      | `api.delete("/Movie/1")`     |

---

## 8. Criando o Store (Vuex)

O Vuex gerencia o estado global da aplicação.

### Criar arquivo `frontend/src/store/index.js`:

```javascript
/**
 * VUEX STORE - Estado Global
 */
import { createStore } from "vuex";
import * as api from "../api";

export default createStore({
  // Estado da aplicação
  state: {
    isLoggedIn: api.isLoggedIn(),
    username: api.getUsername(),
    movies: [],
    loading: false,
    error: null,
  },

  // Mutations - alteram o estado
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.isLoggedIn = value;
    },
    SET_USERNAME(state, username) {
      state.username = username;
    },
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },

  // Actions - lógica assíncrona
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const token = await api.login(username, password);
        api.saveToken(token);
        // Salva o username que foi usado no login
        api.saveUsername(username);
        commit("SET_LOGGED_IN", true);
        commit("SET_USERNAME", username);
        return { success: true };
      } catch (error) {
        return { success: false, message: "Usuário ou senha inválidos" };
      }
    },

    async register(_, { username, password }) {
      try {
        await api.register(username, password);
        return { success: true };
      } catch (error) {
        return { success: false, message: "Erro ao cadastrar. Username já existe." };
      }
    },

    logout({ commit }) {
      api.removeToken();
      api.removeUsername();
      commit("SET_LOGGED_IN", false);
      commit("SET_USERNAME", null);
    },

    async fetchMovies({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      try {
        const movies = await api.getMovies();
        commit("SET_MOVIES", movies);
      } catch (error) {
        commit("SET_ERROR", "Erro ao carregar filmes");
      }
      commit("SET_LOADING", false);
    },

    async createMovie({ dispatch }, movie) {
      await api.createMovie(movie);
      dispatch("fetchMovies");
    },

    async updateMovie({ dispatch }, { id, movie }) {
      await api.updateMovie(id, movie);
      dispatch("fetchMovies");
    },

    async deleteMovie({ dispatch }, id) {
      await api.deleteMovie(id);
      dispatch("fetchMovies");
    },
  },

  // Getters - acesso ao estado
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    username: state => state.username,
    movies: state => state.movies,
    loading: state => state.loading,
    error: state => state.error,
  },
});
```

### Fluxo do Vuex:
```
Componente → dispatch(action) → commit(mutation) → altera state → getter retorna
```

---

## 9. Criando o Router

O Vue Router gerencia a navegação entre páginas.

### Criar arquivo `frontend/src/router/index.js`:

```javascript
/**
 * VUE ROUTER - Configuração de Rotas
 */
import { createRouter, createWebHistory } from "vue-router";
import * as api from "../api";

// Importação das páginas
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import MoviesPage from "../pages/MoviesPage.vue";
import AdminPage from "../pages/AdminPage.vue";

// Definição das rotas
const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/movies", name: "Movies", component: MoviesPage },
  {
    path: "/admin",
    name: "Admin",
    component: AdminPage,
    meta: { requiresAuth: true },
  },
];

// Criação do router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard de navegação - protege rotas
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !api.isLoggedIn()) {
    next("/login");
  } else {
    next();
  }
});

export default router;
```

### Tabela de Rotas:

| Rota        | Página       | Protegida? |
| ----------- | ------------ | ---------- |
| `/`         | HomePage     | Não        |
| `/login`    | LoginPage    | Não        |
| `/register` | RegisterPage | Não        |
| `/movies`   | MoviesPage   | Não        |
| `/admin`    | AdminPage    | **Sim**    |

---

## 10. Criando os Componentes

Componentes são blocos reutilizáveis de código.

---

### Componente 1: `frontend/src/components/AppNavbar.vue`

```vue
<!--
  COMPONENTE: AppNavbar
  Barra de navegação do app
-->
<template>
  <v-app-bar color="primary">
    <v-toolbar-title @click="$router.push('/')" style="cursor:pointer">
      <v-icon>mdi-movie</v-icon> Movies App
    </v-toolbar-title>
    
    <v-spacer></v-spacer>
    
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/movies">Filmes</v-btn>
    
    <!-- v-if / v-else -->
    <v-btn v-if="!isLoggedIn" text to="/login">Entrar</v-btn>
    <template v-else>
      <v-btn text to="/admin">Admin</v-btn>
      <!-- Exibe o nome do usuário logado -->
      <v-chip class="mx-2" color="white" variant="outlined">
        <v-icon start>mdi-account</v-icon>
        {{ username }}
      </v-chip>
      <v-btn icon @click="$emit('logout')">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppNavbar',
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false
    },
    username: {
      type: String,
      default: ''
    }
  },
  emits: ['logout']
}
</script>
```

---

### Componente 2: `frontend/src/components/MovieCard.vue`

```vue
<!--
  COMPONENTE: MovieCard
  Card reutilizável para exibir filme
  
  CONCEITOS:
  - props: recebe dados do componente pai
  - slot: permite inserir conteúdo customizável
  - v-if: renderização condicional
  - :src: binding dinâmico de atributo
  - {{ }}: interpolation (mostrar dados)
-->
<template>
  <v-card>
    <!-- :src = v-bind:src (binding dinâmico) -->
    <v-img 
      :src="movie.posterUrl || 'https://via.placeholder.com/300x400'" 
      height="200"
    ></v-img>
    
    <!-- {{ }} = Interpolation: exibe o valor da variável -->
    <v-card-title>{{ movie.title }}</v-card-title>
    <v-card-text>{{ movie.overview }}</v-card-text>
    
    <!-- SLOT: permite que o pai insira conteúdo aqui -->
    <v-card-actions v-if="showActions">
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MovieCard',
  
  // PROPS: dados que o componente RECEBE do pai
  props: {
    movie: {
      type: Object,     // Tipo esperado
      required: true    // Obrigatório
    },
    showActions: {
      type: Boolean,
      default: false    // Valor padrão
    }
  }
}
</script>
```

---

### Componente 3: `frontend/src/components/MovieForm.vue`

```vue
<!--
  COMPONENTE: MovieForm
  Formulário para criar/editar filme
  
  CONCEITOS:
  - props: recebe dados do componente pai
  - emits: envia eventos para o componente pai
  - data(): estado local do componente
  - watch: observa mudanças em propriedades
  - :rules: validação de campos do Vuetify
-->
<template>
  <v-form ref="formRef" @submit.prevent="handleSave">
    <!-- Campo com validação obrigatória -->
    <v-text-field 
      v-model="form.title" 
      label="Título" 
      :rules="[rules.required]"
    ></v-text-field>
    
    <v-text-field 
      v-model="form.posterUrl" 
      label="URL do Poster"
    ></v-text-field>
    
    <v-textarea 
      v-model="form.overview" 
      label="Sinopse" 
      :rules="[rules.required]"
    ></v-textarea>
    
    <div class="d-flex justify-end mt-4">
      <v-btn class="mr-2" @click="$emit('cancel')">Cancelar</v-btn>
      <v-btn color="primary" type="submit" :loading="saving">Salvar</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  name: 'MovieForm',
  
  // PROPS - dados recebidos do componente pai
  props: {
    movie: Object,    // null = novo, objeto = edição
    saving: Boolean   // indica se está salvando
  },
  
  // EMITS - eventos enviados ao componente pai
  emits: ['cancel', 'save'],

  // DATA - estado local do componente
  data() {
    return {
      form: {
        title: '',
        posterUrl: '',
        overview: ''
      },
      // Regras de validação
      rules: {
        required: value => !!value || 'Campo obrigatório'
      }
    }
  },

  // WATCH - observa mudanças nas props
  watch: {
    movie: {
      immediate: true,  // executa imediatamente ao criar
      handler(newMovie) {
        if (newMovie) {
          // Edição: preenche com dados existentes
          this.form.title = newMovie.title || ''
          this.form.posterUrl = newMovie.posterUrl || ''
          this.form.overview = newMovie.overview || ''
        } else {
          // Novo: limpa o formulário
          this.form.title = ''
          this.form.posterUrl = ''
          this.form.overview = ''
        }
      }
    }
  },

  // METHODS - funções do componente
  methods: {
    async handleSave() {
      // Valida o formulário antes de salvar
      const { valid } = await this.$refs.formRef.validate()
      if (valid) {
        this.$emit('save', { ...this.form })
      }
    }
  }
}
</script>
```

---

### Componente 4: `frontend/src/components/ConfirmDialog.vue`

```vue
<!--
  COMPONENTE: ConfirmDialog
  Dialog de confirmação reutilizável
-->
<template>
  <v-dialog :model-value="modelValue" max-width="400" @update:model-value="$emit('update:modelValue', $event)">
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('update:modelValue', false)">Cancelar</v-btn>
        <v-btn color="error" @click="$emit('confirm')">Confirmar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  props: {
    modelValue: Boolean,
    title: {
      type: String,
      default: 'Confirmação'
    },
    message: {
      type: String,
      default: 'Tem certeza?'
    }
  },
  emits: ['update:modelValue', 'confirm']
}
</script>
```

✅ **Componentes criados!**

---

## 11. Criando as Páginas

Páginas são componentes que representam telas inteiras.

---

### Página 1: `frontend/src/pages/HomePage.vue`

```vue
<!--
  PÁGINA: Home
  
  CONCEITOS:
  - v-if: renderização condicional
  - @click: evento de clique
  - to: navegação com router-link
  - $router.push(): navegação programática
-->
<template>
  <v-container class="text-center py-12">
    <h1 class="text-h3 mb-4">
      <v-icon size="48">mdi-movie</v-icon>
      Movies App
    </h1>
    <p class="text-grey mb-8">Sistema de Gerenciamento de Filmes</p>

    <v-row justify="center">
      <v-col cols="12" md="4">
        <!-- @click: executa ao clicar -->
        <v-card color="primary" dark class="pa-6" @click="$router.push('/movies')">
          <v-icon size="48">mdi-filmstrip</v-icon>
          <h3 class="mt-2">Ver Filmes</h3>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="teal" dark class="pa-6" @click="$router.push('/admin')">
          <v-icon size="48">mdi-cog</v-icon>
          <h3 class="mt-2">Administração</h3>
        </v-card>
      </v-col>
    </v-row>

    <!-- v-if: só mostra se NÃO estiver logado -->
    <!-- to: navega para a rota especificada -->
    <v-btn v-if="!isLoggedIn" color="primary" class="mt-8" to="/login">
      <v-icon left>mdi-login</v-icon>
      Fazer Login
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',

  // COMPUTED: propriedade reativa que acessa o store
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>
```

---

### Página 2: `frontend/src/pages/LoginPage.vue`

```vue
<!--
  PÁGINA: Login
  
  CONCEITOS:
  - v-model: two-way binding (dados em duas direções)
  - v-if: renderização condicional
  - :loading: prop dinâmica
  - :rules: validação de campos
  - router-link: navegação declarativa
-->
<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card class="pa-6">
          <h2 class="text-center mb-4">
            <v-icon>mdi-login</v-icon> Login
          </h2>

          <!-- Formulário com validação -->
          <v-form ref="formRef" @submit.prevent="handleLogin">
            <v-text-field
              v-model="username"
              label="Usuário"
              prepend-icon="mdi-account"
              :rules="[rules.required]"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              prepend-icon="mdi-lock"
              :rules="[rules.required]"
            ></v-text-field>

            <!-- Mensagem de erro (v-if) -->
            <v-alert v-if="error" type="error" class="mb-4">
              {{ error }}
            </v-alert>

            <!-- Botão com loading -->
            <v-btn color="primary" block :loading="loading" type="submit">
              Entrar
            </v-btn>

            <!-- Link para cadastro -->
            <p class="text-center mt-4">
              Não tem conta? 
              <router-link to="/register">Cadastre-se</router-link>
            </p>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',

  // DATA - estado local do componente
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      error: '',
      // Regras de validação
      rules: {
        required: value => !!value || 'Campo obrigatório'
      }
    }
  },

  // METHODS - funções do componente
  methods: {
    async handleLogin() {
      // Valida antes de enviar
      const { valid } = await this.$refs.formRef.validate()
      if (!valid) return

      this.loading = true
      this.error = ''

      const result = await this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })

      this.loading = false

      if (result.success) {
        this.$router.push('/admin')
      } else {
        this.error = result.message
      }
    }
  }
}
</script>
```

---

### Página 3: `frontend/src/pages/RegisterPage.vue`

```vue
<!--
  PÁGINA: Cadastro de Usuário
  
  CONCEITOS:
  - v-model: two-way binding
  - v-if: renderização condicional
  - :rules: validação de campos
  - async/await: operações assíncronas
-->
<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card class="pa-6">
          <h2 class="text-center mb-4">
            <v-icon>mdi-account-plus</v-icon> Cadastro
          </h2>

          <!-- Formulário com validação -->
          <v-form ref="formRef" @submit.prevent="handleRegister">
            <v-text-field
              v-model="username"
              label="Usuário"
              prepend-icon="mdi-account"
              :rules="[rules.required, rules.minLength]"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              prepend-icon="mdi-lock"
              :rules="[rules.required, rules.minLength]"
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              label="Confirmar Senha"
              type="password"
              prepend-icon="mdi-lock-check"
              :rules="[rules.required, rules.passwordMatch]"
            ></v-text-field>

            <!-- Mensagem de erro -->
            <v-alert v-if="error" type="error" class="mb-4">
              {{ error }}
            </v-alert>

            <!-- Mensagem de sucesso -->
            <v-alert v-if="success" type="success" class="mb-4">
              {{ success }}
            </v-alert>

            <!-- Botão com loading -->
            <v-btn color="primary" block :loading="loading" type="submit">
              Cadastrar
            </v-btn>

            <!-- Link para login -->
            <p class="text-center mt-4">
              Já tem conta? 
              <router-link to="/login">Faça login</router-link>
            </p>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RegisterPage',

  // DATA - estado local do componente
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      loading: false,
      error: '',
      success: '',
      // Regras de validação
      rules: {
        required: value => !!value || 'Campo obrigatório',
        minLength: value => value.length >= 3 || 'Mínimo 3 caracteres',
        passwordMatch: value => value === this.password || 'Senhas não conferem'
      }
    }
  },

  // METHODS - funções do componente
  methods: {
    async handleRegister() {
      // Valida antes de enviar
      const { valid } = await this.$refs.formRef.validate()
      if (!valid) return

      this.loading = true
      this.error = ''
      this.success = ''

      const result = await this.$store.dispatch('register', {
        username: this.username,
        password: this.password
      })

      this.loading = false

      if (result.success) {
        this.success = 'Cadastro realizado! Redirecionando para login...'
        // Redireciona após 2 segundos
        setTimeout(() => {
          this.$router.push('/login')
        }, 2000)
      } else {
        this.error = result.message
      }
    }
  }
}
</script>
```

---

### Página 4: `frontend/src/pages/MoviesPage.vue`

```vue
<!--
  PÁGINA: Lista de Filmes
  
  CONCEITOS:
  - v-if / v-else-if / v-else: renderização condicional
  - v-for: loop para renderizar lista
  - :key: identificador único para cada item
  - computed: propriedades reativas calculadas
  - mounted(): lifecycle hook (executado ao montar)
-->
<template>
  <v-container>
    <h1 class="mb-4">
      <v-icon>mdi-filmstrip</v-icon> Catálogo de Filmes
    </h1>

    <!-- V-IF: mostra se loading for true -->
    <v-progress-circular v-if="loading" indeterminate class="d-block mx-auto"></v-progress-circular>

    <!-- V-ELSE-IF: mostra se tiver erro -->
    <v-alert v-else-if="error" type="error">{{ error }}</v-alert>

    <!-- V-ELSE-IF: mostra se lista estiver vazia -->
    <v-alert v-else-if="movies.length === 0" type="info">
      Nenhum filme cadastrado
    </v-alert>

    <!-- V-ELSE: mostra a lista de filmes -->
    <v-row v-else>
      <!-- V-FOR: repete para cada item do array -->
      <!-- :key obrigatório para identificar cada elemento -->
      <v-col v-for="movie in movies" :key="movie.id" cols="12" md="4">
        <!-- Componente reutilizável -->
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'

export default {
  name: 'MoviesPage',
  
  // COMPONENTS: componentes usados nesta página
  components: { MovieCard },

  // COMPUTED: propriedades calculadas (reativas)
  // São recalculadas automaticamente quando os dados mudam
  computed: {
    movies() {
      return this.$store.getters.movies
    },
    loading() {
      return this.$store.getters.loading
    },
    error() {
      return this.$store.getters.error
    }
  },

  // MOUNTED: executado quando componente é montado na tela
  mounted() {
    this.$store.dispatch('fetchMovies')
  }
}
</script>
```

---

### Página 5: `frontend/src/pages/AdminPage.vue`

```vue
<!--
  PÁGINA: Admin - CRUD de Filmes
  
  CONCEITOS:
  - v-for: loop para renderizar lista
  - v-if/v-else: renderização condicional
  - v-model: two-way binding para dialogs
  - slots: conteúdo customizável em componentes
  - computed: propriedades reativas calculadas
  - methods: funções do componente
  - async/await: operações assíncronas
-->
<template>
  <v-container>
    <h1 class="mb-4">
      <v-icon>mdi-cog</v-icon> Administração de Filmes
    </h1>

    <!-- Botão adicionar -->
    <v-btn color="primary" class="mb-4" @click="openDialog()">
      <v-icon left>mdi-plus</v-icon> Novo Filme
    </v-btn>

    <!-- Mensagem de sucesso/erro -->
    <v-alert v-if="message" :type="messageType" class="mb-4" closable @click:close="message = ''">
      {{ message }}
    </v-alert>

    <!-- Loading principal -->
    <v-progress-circular v-if="loading" indeterminate class="d-block mx-auto"></v-progress-circular>

    <!-- Lista vazia -->
    <v-alert v-else-if="movies.length === 0" type="info">
      Nenhum filme cadastrado. Clique em "Novo Filme" para adicionar.
    </v-alert>

    <!-- Lista de filmes usando MovieCard com ações -->
    <v-row v-else>
      <v-col v-for="movie in movies" :key="movie.id" cols="12" md="4">
        <!-- Componente MovieCard com slot para ações -->
        <MovieCard :movie="movie" show-actions>
          <template #actions>
            <v-btn color="warning" size="small" @click="openDialog(movie)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn color="error" size="small" @click="handleDelete(movie)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </MovieCard>
      </v-col>
    </v-row>

    <!-- Dialog de formulário -->
    <v-dialog v-model="dialog" max-width="500" persistent>
      <v-card>
        <v-card-title>{{ editingMovie ? 'Editar' : 'Novo' }} Filme</v-card-title>
        <v-card-text>
          <!-- Componente MovieForm com loading -->
          <MovieForm 
            :movie="editingMovie" 
            :saving="saving"
            @save="handleSave" 
            @cancel="dialog = false" 
          />
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Componente ConfirmDialog -->
    <ConfirmDialog 
      v-model="confirmDialog"
      title="Confirmar exclusão?"
      :message="deletingMovie?.title || ''"
      @confirm="confirmDelete"
    />
  </v-container>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'
import MovieForm from '../components/MovieForm.vue'
import ConfirmDialog from '../components/ConfirmDialog.vue'

export default {
  name: 'AdminPage',
  components: { MovieCard, MovieForm, ConfirmDialog },

  // DATA - estado local do componente
  data() {
    return {
      dialog: false,
      confirmDialog: false,
      editingMovie: null,
      deletingMovie: null,
      saving: false,          // Loading do botão salvar
      message: '',            // Mensagem de feedback
      messageType: 'success'  // Tipo: success, error, info
    }
  },

  // COMPUTED - propriedades reativas do store
  computed: {
    movies() {
      return this.$store.getters.movies
    },
    loading() {
      return this.$store.getters.loading
    }
  },

  // MOUNTED - executado quando componente é montado
  mounted() {
    this.$store.dispatch('fetchMovies')
  },

  // METHODS - funções do componente
  methods: {
    // Abrir dialog (novo ou editar)
    openDialog(movie = null) {
      this.editingMovie = movie
      this.dialog = true
    },

    // Salvar (criar ou atualizar)
    async handleSave(formData) {
      this.saving = true
      try {
        if (this.editingMovie) {
          await this.$store.dispatch('updateMovie', { 
            id: this.editingMovie.id, 
            movie: formData 
          })
          this.showMessage('Filme atualizado com sucesso!', 'success')
        } else {
          await this.$store.dispatch('createMovie', formData)
          this.showMessage('Filme criado com sucesso!', 'success')
        }
        this.dialog = false
      } catch (error) {
        this.showMessage('Erro ao salvar filme. Tente novamente.', 'error')
      }
      this.saving = false
    },

    // Abrir confirmação de delete
    handleDelete(movie) {
      this.deletingMovie = movie
      this.confirmDialog = true
    },

    // Confirmar delete
    async confirmDelete() {
      try {
        await this.$store.dispatch('deleteMovie', this.deletingMovie.id)
        this.showMessage('Filme excluído com sucesso!', 'success')
      } catch (error) {
        this.showMessage('Erro ao excluir filme.', 'error')
      }
      this.confirmDialog = false
    },

    // Exibir mensagem de feedback
    showMessage(text, type) {
      this.message = text
      this.messageType = type
      // Remove mensagem após 3 segundos
      setTimeout(() => { this.message = '' }, 3000)
    }
  }
}
</script>
```

✅ **Páginas criadas!**

---

## 12. Criando o App.vue

O App.vue é o componente raiz que contém toda a aplicação.

### Criar arquivo `frontend/src/App.vue`:

```vue
<!--
  APP.VUE - Componente Principal (Raiz)
  
  CONCEITOS:
  - <router-view>: renderiza a página atual da rota
  - props: passando dados para componente filho (:is-logged-in, :username)
  - eventos: ouvindo eventos do filho (@logout)
  - computed: propriedades reativas
  - methods: funções do componente
-->
<template>
  <v-app>
    <!-- Passando props e ouvindo eventos do componente filho -->
    <!-- :is-logged-in = prop (pai -> filho) -->
    <!-- :username = prop com nome do usuário -->
    <!-- @logout = evento (filho -> pai) -->
    <AppNavbar :is-logged-in="isLoggedIn" :username="username" @logout="logout" />

    <!-- Conteúdo: renderiza a página atual -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'App',
  
  // COMPONENTS: componentes usados
  components: { AppNavbar },

  // COMPUTED: propriedades reativas
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    username() {
      return this.$store.getters.username
    }
  },

  // METHODS: funções do componente
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>
```

### Fluxo de Renderização:
```
App.vue
├── AppNavbar (sempre visível, mostra username quando logado)
└── <router-view> (muda conforme a rota)
    ├── / → HomePage
    ├── /login → LoginPage
    ├── /register → RegisterPage
    ├── /movies → MoviesPage
    └── /admin → AdminPage
```

✅ **App.vue criado!**

---

## 13. Executando o Projeto

### Passo 1: Verificar se o Backend está rodando
Em um terminal, dentro de `Movies.API`:
```bash
dotnet run
```
Aguarde aparecer:
```
Now listening on: https://localhost:7185
```

### Passo 2: Iniciar o Frontend
Em **outro** terminal, dentro de `frontend`:
```bash
npm run dev
```
Deve aparecer:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
```

### Passo 3: Acessar no Navegador
Abra: **http://localhost:3000**

### Passo 4: Testar o Fluxo Completo
1. ✅ Acesse a Home (/)
2. ✅ Clique em "Fazer Login"
3. ✅ Clique em "Cadastre-se"
4. ✅ Crie uma conta (usuário + senha)
5. ✅ Faça login com a conta criada
6. ✅ Veja seu nome na barra de navegação
7. ✅ Acesse a área Admin
8. ✅ Crie, edite e delete filmes
9. ✅ Faça logout

✅ **Projeto completo funcionando!**

---

## Estrutura Final do Projeto

```
frontend/
├── node_modules/           ← Dependências (gerado pelo npm)
├── src/
│   ├── api.js              ← Chamadas HTTP
│   ├── App.vue             ← Componente raiz
│   ├── main.js             ← Ponto de entrada
│   │
│   ├── components/         ← Componentes reutilizáveis
│   │   ├── AppNavbar.vue
│   │   ├── ConfirmDialog.vue
│   │   ├── MovieCard.vue
│   │   └── MovieForm.vue
│   │
│   ├── pages/              ← Páginas da aplicação
│   │   ├── AdminPage.vue
│   │   ├── HomePage.vue
│   │   ├── LoginPage.vue
│   │   ├── MoviesPage.vue
│   │   └── RegisterPage.vue
│   │
│   ├── router/             ← Configuração de rotas
│   │   └── index.js
│   │
│   └── store/              ← Estado global (Vuex)
│       └── index.js
│
├── index.html              ← HTML base
├── package.json            ← Dependências e scripts
└── vite.config.js          ← Configuração do Vite
```

---

---

# PARTE 3: CONCEITOS DO VUE.JS

Referência rápida dos conceitos usados no projeto.

---

## Estrutura de um Componente Vue

Um componente `.vue` tem 3 partes:

```vue
<!-- 1. TEMPLATE: HTML do componente -->
<template>
  <div>{{ titulo }}</div>
</template>

<!-- 2. SCRIPT: Lógica JavaScript -->
<script>
export default {
  data() {
    return { titulo: 'Olá Mundo' }
  }
}
</script>

<!-- 3. STYLE: CSS do componente (opcional) -->
<style scoped>
div { color: blue; }
</style>
```

---

## Options API (Usada no Projeto)

```javascript
export default {
  name: 'MeuComponente',      // Nome do componente
  components: { MovieCard },   // Componentes filhos
  
  props: {                     // Dados recebidos do pai
    titulo: String,
    obrigatorio: { type: String, required: true }
  },
  
  emits: ['salvar', 'cancelar'],  // Eventos que emite
  
  data() {                     // Estado local reativo
    return {
      nome: '',
      idade: 0
    }
  },
  
  computed: {                  // Propriedades calculadas
    nomeCompleto() {
      return this.nome + ' Silva'
    }
  },
  
  watch: {                     // Observar mudanças
    nome(novoValor, valorAntigo) {
      console.log('Nome mudou:', novoValor)
    }
  },
  
  mounted() {                  // Ao montar no DOM
    this.carregarDados()
  },
  
  methods: {                   // Funções
    salvar() {
      this.$emit('salvar', this.nome)
    }
  }
}
```

---

## Diretivas Vue

| Diretiva        | Função                     | Exemplo                                      |
| --------------- | -------------------------- | -------------------------------------------- |
| `v-if`          | Renderiza condicionalmente | `<div v-if="loading">Carregando...</div>`    |
| `v-else`        | Complemento do v-if        | `<div v-else>Conteúdo</div>`                 |
| `v-else-if`     | Condição alternativa       | `<div v-else-if="error">Erro</div>`          |
| `v-show`        | Mostra/esconde (CSS)       | `<div v-show="visible">Visível</div>`        |
| `v-for`         | Loop em arrays             | `<div v-for="item in itens" :key="item.id">` |
| `v-model`       | Two-way binding            | `<input v-model="nome">`                     |
| `v-bind` ou `:` | Binding de atributo        | `<img :src="imagem">`                        |
| `v-on` ou `@`   | Escutar evento             | `<button @click="salvar">`                   |

---

## Props e Emits

### Props (Pai → Filho)

```javascript
// No componente filho
props: {
  movie: {
    type: Object,
    required: true
  }
}
```

```vue
<!-- No componente pai -->
<MovieCard :movie="filme" />
```

### Emits (Filho → Pai)

```javascript
// No componente filho
this.$emit('save', this.dados)
```

```vue
<!-- No componente pai -->
<MovieForm @save="handleSave" />
```

---

## Vuex (Store)

```javascript
// Acessar dados (getter)
this.$store.getters.movies
this.$store.getters.username

// Executar ação
this.$store.dispatch('fetchMovies')
this.$store.dispatch('login', { username, password })

// Executar mutation diretamente
this.$store.commit('SET_MOVIES', [])
```

---

## Vue Router

```javascript
// Navegação programática
this.$router.push('/admin')

// Via template
<router-link to="/movies">Filmes</router-link>
```

---

## Resumo

| Conceito    | Onde Usar         | Exemplo                  |
| ----------- | ----------------- | ------------------------ |
| `data()`    | Estado local      | `loading: false`         |
| `computed`  | Dados do store    | `movies()`, `username()` |
| `methods`   | Funções           | `salvar()`               |
| `mounted()` | Ao carregar       | `fetchMovies()`          |
| `props`     | Receber do pai    | `:movie="filme"`         |
| `emits`     | Enviar ao pai     | `@save="handleSave"`     |
| `v-if`      | Condicional       | `v-if="loading"`         |
| `v-for`     | Loop              | `v-for="m in movies"`    |
| `v-model`   | Two-way           | `v-model="nome"`         |
| `slot`      | Conteúdo dinâmico | `<slot name="actions">`  |

---

## 🎉 Parabéns!

Você completou a apostila do Movies App!

### Funcionalidades Implementadas:
- ✅ Cadastro de usuário
- ✅ Login/Logout
- ✅ Exibição do nome do usuário na navbar
- ✅ Listagem de filmes
- ✅ CRUD completo de filmes (Admin)
- ✅ Proteção de rotas
- ✅ Validação de formulários

**Bons estudos!** 📚
