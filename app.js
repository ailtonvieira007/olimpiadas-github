function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado da pesquisa e constrói o HTML
    for (let dado of dados) {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
    }
  
    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
  }
