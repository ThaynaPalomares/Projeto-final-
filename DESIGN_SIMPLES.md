# Design Simples – ESM Forum

## Objetivo do Sistema

O sistema consiste em um fórum web simples de perguntas e respostas, desenvolvido com fins didáticos para aplicação de conceitos de Engenharia de Software Moderna.

O principal objetivo é permitir que usuários:

- Visualizem perguntas cadastradas
- Adicionem novas perguntas
- Acessem respostas associadas a cada pergunta

---

## Arquitetura

O sistema segue uma arquitetura cliente-servidor, com separação entre frontend e backend.

### Frontend
- Desenvolvido em React
- Responsável pela interface do usuário
- Consome dados de uma API REST

### Backend
- Desenvolvido em Node.js com Express
- Responsável pela lógica da aplicação
- Gerencia as perguntas e respostas
- Expõe endpoints HTTP

---

## Comunicação

A comunicação entre frontend e backend é feita via HTTP utilizando requisições do tipo:

- `GET` → recuperar perguntas
- `POST` → cadastrar novas perguntas

Os dados são trocados no formato JSON.

---

## Estrutura de Dados

### Pergunta
- id_pergunta
- texto
- num_respostas

---

## Decisões de Projeto

- Interface simples para facilitar entendimento
- Uso de React Hooks (useState, useEffect)
- Organização modular dos componentes
- Separação clara entre lógica e interface

---

## Limitações

- Não possui autenticação de usuários
- Dados não persistem em banco de dados real (dependendo da implementação)
- Interface propositalmente simples

---

## Possíveis Melhorias

- Implementar autenticação de usuários
- Adicionar banco de dados (MongoDB ou PostgreSQL)
- Melhorar a interface com design mais elaborado
- Implementar edição e exclusão de perguntas