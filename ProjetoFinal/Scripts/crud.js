
function getFilmes() {
  const filmes = localStorage.getItem("filmes");
  return filmes ? JSON.parse(filmes) : [];
}


function salvarFilmes(filmes) {
  localStorage.setItem("filmes", JSON.stringify(filmes));
}


function adicionarFilme(filme) {
  const filmes = getFilmes();
  filmes.push(filme);
  salvarFilmes(filmes);
}


function buscarFilmePorId(id) {
  const filmes = getFilmes();
  for(let i = 0; i < filmes.length; i++){
    if(filmes[i].id === id){
      return filmes[i]
    }
  }
  return null;
}


function editarFilme(id, dadosAtualizados) {
  const filmes = getFilmes();
  const index = filmes.findIndex(f => f.id == id);
  if (index !== -1) { 
        filmes[index].titulo = dadosAtualizados.titulo;
        filmes[index].genero = dadosAtualizados.genero;
        filmes[index].ano = dadosAtualizados.ano;
        filmes[index].duracao = dadosAtualizados.duracao;
        filmes[index].classificacao = dadosAtualizados.classificacao;
        filmes[index].notausuario = dadosAtualizados.notausuario;
        filmes[index].diretor = dadosAtualizados.diretor;
        filmes[index].elenco = dadosAtualizados.elenco;
        filmes[index].sinopse = dadosAtualizados.sinopse;
    };
    salvarFilmes(filmes);
  }



function excluirFilme(id) {
  const filmes = getFilmes();
  let filmesAtualizados = [];
  for(let i = 0; i < filmes.length; i++) {
    if(filmes[i].id != id) {
      filmesAtualizados.push(filmes[i]);
    }
  }
  salvarFilmes(filmesAtualizados);
}

function gerarIdSequencial() {
  let ultimoId = localStorage.getItem("ultimoId");
  if( ultimoId === null ){
    localStorage.setItem("ultimoId", "1");
    return 1;
  }
  else{
    let novoId = parseInt(ultimoId) + 1;                
    localStorage.setItem("ultimoId", novoId);            
    return novoId; 
  }
                                        
}
