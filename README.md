# Automação de Testes E2E - Serverest

Projeto de automação de testes end-to-end utilizando **Cypress**, com foco em cenários reais de autenticação e cadastro de usuários.

---

## Tecnologias utilizadas

* Cypress
* JavaScript
* Node.js
* GitHub Actions (CI)

---

##Cenários automatizados

###Login

* Login com sucesso
* Login com credenciais inválidas
* Realizar login com e-mail inválido
* Login com senha inválida
* Login com os campos e-mail e senha vazios

### Cadastro

* Cadastro com sucesso
* Cadastro com e-mail já existente
* Validação de campos obrigatórios
* E-mail inválido

---

## 🧠 Boas práticas aplicadas

* Uso de seletores estáveis (`data-testid`)
* Separação de cenários positivos e negativos
* Validação de mensagens de erro
* Dados dinâmicos para evitar conflitos
* Estrutura organizada de testes

---

##  Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar os testes

```bash
npx cypress open
```

ou modo headless:

```bash
npx cypress run
```

---

## Integração contínua (CI)

Os testes são executados automaticamente via **GitHub Actions** a cada push na branch `main`.

---

## Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar automação de testes e demonstrar habilidades em QA para oportunidades de estágio/júnior.

---

## Autor

Victor
