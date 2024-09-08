function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campoPesquisa for uma string vazia
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>";
        return;
    }

    // Converte o campo de pesquisa para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML
    let resultados = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        // Verifica se as propriedades existem antes de acessá-las
        let plataforma = dado.plataforma ? dado.plataforma.toLowerCase() : "";
        let descricao = dado.descricao ? dado.descricao.toLowerCase() : "";
        let tags = dado.tags ? dado.tags.toLowerCase() : "";
        let link = dado.link ? dado.link : ""; // Adicionando verificação para o link

        // Verifica se plataforma, descrição ou tags contêm o campo de pesquisa
        if (plataforma.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${link}" target="_blank">${plataforma}</a> <!-- Usando plataforma como título e link -->
                </h2>
                <p class="descricao-meta">${descricao}</p>
                <div class="tags-meta">
                    ${tags.split(' ').map(tag => `<span>${tag.trim()}</span>`).join('')}
                </div>
                <a href="${link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    // Se não houver resultados, exibe uma mensagem padrão
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui o conteúdo HTML gerado à seção de resultados
    section.innerHTML = resultados;
}
