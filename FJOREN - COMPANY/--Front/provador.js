let climaSelecionado = "";
let lookAtual = [];
let lookVariacaoIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  iniciarClimas();
  iniciarBotoes();
});

function iniciarClimas() {
  const cards = document.querySelectorAll(".card-clima");

  cards.forEach(card => {
    card.addEventListener("click", () => {

      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      climaSelecionado = card.dataset.clima;
      lookVariacaoIndex = 0;

      gerarLook();
    });
  });
}

function iniciarBotoes() {
  document.getElementById("btnRegenerate")?.addEventListener("click", () => {
    gerarOutroLook();
  });

  document.getElementById("btnCarrinho")?.addEventListener("click", () => {
    adicionarCarrinho();
  });
}

function gerarLook() {
  const loading = document.getElementById("lookLoading");
  const section = document.getElementById("look-section");
  const grid = document.getElementById("produtosGrid");
  const total = document.getElementById("totalValor");

  if (typeof LOOKS_CLIMA === "undefined") {
    console.error("data.js não carregou.");
    return;
  }

  const looks = LOOKS_CLIMA[climaSelecionado];

  if (!looks) {
    console.error("Clima não encontrado:", climaSelecionado);
    return;
  }

  loading.style.display = "flex";
  section.style.display = "none";

  setTimeout(() => {

    lookAtual = looks[lookVariacaoIndex];

    let html = "";
    let soma = 0;

    lookAtual.forEach(item => {
      soma += item.preco;

      html += `
        <div class="produto-card">
          <div class="categoria-label">${item.label}</div>

          <img src="${item.img}" alt="${item.nome}">

          <div class="produto-info">
            <div class="produto-nome">${item.nome}</div>
            <div class="produto-preco">
              R$ ${item.preco.toFixed(2).replace(".", ",")}
            </div>
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;
    total.textContent = `R$ ${soma.toFixed(2).replace(".", ",")}`;

    loading.style.display = "none";
    section.style.display = "block";

  }, 200);
}

function gerarOutroLook() {
  const looks = LOOKS_CLIMA[climaSelecionado];

  if (!looks) return;

  lookVariacaoIndex++;

  if (lookVariacaoIndex >= looks.length) {
    lookVariacaoIndex = 0;
  }

  gerarLook();
}

function adicionarCarrinho() {
  if (!lookAtual.length) return;

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  lookAtual.forEach(item => carrinho.push(item));

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  alert("Look adicionado ao carrinho!");
}