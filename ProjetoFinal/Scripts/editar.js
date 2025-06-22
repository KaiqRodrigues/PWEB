window.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  let id = parseInt(params.get("id"));
  let filme = null;

  if (id) {
    filme = buscarFilmePorId(id);
    if (!filme) {
      alert("Filme não encontrado.");
      return;
    }
    preencherFormulario(filme);
  }

  document.getElementById("salvar").addEventListener("click", function (e) {
    e.preventDefault();
    const novaImagem = document.getElementById("imagem").files[0];
    const dadosAtualizados = pegarDados();

    function salvar() {
      if (id && filme) {
        editarFilme(id, {
          titulo: dadosAtualizados.titulo,
          genero: dadosAtualizados.genero,
          ano: dadosAtualizados.ano,
          duracao: dadosAtualizados.duracao,
          classificacao: dadosAtualizados.classificacao,
          notausuario: dadosAtualizados.notausuario,
          diretor: dadosAtualizados.diretor,
          elenco: dadosAtualizados.elenco,
          sinopse: dadosAtualizados.sinopse,
          imagem: dadosAtualizados.imagem || (filme ? filme.imagem : null)
        });
        alert("Alterações salvas");
      } else {
        alert("Nenhum filme selecionado.");
      }
    }

    if (novaImagem) {
      const reader = new FileReader();
      reader.onload = function () {
        dadosAtualizados.imagem = reader.result;
        salvar();
      };
      reader.readAsDataURL(novaImagem);
    } else {
      dadosAtualizados.imagem = filme ? filme.imagem : null;
      salvar();
    }
  });

  document.getElementById("excluir").addEventListener("click", function (e) {
    e.preventDefault();
    if (!id) {
      alert("Nenhum filme foi puxado.");
      return;
    }
    if (confirm("Tem certeza que deseja excluir este filme?")) {
      excluirFilme(id);
      alert("Filme excluído com sucesso!");
      window.location.href = "lista_filmes.html";
    }
  });

  document.querySelector("button.btn.btn-dark").addEventListener("click", function (e) {
    e.preventDefault();
    const tituloBusca = document.getElementById("titulo").value.trim().toLowerCase();
    if (!tituloBusca) {
      alert("Digite um título para buscar.");
      return;
    }

    const filmes = getFilmes();
    let filmeEncontrado = null;
    for (let i = 0; i < filmes.length; i++) {
      if (filmes[i].titulo && filmes[i].titulo.toLowerCase() === tituloBusca) {
        filmeEncontrado = filmes[i];
        break;
      }
    }

    if (!filmeEncontrado) {
      alert("Filme não existe.");
      return;
    }

    filme = filmeEncontrado;
    id = filmeEncontrado.id;
    preencherFormulario(filme);
  });
});

function pegarDados() {
  return {
    titulo: document.getElementById("titulo").value.trim(),
    genero: document.getElementById("genero").value.trim(),
    ano: document.getElementById("ano").value.trim(),
    duracao: document.getElementById("duracao").value.trim(),
    classificacao: document.getElementById("classificacao").value.trim(),
    notausuario: document.getElementById("nota-user").value.trim(),
    diretor: document.getElementById("diretor").value.trim(),
    elenco: document.getElementById("elenco").value.trim(),
    sinopse: document.getElementById("sinopse").value.trim()
  };
}

function preencherFormulario(filme) {
  document.getElementById("titulo").value = filme.titulo || "";
  document.getElementById("genero").value = filme.genero || "";
  document.getElementById("ano").value = filme.ano || "";
  document.getElementById("duracao").value = filme.duracao || "";
  document.getElementById("classificacao").value = filme.classificacao || "";
  document.getElementById("nota-user").value = filme.notausuario || "";
  document.getElementById("diretor").value = filme.diretor || "";
  document.getElementById("elenco").value = filme.elenco || "";
  document.getElementById("sinopse").value = filme.sinopse || "";
}
