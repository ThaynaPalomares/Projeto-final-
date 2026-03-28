const API_URL = "http://localhost:5000";

export async function listarPerguntas() {
  const response = await fetch(`${API_URL}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar perguntas");
  }

  return response.json();
}

export async function cadastrarPergunta(pergunta) {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pergunta })
  };

  const response = await fetch(`${API_URL}/perguntas`, request);

  if (!response.ok) {
    throw new Error("Erro ao cadastrar pergunta");
  }

  return response.json();
}