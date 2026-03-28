# Análise SOLID do Código Existente – ESM Forum

## Introdução

Esta análise avalia o sistema ESM Forum com base nos princípios SOLID, considerando especialmente a organização do frontend em React e sua integração com o backend.

---

## Pontos Positivos

### 1. Separação por componentes e páginas
O sistema organiza a interface em componentes distintos, como `Menu`, `Pergunta`, `Resposta` e `Sobre`, o que contribui para uma estrutura mais modular.

### 2. Componentização da interface
Cada tela possui responsabilidade visual relativamente bem definida, o que favorece manutenção e leitura do código.

### 3. Uso de React Router para navegação
A definição centralizada das rotas melhora a organização e reduz acoplamento entre páginas.

---

## Oportunidades de Melhoria

### 1. Violação de SRP (Single Responsibility Principle)
No código original de `Pergunta.js`, o mesmo componente acumulava responsabilidades de:
- renderização da interface
- controle de estado
- envio de dados para a API
- carregamento da lista de perguntas

Isso tornava o componente mais acoplado e mais difícil de manter.

### 2. Violação de DIP (Dependency Inversion Principle)
No código original, os componentes dependiam diretamente de `fetch`, ficando fortemente acoplados à implementação de comunicação HTTP.

Isso dificultava testes, manutenção e futuras mudanças de infraestrutura.

---

## Conclusão

A análise mostra que o sistema possui uma boa base de organização visual, mas ainda apresenta pontos de acoplamento que dificultam evolução. As principais melhorias recomendadas são:
- separar chamadas de API em serviços
- dividir melhor responsabilidades dos componentes
- tornar a estrutura mais extensível para novas funcionalidades