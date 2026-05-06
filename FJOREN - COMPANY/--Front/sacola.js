// =============================================
// FJOREN — SACOLA.JS (carrinho compartilhado)
// =============================================

// ── SACOLA ───────────────────────────────────────────────────────
function getSacola() {
  return JSON.parse(localStorage.getItem('fjoren_sacola') || '[]');
}

function setSacola(items) {
  localStorage.setItem('fjoren_sacola', JSON.stringify(items));
  atualizarBadge();
}

function adicionarSacola(produto) {
  const sacola = getSacola();
  const existe = sacola.find(p => p.id === produto.id);
  if (existe) {
    existe.qtd = (existe.qtd || 1) + 1;
  } else {
    sacola.push({ ...produto, qtd: 1 });
  }
  setSacola(sacola);
  mostrarToast(`${produto.nome} adicionado à sacola!`);
  renderizarSacola();
}

function removerSacola(id) {
  const sacola = getSacola().filter(p => p.id !== id);
  setSacola(sacola);
  renderizarSacola();
}

function atualizarBadge() {
  const sacola = getSacola();
  const total = sacola.reduce((acc, p) => acc + (p.qtd || 1), 0);
  document.querySelectorAll('.sacola-badge').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

function renderizarSacola() {
  const lista = document.getElementById('itens-sacola');
  const totalEl = document.getElementById('sacola-total');
  if (!lista) return;

  const sacola = getSacola();
  lista.innerHTML = '';

  if (sacola.length === 0) {
    lista.innerHTML = '<p class="sacola-vazia">Sua sacola está vazia.</p>';
    if (totalEl) totalEl.textContent = 'R$0,00';
    return;
  }

  let total = 0;
  sacola.forEach(p => {
    const subtotal = p.preco * (p.qtd || 1);
    total += subtotal;
    lista.innerHTML += `
      <div class="sacola-item">
        <img src="${p.img}" alt="${p.nome}" onerror="this.style.background='#2a2a2a';this.src=''">
        <div class="sacola-item-info">
          <p class="sacola-item-nome">${p.nome}</p>
          <span class="sacola-item-preco">R$${subtotal.toFixed(2).replace('.', ',')}</span>
          ${p.qtd > 1 ? `<span class="sacola-item-qtd">x${p.qtd}</span>` : ''}
        </div>
        <button class="sacola-remover" onclick="removerSacola(${p.id})">×</button>
      </div>`;
  });

  if (totalEl) totalEl.textContent = `R$${total.toFixed(2).replace('.', ',')}`;
}

function toggleSacola() {
  const el = document.getElementById('sacola');
  if (!el) return;
  el.classList.toggle('ativa');
  if (el.classList.contains('ativa')) renderizarSacola();
}

// ── TOAST ────────────────────────────────────────────────────────
function mostrarToast(msg) {
  let toast = document.getElementById('fjoren-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'fjoren-toast';
    toast.className = 'fjoren-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ── AUTENTICAÇÃO ─────────────────────────────────────────────────
function getUsuario() {
  return JSON.parse(localStorage.getItem('fjoren_usuario') || 'null');
}

function setUsuario(dados) {
  localStorage.setItem('fjoren_usuario', JSON.stringify(dados));
}

function logout() {
  localStorage.removeItem('fjoren_usuario');
  window.location.href = 'index.html';
}

// ── MODAL DE LOGIN/CADASTRO ──────────────────────────────────────
function abrirModalAuth() {
  const usuario = getUsuario();
  if (usuario) {
    window.location.href = 'perfil.html';
    return;
  }
  const modal = document.getElementById('modal-auth');
  if (modal) modal.classList.add('ativo');
}

function fecharModalAuth() {
  const modal = document.getElementById('modal-auth');
  if (modal) modal.classList.remove('ativo');
}

function trocarAba(aba) {
  document.querySelectorAll('.auth-aba').forEach(a => a.classList.remove('ativa'));
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('ativo'));
  document.querySelector(`.auth-aba[data-aba="${aba}"]`)?.classList.add('ativa');
  document.getElementById(`form-${aba}`)?.classList.add('ativo');
}

// Buscar endereço pelo CEP
async function buscarCEP(cep) {
  cep = cep.replace(/\D/g, '');
  if (cep.length !== 8) return;
  try {
    const r = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const d = await r.json();
    if (!d.erro) {
      document.getElementById('cad-rua').value = d.logradouro || '';
      document.getElementById('cad-bairro').value = d.bairro || '';
      document.getElementById('cad-cidade').value = d.localidade || '';
      document.getElementById('cad-estado').value = d.uf || '';
    }
  } catch {}
}

function cadastrar(e) {
  e.preventDefault();
  const nome   = document.getElementById('cad-nome').value.trim();
  const email  = document.getElementById('cad-email').value.trim();
  const senha  = document.getElementById('cad-senha').value;
  const cep    = document.getElementById('cad-cep').value.trim();
  const rua    = document.getElementById('cad-rua').value.trim();
  const bairro = document.getElementById('cad-bairro').value.trim();
  const cidade = document.getElementById('cad-cidade').value.trim();
  const estado = document.getElementById('cad-estado').value.trim();

  if (!nome || !email || !senha || !cep) {
    mostrarToast('Preencha todos os campos obrigatórios.');
    return;
  }

  setUsuario({ nome, email, senha, cep, rua, bairro, cidade, estado, avatar: '' });
  fecharModalAuth();
  mostrarToast(`Bem-vindo, ${nome}!`);
  atualizarIconePerfil();
}

function fazerLogin(e) {
  e.preventDefault();
  const email = document.getElementById('log-email').value.trim();
  const senha = document.getElementById('log-senha').value;
  const usuario = getUsuario();

  if (usuario && usuario.email === email && usuario.senha === senha) {
    fecharModalAuth();
    mostrarToast(`Bem-vindo de volta, ${usuario.nome}!`);
    atualizarIconePerfil();
  } else {
    mostrarToast('Email ou senha incorretos.');
  }
}

function atualizarIconePerfil() {
  const usuario = getUsuario();
  const icones = document.querySelectorAll('.perfil-link');
  icones.forEach(el => {
    if (usuario) {
      el.title = usuario.nome;
    }
  });
}

// ── INIT ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  atualizarBadge();
  atualizarIconePerfil();

  // Fechar sacola ao clicar fora
  document.addEventListener('click', (e) => {
    const sacola = document.getElementById('sacola');
    const btn = document.querySelector('[onclick="toggleSacola()"]');
    if (sacola && sacola.classList.contains('ativa')) {
      if (!sacola.contains(e.target) && e.target !== btn && !btn?.contains(e.target)) {
        sacola.classList.remove('ativa');
      }
    }
  });

  // Fechar modal ao clicar fora
  document.addEventListener('click', (e) => {
    const modal = document.getElementById('modal-auth');
    if (modal && e.target === modal) fecharModalAuth();
  });
});