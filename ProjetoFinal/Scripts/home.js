window.addEventListener("DOMContentLoaded", () => {
  const filmes = getFilmes();

  montarCarrossel(filmes);
  montarLeaderboard(filmes);
});

function montarCarrossel(filmes) {
  const carouselInner = document.querySelector("#carouselExampleAutoplaying .carousel-inner");
  if (!carouselInner) return;

  carouselInner.innerHTML = ""; 

  const filmesCarrossel = filmes.slice(0, 3);

  if (filmesCarrossel.length === 0) {
    carouselInner.innerHTML = `
      <div class="carousel-item active">
        <img src="Imagens/default-carrosel.jpg" class="d-block w-100" alt="Nenhum filme cadastrado" />
        <div class="carousel-caption bottom-left">
          <h1>Nenhum filme cadastrado</h1>
        </div>
      </div>
    `;
    return;
  }

  filmesCarrossel.forEach((filme, index) => {
    const activeClass = index === 0 ? "active" : "";
    const imagem = filme.imagem || "Imagens/default-carrosel.jpg";
    const titulo = filme.titulo || "Sem título";

    const item = document.createElement("div");
    item.className = `carousel-item ${activeClass}`;

    item.innerHTML = `<img src="${imagem}"     class="d-block w-100"     alt="Imagem do filme ${titulo}" />
      <div class="carousel-caption bottom-left">
        <h1>${titulo}</h1>
      </div>`;

    carouselInner.appendChild(item);
  });
}

function montarLeaderboard(filmes) {
  const tabelaBody = document.querySelector("#tabela-rank tbody");
  if (!tabelaBody) return;

  tabelaBody.innerHTML = ""; 

  if (filmes.length === 0) {
    tabelaBody.innerHTML = `<tr><td colspan="4" class="text-center">Nenhum filme cadastrado.</td></tr>`;
    return;
  }


  filmes.sort((a, b) => {
    const notaA = parseFloat(a.notausuario) || 0;
    const notaB = parseFloat(b.notausuario) || 0;
    return notaB - notaA;
  });

  filmes.forEach((filme, index) => {
    const posicao = index + 1;
    const titulo = filme.titulo || "Sem título";
    const notaUsuario = filme.notausuario || "0";
    const notaInternet = filme.notainternet || "0"; 

    const tr = document.createElement("tr");

    tr.innerHTML = `<td>${posicao}º</td>
      <td class="titulo-rank">${titulo}</td>
      <td>${notaUsuario} <img class="star" src="Imagens/blue star.png" alt="Estrela Azul"></td>
      <td>${notaInternet} <img class="star" src="Imagens/yellow star.png" alt="Estrela Amarela"></td>`;

    tabelaBody.appendChild(tr);
  });
}
