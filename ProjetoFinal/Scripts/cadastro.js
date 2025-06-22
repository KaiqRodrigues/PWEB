
document.getElementById("submit").addEventListener("click", function (e) {

  e.preventDefault();

  const fileInput = document.getElementById("imagem");
  const imagem = fileInput.files[0];

    const filme = {
      id: gerarIdSequencial(),
      titulo: document.getElementById("titulo").value.trim(),
      genero: document.getElementById("genero").value.trim(),
      ano: document.getElementById("ano").value.trim(),
      duracao: document.getElementById("duracao").value.trim(),
      classificacao: document.getElementById("classificacao").value.trim(),
      notausuario: document.getElementById("nota-user").value.trim(),
      diretor: document.getElementById("diretor").value.trim(),
      elenco: document.getElementById("elenco").value.trim(),
      sinopse: document.getElementById("sinopse").value.trim(),
       dataadicao: new Date().toISOString().slice(0, 10),
      imagem: null
    };

  if (imagem) {
    const reader = new FileReader();
    reader.onload = function () {
      filme.imagem = reader.result;
      adicionarFilme(filme);
      alert("Filme cadastrado com sucesso!");
      document.querySelector("form").reset();
    };
    reader.readAsDataURL(imagem);
  } else {
    adicionarFilme(filme);
    alert("Filme cadastrado com sucesso!");
    document.querySelector("form").reset();
  }
});

