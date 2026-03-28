import React from 'react';

function Sobre() {
  return (
    <div className="container mt-4">

      <h3>Sobre o Projeto</h3>

      <p>
        O <b>ESM Forum</b> é uma aplicação web desenvolvida com o objetivo de
        demonstrar, na prática, conceitos de Engenharia de Software Moderna,
        incluindo separação entre frontend e backend, consumo de APIs e organização de código.
      </p>

      <p>
        O sistema consiste em um fórum simples de perguntas e respostas,
        onde os usuários podem visualizar perguntas existentes e adicionar novas interações.
      </p>

      <h5 className="mt-4">Tecnologias Utilizadas</h5>
      <ul>
        <li>React (Frontend)</li>
        <li>Node.js com Express (Backend)</li>
        <li>API REST para comunicação entre as camadas</li>
      </ul>

      <h5 className="mt-4">Objetivo Acadêmico</h5>
      <p>
        Este projeto foi desenvolvido como atividade prática da disciplina de
        Engenharia de Software, com foco na aplicação de conceitos como:
      </p>

      <ul>
        <li>Arquitetura cliente-servidor</li>
        <li>Separação de responsabilidades</li>
        <li>Desenvolvimento incremental</li>
        <li>Integração entre sistemas</li>
      </ul>

      <h5 className="mt-4">Sobre o Desenvolvimento</h5>
      <p>
        Durante o desenvolvimento, foram realizados testes locais com execução
        simultânea do backend (porta 5000) e frontend (porta 3000), garantindo
        a comunicação correta entre as camadas e a persistência das informações.
      </p>

      <p>
        O projeto foi adaptado a partir de uma proposta didática e evoluído com melhorias
        na interface e na experiência do usuário.
      </p>

      <p className="mt-4">
  Desenvolvido por Thayna Palomares.
</p>

    </div>
  );
}

export default Sobre;