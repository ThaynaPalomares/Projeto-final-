# Design Simples

## Análise Geral
O backend do ESM Forum apresenta uma estrutura relativamente simples, com rotas responsáveis por manipular perguntas e respostas sem adicionar camadas desnecessárias de complexidade.

## Aspectos que seguem YAGNI
O princípio YAGNI (You Aren’t Gonna Need It) aparece no fato de o sistema implementar apenas o necessário para o funcionamento atual do fórum, evitando abstrações excessivas ou funcionalidades antecipadas.

Exemplos:
- Rotas diretas para perguntas e respostas
- Uso simples do banco de dados SQLite
- Estrutura enxuta para cadastro e recuperação de informações

## Pontos positivos
- Código objetivo
- Baixa complexidade inicial
- Fácil leitura e manutenção em projeto pequeno

## Oportunidades de simplificação
Mesmo sendo simples, o sistema pode evoluir com melhor separação de responsabilidades. Parte da lógica pode ser organizada em camadas como controllers e services para facilitar manutenção futura.

Também pode haver redução de repetição de código, caso existam trechos semelhantes em rotas diferentes.

## Conclusão
O projeto segue parcialmente a ideia de design simples por manter uma estrutura enxuta e funcional. No entanto, há espaço para organizar melhor responsabilidades sem perder simplicidade.