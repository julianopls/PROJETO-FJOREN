// =============================================
// FJOREN — PRODUTO.JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  const dados = sessionStorage.getItem('produto_atual');
  if (!dados) { window.location.href = 'index.html'; return; }

  const p = JSON.parse(dados);

  document.title = `${p.nome} — FJOREN`;
  document.getElementById('prod-img').src = p.img;
  document.getElementById('prod-img').alt = p.nome;
  document.getElementById('prod-categoria').textContent = p.categoria;
  document.getElementById('prod-nome').textContent = p.nome;
  document.getElementById('prod-preco').textContent = `R$${p.preco.toFixed(2).replace('.', ',')}`;

  // Tamanhos
  const tamanhos = ['P', 'M', 'G', 'GG'];
  const tamContainer = document.getElementById('tamanhos');
  if (tamContainer) {
    tamanhos.forEach((t, i) => {
      const btn = document.createElement('button');
      btn.className = 'tamanho-btn' + (i === 0 ? ' ativo' : '');
      btn.textContent = t;
      btn.onclick = () => {
        document.querySelectorAll('.tamanho-btn').forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');
      };
      tamContainer.appendChild(btn);
    });
  }

  // Adicionar ao carrinho
  document.getElementById('btn-adicionar')?.addEventListener('click', () => {
    const tam = document.querySelector('.tamanho-btn.ativo')?.textContent || 'M';
    adicionarSacola({ ...p, tamanho: tam });
  });
});