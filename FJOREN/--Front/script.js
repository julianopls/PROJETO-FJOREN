const categorias = [
    { nome: "1", link: "categoria1.html" },
    { nome: "2", link: "categoria2.html" },
    { nome: "3", link: "categoria3.html" },
    { nome: "4", link: "categoria4.html" },
    { nome: "5", link: "categoria5.html" },
    { nome: "6", link: "categoria6.html" },
    { nome: "7", link: "categoria7.html" }
];

let index = 0;

/* ========= CATEGORIAS ========= */
function render() {
    const container = document.getElementById("cards");
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        let pos = (index + i) % categorias.length;
        let cat = categorias[pos];

        container.innerHTML += `
            <div class="card-cat" onclick="window.location.href='${cat.link}'">
                <img src="img/roupa${pos + 1}.png">
                <span>${cat.nome}</span>
            </div>
        `;
    }
}

function avancar() {
    index = (index + 1) % categorias.length;
    render();
}

function voltar() {
    index = (index - 1 + categorias.length) % categorias.length;
    render();
}

render();

/* ========= PRODUTO ========= */
function abrirProduto(id) {
    window.location.href = "produto.html?id=" + id;
}

/* ========= SACOLA ========= */
function toggleSacola() {
    document.getElementById("sacola").classList.toggle("ativa");
}

/* pega sacola do localStorage */
function getSacola() {
    return JSON.parse(localStorage.getItem("sacola")) || [];
}

/* salva sacola */
function salvarSacola(lista) {
    localStorage.setItem("sacola", JSON.stringify(lista));
}

/* adicionar item */
function adicionarSacola(produto) {
    let sacola = getSacola();
    sacola.push(produto);
    salvarSacola(sacola);
    renderSacola();
}

/* renderizar */
function renderSacola() {
    const container = document.getElementById("itens-sacola");
    if (!container) return;

    const sacola = getSacola();
    container.innerHTML = "";

    if (sacola.length === 0) {
        container.innerHTML = "<p>Sacola vazia</p>";
        return;
    }

    sacola.forEach(item => {
        container.innerHTML += `
            <p>${item.nome} | ${item.tamanho} | Qtd: ${item.qtd}</p>
        `;
    });
}

/* carregar sacola ao abrir */
renderSacola();