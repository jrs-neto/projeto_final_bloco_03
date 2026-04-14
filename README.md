# FarmaVida - Gestão de Farmácia Online

<br />

<div align="center">     
     <img src="https://i.imgur.com/AzshGmS.png" title="source: imgur.com" width="50%"/>
</div> 
<br /> 

<div align="center">   
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/status-concluído-brightgreen?style=for-the-badge" /> 
</div>

<br />

## 1. Descrição

O **FarmaVida** é uma aplicação web de gestão farmacêutica desenvolvida durante o **Bloco 03** do bootcamp da Generation Brasil. A aplicação permite o gerenciamento completo de categorias e produtos de uma farmácia, consumindo uma API REST desenvolvida com **NestJS**.

A interface foi projetada com foco em **UX/UI moderno**, utilizando animações fluidas, design responsivo e uma paleta de cores harmoniosa baseada em tons de ciano e ardósia.

### Funcionalidades:

1.  **Listagem de Produtos**: Visualização de todos os itens disponíveis com busca por nome.
2.  **Filtro por Categoria**: Filtragem dinâmica de produtos através de um menu suspenso inteligente.
3.  **Gestão de Categorias**: CRUD completo (Criar, Ler, Atualizar e Deletar) para organizar os medicamentos e itens.
4.  **Gestão de Produtos**: CRUD completo com associação obrigatória a uma categoria existente.
5.  **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela.
6.  **Notificações**: Feedback visual em tempo real utilizando React Toastify.
7.  **Busca Avançada**: Localização rápida de itens tanto na lista de produtos quanto na de categorias.

<br />

## 2. Tecnologias Utilizadas

| Tecnologia           | Finalidade                                     |
| -------------------- | ---------------------------------------------- |
| **React**            | Biblioteca principal para construção da UI     |
| **TypeScript**       | Tipagem estática para maior segurança do código |
| **Tailwind CSS**     | Estilização moderna e responsiva               |
| **Axios**            | Cliente HTTP para consumo da API REST          |
| **React Router DOM** | Gerenciamento de rotas e navegação SPA         |
| **Phosphor Icons**   | Conjunto de ícones personalizados e consistentes|
| **React Toastify**   | Sistema de notificações e alertas              |
| **Vite**             | Ferramenta de build e desenvolvimento rápido   |

<br />

## 3. Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

<br />

## 4. Como executar o projeto localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/jrs-neto/projeto_final_bloco_03
```

2. **Acesse a pasta do projeto:**

```bash
cd projeto_final_bloco_03
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Execute o projeto em modo desenvolvimento:**

```bash
npm run dev
```

5. **Acesse a aplicação em:**

```
http://localhost:5173
```

<br />


## 5. Integração com a API Backend

A aplicação consome a API oficial da farmácia hospedada em:

🔗 [Farmácia API - NestJS](https://farmacia-nest.onrender.com)

As requisições são centralizadas no arquivo `src/services/Service.ts`, utilizando uma instância customizada do Axios configurada em `Api.ts`.

<br />


## 6. Estrutura de Diretórios

```
src/
│
├── assets/           → Imagens Estáticas (Banner da Home)
├── components/       → Componentes de Layout (Navbar, Footer, Home)
├── models/           → Definições de Interfaces (Produto, Categoria)
├── pages/            → Páginas de CRUD (Categorias e Produtos)
│   ├── categorias/   → Lista, Form e Delete de Categorias
│   └── produtos/     → Lista, Form e Delete de Produtos
├── services/         → Comunicação com a API (Axios)
├── App.tsx           → Definição de Rotas e Container Principal
├── main.tsx          → Ponto de entrada da aplicação
└── index.css         → Configurações globais de estilo e Tailwind
```

<br />


## 7. Implementações Futuras

- [ ] Implementação de **Autenticação de Usuário** (Login/Cadastro).
- [ ] Sistema de **Carrinho de Compras** local.
- [ ] Upload de imagens reais para os produtos (integração com serviço de cloud).
- [ ] Geração de relatórios de estoque.

<br />


## 8. Contato

Desenvolvido por [**José Rodrigues**](https://github.com/jrs-neto)
