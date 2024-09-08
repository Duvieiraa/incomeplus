// Adiciona evento de clique aos botões de filtro após o DOM ser carregado
document.addEventListener("DOMContentLoaded", () => {
    const filtros = document.querySelectorAll(".filtro");
    filtros.forEach(filtro => {
        filtro.addEventListener("click", function() {
            const tag = this.getAttribute("data-tag").toLowerCase();
            filtrarPorTag(tag);
        });
    });
});

function pesquisar() {
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    if (campoPesquisa !== "") {
        filtrarPorTag(campoPesquisa);
    }
}

function filtrarPorTag(tag) {
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML
    let resultados = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        let plataforma = dado.plataforma ? dado.plataforma.toLowerCase() : "";
        let descricao = dado.descricao ? dado.descricao.toLowerCase() : "";
        let tags = dado.tags ? dado.tags.toLowerCase() : "";
        let link = dado.link ? dado.link : ""; 

        // Verifica se as tags incluem a tag de filtro ou se o termo de pesquisa está na plataforma, descrição ou tags
        if (tags.includes(tag) || plataforma.includes(tag) || descricao.includes(tag)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${link}" target="_blank">${dado.plataforma}</a> <!-- Usando plataforma como título e link -->
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
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
