function criaCard(filme) {
  const card = document.createElement("div");
  card.classList.add("card");

  const titulo = document.createElement("div");
  titulo.classList.add("titulo-card");
  const tituloOriginal = filme.titulo || "Sem título";
  const tituloCortado = tituloOriginal.length > 30 ? tituloOriginal.slice(0, 27) + "..." : tituloOriginal;
  titulo.textContent = tituloCortado;
  card.appendChild(titulo);

  const imagemDiv = document.createElement("div");
  imagemDiv.classList.add("imagem-card");
  const img = document.createElement("img");
  img.src = filme.imagem || "Imagens/default.jpg";
  img.alt = 'Poster do Filme';
  imagemDiv.appendChild(img);
  card.appendChild(imagemDiv);

  const descricao = document.createElement("div");
  descricao.classList.add("descricao-card");
  const sinopse = filme.sinopse || "";
  descricao.textContent = sinopse.length > 150 ? sinopse.slice(0, 147) + "..." : sinopse;
  card.appendChild(descricao);

  const botoesDiv = document.createElement("div");
  botoesDiv.classList.add("buttons-card");

  const botaosobre = document.createElement("button");
  botaosobre.classList.add("mais-info");
  const sobre = document.createElement("a");
  sobre.href = `sobre.html?id=${filme.id}`;
  sobre.textContent = "Mais Info";
  botaosobre.appendChild(sobre);
  botoesDiv.appendChild(botaosobre);

  const botaoeditar = document.createElement("button");
  botaoeditar.classList.add("editar-filme");
  const editar = document.createElement("a");
  editar.href = `editar_filmes.html?id=${filme.id}`;
  editar.textContent = "Editar";
  botaoeditar.appendChild(editar);
  botoesDiv.appendChild(botaoeditar);

  card.appendChild(botoesDiv);

  return card;
}

function mostrarFilmes() {
  const filmes = getFilmes();
  const container = document.querySelector(".cards");
  container.innerHTML = "";

  if (!filmes || filmes.length === 0) {
    const aviso = document.createElement("div");
    aviso.classList.add("mensagem-vazia");
    aviso.textContent = "Nenhum filme cadastrado.";
    container.appendChild(aviso);
    return;
  }

  for (let i = 0; i < filmes.length; i++) {
    const card = criaCard(filmes[i]);
    container.appendChild(card);
  }
}

window.addEventListener("DOMContentLoaded", mostrarFilmes);
