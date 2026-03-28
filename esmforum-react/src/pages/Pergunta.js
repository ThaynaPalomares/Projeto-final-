import React from 'react';
import { Link } from "react-router-dom";
import { Container, Table, Form, Button, Alert } from 'react-bootstrap';

function postPergunta(pergunta) {
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pergunta: pergunta })
  };

  return fetch('http://localhost:5000/perguntas', request)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao cadastrar pergunta');
      }
      return response.json();
    });
}

function NovaPergunta(props) {
  const [texto, setTexto] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');
  const [erro, setErro] = React.useState('');

  function handleChange(event) {
    setTexto(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();

    if (!texto.trim()) {
      setErro('Digite uma pergunta antes de enviar.');
      setMensagem('');
      return;
    }

    postPergunta(texto)
      .then((data) => {
        props.update(data.id_pergunta, texto);
        setTexto('');
        setErro('');
        setMensagem('Pergunta enviada com sucesso!');
      })
      .catch(() => {
        setMensagem('');
        setErro('Erro ao enviar a pergunta.');
      });
  }

  return (
    <Container className="mt-4">
      <Form>
        <Form.Group>
          <Form.Label><strong>Faça a sua pergunta:</strong></Form.Label>
          <Form.Control
            id="textarea-pergunta"
            as="textarea"
            rows={4}
            value={texto}
            onChange={handleChange}
            placeholder="Digite sua pergunta aqui..."
            style={{ borderRadius: '8px' }}
          />
        </Form.Group>

        {mensagem && <Alert variant="success" className="mt-3">{mensagem}</Alert>}
        {erro && <Alert variant="danger" className="mt-3">{erro}</Alert>}

        <Button
          id="btn-pergunta"
          className="mt-3"
          variant="primary"
          onClick={handleClick}
          style={{ borderRadius: '8px', padding: '10px 18px' }}
        >
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

function CampoBusca({ termoBusca, setTermoBusca }) {
  return (
    <Container className="mt-4">
      <Form>
        <Form.Group>
          <Form.Label><strong>Buscar perguntas:</strong></Form.Label>
          <Form.Control
            type="text"
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            placeholder="Digite uma palavra-chave..."
            style={{ borderRadius: '8px' }}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

function LinhaTabela({ pergunta }) {
  return (
    <tr>
      <td className="text-center">{pergunta.id_pergunta}</td>
      <td>{pergunta.texto}</td>
      <td className="text-center">
        <Link to={`/resposta/${pergunta.id_pergunta}`}>
          {pergunta.num_respostas}
        </Link>
      </td>
    </tr>
  );
}

function TabelaPrincipal({ listaPerguntas, termoBusca }) {
  const perguntasFiltradas = listaPerguntas.filter((p) =>
    p.texto.toLowerCase().includes(termoBusca.toLowerCase())
  );

  const linhas = perguntasFiltradas.map((p) => (
    <LinhaTabela pergunta={p} key={p.id_pergunta} />
  ));

  return (
    <div className="container mt-4">
      <center><h4>Perguntas Atuais</h4></center>

      {perguntasFiltradas.length === 0 ? (
        <Alert variant="warning" className="mt-3">
          Nenhuma pergunta encontrada.
        </Alert>
      ) : (
        <Table
          id="tabela-perguntas"
          striped
          bordered
          hover
          responsive
          className="mt-3 shadow-sm bg-white"
        >
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Pergunta</th>
              <th className="text-center"># Respostas</th>
            </tr>
          </thead>
          <tbody>
            {linhas}
          </tbody>
        </Table>
      )}
    </div>
  );
}

function Pergunta() {
  const [listaPerguntas, setListaPerguntas] = React.useState([]);
  const [termoBusca, setTermoBusca] = React.useState('');

  function adicionarNovaPergunta(id_pergunta, pergunta) {
    setListaPerguntas((prev) => {
      const novaPergunta = {
        id_pergunta: id_pergunta,
        texto: pergunta,
        num_respostas: 0,
      };
      return [...prev, novaPergunta];
    });
  }

  React.useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro ao buscar perguntas');
        }
        return res.json();
      })
      .then((data) => setListaPerguntas(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <CampoBusca termoBusca={termoBusca} setTermoBusca={setTermoBusca} />
      <TabelaPrincipal listaPerguntas={listaPerguntas} termoBusca={termoBusca} />
      <NovaPergunta update={adicionarNovaPergunta} />
    </div>
  );
}

export default Pergunta;