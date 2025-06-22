window.addEventListener("DOMContentLoaded", () => {
  const formPesquisa = document.getElementById("input-pesquisa");
  const inputPesquisa = document.getElementById("search-bar");

  if (!formPesquisa || !inputPesquisa) return;

  formPesquisa.addEventListener("submit", (e) => {
    e.preventDefault();

    const termo = inputPesquisa.value.trim().toLowerCase();
    if (!termo) return;

    const filmes = getFilmes(); 


    const filmeEncontrado = filmes.find(filme => 
      filme.titulo && filme.titulo.toLowerCase().includes(termo)
    );

    if (filmeEncontrado) {

      window.location.href = `sobre.html?id=${filmeEncontrado.id}`;
    } else {
      alert("Nenhum filme encontrado com esse título.");
    }
  });
});
