let carrosselIndex = 0;
const VISIVEIS = 3;

function renderCarrossel() {
  const container = document.getElementById('cards');
  if (!container || typeof CATEGORIAS === 'undefined') return;

  container.innerHTML = '';

  const total = CATEGORIAS.length;
  const start = ((carrosselIndex % total) + total) % total;

  for (let i = 0; i < VISIVEIS; i++) {
    const cat = CATEGORIAS[(start + i) % total];

    const card = document.createElement('div');
    card.className = 'card-cat';

    card.innerHTML = `
      <img src="${cat.imagem}" class="card-cat-img" alt="${cat.nome}">
      <span>${cat.id}</span>
      <p>${cat.nome}</p>
    `;

    card.onclick = () => {
      window.location.href = cat.arquivo;
    };

    container.appendChild(card);
  }
}

function avancar() {
  carrosselIndex++;
  renderCarrossel();
}

function voltar() {
  carrosselIndex--;
  renderCarrossel();
}

function renderColecao() {
  const container = document.getElementById('colecao-grid');
  if (!container || typeof COLECAO === 'undefined') return;

  container.innerHTML = '';

  COLECAO.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-md-3';

    col.innerHTML = `
      <div class="card-produto" onclick="abrirProduto(${p.id}, '${encodeURIComponent(JSON.stringify(p))}')">
        <img src="${p.img}" alt="${p.nome}" loading="lazy">
        <p class="categoria">${p.categoria}</p>
        <h5>${p.nome}</h5>
        <span>R$${p.preco.toFixed(2).replace('.', ',')}</span>
      </div>
    `;

    container.appendChild(col);
  });
}

function abrirProduto(id, dadosEnc) {
  if (dadosEnc) {
    sessionStorage.setItem('produto_atual', decodeURIComponent(dadosEnc));
  }

  window.location.href = `produto.html?id=${id}`;
}

const DATA = [
  1,2,3,4,5,6,7,8,9,10,11,12
];


document.addEventListener('DOMContentLoaded', () => {

  /* ── CARROSSEL ── */
  renderCarrossel();

  /* ── COLEÇÃO ── */
  renderColecao();

  /* ── SPIN 3D ── */
  const spin = document.getElementById("spin");

  if (spin) {

  const N = 12;
  spin.style.setProperty("--n", N);

  for (let i = 0; i < N; i++) {

    const img = document.createElement("img");

    img.className = "fj-spin-card";
    img.src = `https://picsum.photos/600/800?random=${i}`;
    img.style.setProperty("--i", i);

    spin.appendChild(img);
  }
}
});