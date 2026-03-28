# Proposta de Aplicação de Padrões de Projeto – ESM Forum

## 1. Facade

### Contexto
Aplicar uma fachada para centralizar o acesso à API.

### Problema Resolvido
Atualmente, os componentes do frontend podem ficar acoplados a múltiplas chamadas HTTP, o que dificulta manutenção, testes e evolução do sistema.

### Proposta
Criar um módulo central, como `forumFacade.js`, responsável por expor métodos como:
- `listarPerguntas()`
- `cadastrarPergunta(texto)`
- `listarRespostas(idPergunta)`
- `cadastrarResposta(idPergunta, texto)`

Esse módulo atuaria como ponto único de acesso às operações do sistema, simplificando o uso pelos componentes da interface.

### Exemplo de Código
```js
forumFacade.listarPerguntas();
forumFacade.cadastrarPergunta(texto);
forumFacade.listarRespostas(idPergunta);
forumFacade.cadastrarResposta(idPergunta, texto);