// ── CATÁLOGO DE LOOKS POR CLIMA ──
const catalogo = {
  "extremo-calor": [
    { categoria: "Parte de Cima", nome: "Camiseta Branca Classic", preco: 89.99, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" },
    { categoria: "Parte de Baixo", nome: "Shorts Cargo Bege", preco: 119.99, img: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&q=80" },
    { categoria: "Calçado", nome: "Tênis Branco Minimal", preco: 249.99, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
    { categoria: "Acessório", nome: "Bucket Hat Bege", preco: 79.99, img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80" }
  ],
  "quente": [
    { categoria: "Parte de Cima", nome: "Polo Preta Slim", preco: 129.99, img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&q=80" },
    { categoria: "Parte de Baixo", nome: "Calça Chino Bege", preco: 189.99, img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80" },
    { categoria: "Calçado", nome: "Loafer Marrom", preco: 299.99, img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&q=80" },
    { categoria: "Acessório", nome: "Cinto Couro Preto", preco: 89.99, img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&q=80" }
  ],
  "morno": [
    { categoria: "Parte de Cima", nome: "Camisa Linho Off-White", preco: 159.99, img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80" },
    { categoria: "Parte de Baixo", nome: "Calça Jeans Slim", preco: 199.99, img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80" },
    { categoria: "Calçado", nome: "Sneaker Canvas Branco", preco: 219.99, img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80" },
    { categoria: "Acessório", nome: "Mochila Preta Compacta", preco: 179.99, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
  ],
  "frio": [
    { categoria: "Parte de Cima", nome: "Moletom Oversized Cinza", preco: 179.99, img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80" },
    { categoria: "Parte de Baixo", nome: "Calça Jogger Preta", preco: 159.99, img: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=400&q=80" },
    { categoria: "Calçado", nome: "Bota Chelsea Preta", preco: 349.99, img: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=400&q=80" },
    { categoria: "Acessório", nome: "Gorro Lã Cinza Escuro", preco: 69.99, img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&q=80" }
  ],
  "muito-frio": [
    { categoria: "Parte de Cima", nome: "Puffer Jacket Preto", preco: 459.99, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
    { categoria: "Parte de Baixo", nome: "Calça Cargo Grossa", preco: 229.99, img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
    { categoria: "Calçado", nome: "Bota Couro com Forro", preco: 499.99, img: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=400&q=80" },
    { categoria: "Acessório", nome: "Cachecol Lã Grossa", preco: 99.99, img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&q=80" }
  ]
};

// ── ESTADO ──
let climaAtual = null;

// ── ELEMENTOS ──
const climaGrid    = document.getElementById('climaGrid');
const lookSection  = document.getElementById('look-section');
const lookLoading  = document.getElementById('lookLoading');
const produtosGrid = document.getElementById('produtosGrid');
const totalValor   = document.getElementById('totalValor');
const btnRegenerate = document.getElementById('btnRegenerate');
const btnCarrinho  = document.getElementById('btnCarrinho');

// ── SELECIONAR CLIMA ──
climaGrid.addEventListener('click', e => {
  const card = e.target.closest('.card-clima');
  if (!card) return;

  document.querySelectorAll('.card-clima').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  climaAtual = card.dataset.clima;
  exibirLook(catalogo[climaAtual]);
});

// ── GERAR OUTRO LOOK ──
btnRegenerate.addEventListener('click', () => {
  if (!climaAtual) return;
  const shuffled = [...catalogo[climaAtual]].sort(() => Math.random() - 0.5);
  exibirLook(shuffled);
});

// ── ADICIONAR AO CARRINHO ──
btnCarrinho.addEventListener('click', () => {
  btnCarrinho.textContent = '✓ Adicionado!';
  btnCarrinho.style.background = '#2a2a2a';
  btnCarrinho.style.color = '#fff';

  setTimeout(() => {
    btnCarrinho.innerHTML = `
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
      Adicionar Tudo ao Carrinho`;
    btnCarrinho.style.background = '';
    btnCarrinho.style.color = '';
  }, 2000);
});

// ── RENDERIZAR LOOK ──
function exibirLook(produtos) {
  lookSection.classList.remove('visible');
  lookLoading.classList.add('visible');

  setTimeout(() => {
    lookLoading.classList.remove('visible');
    produtosGrid.innerHTML = '';
    let total = 0;

    produtos.forEach(p => {
      total += p.preco;
      const card = document.createElement('div');
      card.className = 'produto-card';
      card.innerHTML = `
        <div class="categoria-label">${p.categoria}</div>
        <img src="${p.img}" alt="${p.nome}" loading="lazy"/>
        <div class="produto-info">
          <div class="produto-nome">${p.nome}</div>
          <div class="produto-preco">R$${p.preco.toFixed(2).replace('.', ',')}</div>
        </div>
      `;
      produtosGrid.appendChild(card);
    });

    totalValor.textContent = `R$${total.toFixed(2).replace('.', ',')}`;
    lookSection.classList.add('visible');
  }, 700);
}