# Caso de Uso: Buscar Perguntas

**Atores:** Usuário

**Pré-condições:**
- O sistema está em funcionamento
- Existem perguntas cadastradas no sistema

**Fluxo Principal:**
1. O usuário acessa a página principal do fórum
2. O usuário digita uma palavra-chave no campo de busca
3. O usuário confirma a busca
4. O sistema recebe o termo pesquisado
5. O sistema consulta as perguntas cadastradas
6. O sistema filtra as perguntas que correspondem ao termo informado
7. O sistema exibe a lista de resultados encontrados

**Fluxo Alternativo 1: Nenhum resultado encontrado**
6a. Caso não existam perguntas compatíveis com o termo pesquisado, o sistema exibe a mensagem “Nenhuma pergunta encontrada”

**Pós-condições:**
- O sistema apresenta os resultados da busca ou informa a ausência de resultados ao usuário