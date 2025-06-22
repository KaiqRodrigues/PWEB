  function getIdFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return parseInt(params.get('id'));
    }

    function formatDate(timestamp) {
      if (!timestamp) return '–';
      const d = new Date(timestamp);
      return d.toLocaleDateString('pt-BR');
    }

    window.addEventListener('DOMContentLoaded', () => {
      const id = getIdFromUrl();

      const filme = buscarFilmePorId(id); 

      if (!filme) {
        alert('Filme não encontrado.');
        window.location.href = 'lista_filmes.html';
        return;
      }

      const titulosobre = document.querySelector('.titulo-sobre');
      titulosobre.innerHTML = `
        <span>${filme.titulo || 'Sem título'}</span>
        <div>Avaliação Pessoal ${filme.notausuario || '–'}/5
          <img src="/Imagens/blue star.png" alt="estrela" />
        </div>
      `;


      document.querySelector('.imagem-config').innerHTML = `
        <img src="${filme.imagem || '/Imagens/default.jpg'}" alt="${filme.titulo || 'Imagem padrão'}" />
        <p>Data Inclusão: ${formatDate(filme.dataadicao)}</p>
        <a class="editar-filme-sobre btn btn-dark" href="editar_filmes.html?id=${filme.id}">Editar</a>
      `;


      document.querySelector('.informacoes').innerHTML = `
        <div class="info-1">
          <div class="avaliacao-1">
            <div class="avalicao-net">${filme.notausuario || '–'}
              <img src="/Imagens/yellow star.png" alt="estrela" />
            </div>
          </div>
          <div class="classificacao">
            <span>${filme.duracao || '–'} | ${filme.genero || '–'}</span>
            <p>Classificação: ${filme.classificacao || '–'}</p>
          </div>
        </div>
        <hr class="separa-sobre" />
        <div class="info-2">
          <p><b>Direção:</b> ${filme.diretor || '–'}</p>
          <p><b>Elenco:</b> ${filme.elenco || '–'}</p>
          <p><b>Sinopse:</b> ${filme.sinopse || '–'}</p>
        </div>
      `;
    });