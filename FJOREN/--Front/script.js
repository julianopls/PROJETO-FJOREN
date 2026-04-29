// =============================================
// FJOREN — SCRIPT.JS (index.html)
// =============================================

let carrosselIndex = 0;
const VISIVEIS = 3;

// ── CARROSSEL DE CATEGORIAS ──────────────────────────────────────
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
      <div class="card-cat-icone">${cat.icone}</div>
      <span>${i + start + 1}</span>
      <p>${cat.nome}</p>`;
    card.onclick = () => window.location.href = cat.arquivo;
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

// ── COLEÇÃO ──────────────────────────────────────────────────────
function renderColecao() {
  const container = document.getElementById('colecao-grid');
  if (!container || typeof COLECAO === 'undefined') return;

  container.innerHTML = '';
  COLECAO.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-md-3';
    col.innerHTML = `
      <div class="card-produto" onclick="abrirProduto(${p.id}, '${encodeURIComponent(JSON.stringify(p))}')">
        <img src="${p.img}" alt="${p.nome}" loading="lazy" onerror="this.style.background='#2a2a2a'">
        <p class="categoria">${p.categoria}</p>
        <h5>${p.nome}</h5>
        <span>R$${p.preco.toFixed(2).replace('.', ',')}</span>
      </div>`;
    container.appendChild(col);
  });
}

function abrirProduto(id, dadosEnc) {
  if (dadosEnc) {
    sessionStorage.setItem('produto_atual', decodeURIComponent(dadosEnc));
  }
  window.location.href = `produto.html?id=${id}`;
}

// ── INIT ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCarrossel();
  renderColecao();
});