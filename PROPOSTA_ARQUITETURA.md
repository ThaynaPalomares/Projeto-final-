# Proposta de Organização Arquitetural – ESM Forum

## Proposta de Separação em Camadas

### 1. Camada de Apresentação
Responsável por receber requisições e retornar respostas.
Exemplo:
- rotas da API
- componentes React

### 2. Camada de Negócio
Responsável pelas regras da aplicação.
Exemplo:
- validação de perguntas
- lógica de busca
- controle de respostas

### 3. Camada de Dados
Responsável pelo acesso a banco ou persistência.
Exemplo:
- repositórios
- models

---

## Proposta de MVC no Backend

### Models
Responsáveis por representar perguntas e respostas e acessar dados persistidos.

### Views
No backend, podem ser entendidas como os objetos JSON retornados pela API.

### Controllers
Responsáveis por receber a requisição, acionar regras de negócio e devolver resposta.

---

## Exemplo de Fluxo

1. Usuário digita termo de busca no frontend
2. Frontend chama endpoint da API
3. Controller recebe a requisição
4. Service executa a lógica de busca
5. Model consulta os dados
6. Controller retorna JSON
7. Frontend exibe resultados

---

## Conclusão
A aplicação do padrão MVC e da separação em camadas torna o sistema mais organizado, mais fácil de manter e mais coerente com boas práticas arquiteturais.