# Implementação com SOLID – ESM Forum

## Funcionalidade Implementada

Foi implementada a funcionalidade de **Busca de Perguntas**, permitindo ao usuário filtrar perguntas por palavra-chave diretamente na interface principal.

---

## Aplicação dos Princípios SOLID

### SRP — Single Responsibility Principle
A lógica de acesso à API foi removida do componente principal e colocada no arquivo `services/perguntaService.js`.

Além disso, a tela foi dividida em componentes menores:
- `CampoBusca`
- `TabelaPrincipal`
- `LinhaTabela`
- `NovaPergunta`

Isso reduziu o acúmulo de responsabilidades em um único componente.

---

### DIP — Dependency Inversion Principle
O componente `Pergunta` deixou de depender diretamente de `fetch` e passou a utilizar funções abstratas do serviço:
- `listarPerguntas()`
- `cadastrarPergunta()`

Assim, a interface depende do serviço, e não diretamente da implementação HTTP.

---

### OCP — Open/Closed Principle
A busca foi estruturada de forma extensível. A lógica atual permite evoluir facilmente para:
- busca por tags
- busca por autor
- filtros combinados

sem necessidade de reestruturar toda a interface.

---

## Arquivos Alterados

- `src/pages/Pergunta.js`
- `src/services/perguntaService.js`

---

## Resultado

A implementação melhorou a organização do código, tornou a funcionalidade de busca utilizável e deixou a estrutura mais adequada para manutenção e evolução futura.