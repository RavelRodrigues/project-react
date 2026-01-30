---
# 📝 Lista de Tarefas (Task List) - React.js

Este projeto é uma aplicação de gerenciamento de tarefas simples e funcional, desenvolvida para colocar em prática os conceitos fundamentais do **React.js**, como manipulação de estado, ciclo de vida de componentes e componentização.
---

## 🚀 Funcionalidades

- **Adicionar Tarefas:** Insira novas tarefas na lista rapidamente.
- **Edição em Tempo Real:** Altere o texto de uma tarefa já existente.
- **Remoção:** Exclua tarefas da lista com um clique.
- **Persistência de Dados:** As tarefas são salvas no **LocalStorage** do navegador, ou seja, elas não somem quando você atualiza a página.
- **Validação:** Uso de `PropTypes` para garantir que os componentes recebam os dados corretos.

---

## 🛠️ Tecnologias Utilizadas

- **React.js** (Componentes de Classe)
- **React Icons** (Para os ícones de edição, delete e adição)
- **Prop-Types** (Documentação e validação de propriedades)
- **CSS3** (Estilização personalizada por componente)
- **ESLint & Prettier** (Padronização e qualidade de código)

---

## 📂 Estrutura de Pastas

```text
src/
├── components/
│   ├── Form/           # Componente de entrada de dados
│   │   ├── index.js
│   │   └── Form.css
│   └── Tasks/          # Componente de listagem e ações
│       ├── index.js
│       └── Tasks.css
├── Main.js             # Componente pai
├── Main.css            # Estilos globais/principais
└── App.js              # Inicialização do App

```

---

## 🔧 Como rodar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git

```

2. **Entre na pasta:**

```bash
cd listatarefas

```

3. **Instale as dependências:**

```bash
npm install

```

4. **Inicie o servidor de desenvolvimento:**

```bash
npm start

```

5. Acesse `http://localhost:3000` no seu navegador.

---

## 🧠 Aprendizados Relevantes

Durante o desenvolvimento desta aplicação, os seguintes conceitos foram consolidados:

1. **Levantamento de Estado (State Uplifting):** Centralizar o estado no componente `Main` e distribuir dados/funções para os filhos via `props`.
2. **Ciclo de Vida:** Uso de `componentDidMount` para carregar dados e `componentDidUpdate` para salvar alterações automaticamente.
3. **Imutabilidade:** Como manipular arrays no estado do React utilizando o operador _spread_ (`[...]`).

---
