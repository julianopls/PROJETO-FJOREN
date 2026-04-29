const { Router } = require('express')
const { autenticar, apenasAdmin } = require('../middlewares/auth')
const { registrarLog } = require('../middlewares/log')

const authController     = require('../controllers/authController')
const usuarioController  = require('../controllers/usuarioController')
const produtoController  = require('../controllers/produtoController')
const estoqueController  = require('../controllers/estoqueController')
const carrinhoController = require('../controllers/carrinhoController')
const pedidoController   = require('../controllers/pedidoController')
const avaliacaoController = require('../controllers/avaliacaoController')
const avisoController    = require('../controllers/avisoController')
const logController      = require('../controllers/logController')

const router = Router()

// ── Auth ─────────────────────────────────────────────
router.post('/auth/registrar', authController.registrar)
router.post('/auth/login',     authController.login)

// ── Usuários (admin) ──────────────────────────────────
router.get   ('/usuarios',     autenticar, apenasAdmin, usuarioController.listar)
router.get   ('/usuarios/:id', autenticar, apenasAdmin, usuarioController.buscarPorId)
router.post  ('/usuarios',     autenticar, apenasAdmin, registrarLog('criar', 'usuario'), usuarioController.criar)
router.put   ('/usuarios/:id', autenticar, apenasAdmin, registrarLog('editar', 'usuario'), usuarioController.atualizar)
router.delete('/usuarios/:id', autenticar, apenasAdmin, registrarLog('excluir', 'usuario'), usuarioController.remover)

// ── Produtos ──────────────────────────────────────────
router.get   ('/produtos',     produtoController.listar)
router.get   ('/produtos/:id', produtoController.buscarPorId)
router.post  ('/produtos',     autenticar, apenasAdmin, registrarLog('criar', 'produto'), produtoController.criar)
router.put   ('/produtos/:id', autenticar, apenasAdmin, registrarLog('editar', 'produto'), produtoController.atualizar)
router.delete('/produtos/:id', autenticar, apenasAdmin, registrarLog('excluir', 'produto'), produtoController.remover)

// ── Provador virtual ──────────────────────────────────
router.get('/produtos/:id/provador', produtoController.buscarPorId)

// ── Estoque (admin) ───────────────────────────────────
router.get ('/produtos/:idProduto/estoque', autenticar, apenasAdmin, estoqueController.listarPorProduto)
router.post('/estoque',     autenticar, apenasAdmin, registrarLog('criar', 'estoque'), estoqueController.adicionar)
router.put ('/estoque/:id', autenticar, apenasAdmin, registrarLog('editar', 'estoque'), estoqueController.atualizar)

// ── Carrinho ──────────────────────────────────────────
router.get   ('/carrinho',        autenticar, carrinhoController.obter)
router.post  ('/carrinho/itens',  autenticar, carrinhoController.adicionarItem)
router.delete('/carrinho/itens/:id', autenticar, carrinhoController.removerItem)

// ── Pedidos ───────────────────────────────────────────
router.get ('/pedidos',     autenticar, pedidoController.listar)
router.get ('/pedidos/:id', autenticar, pedidoController.buscarPorId)
router.post('/pedidos',     autenticar, pedidoController.criar)

// ── Avaliações ────────────────────────────────────────
router.get ('/produtos/:idProduto/avaliacoes', avaliacaoController.listarPorProduto)
router.post('/avaliacoes', autenticar, avaliacaoController.criar)

// ── Avisos ────────────────────────────────────────────
router.get   ('/avisos',     avisoController.listar)
router.post  ('/avisos',     autenticar, apenasAdmin, registrarLog('criar', 'aviso'), avisoController.criar)
router.delete('/avisos/:id', autenticar, apenasAdmin, registrarLog('excluir', 'aviso'), avisoController.remover)

// ── Logs (admin) ──────────────────────────────────────
router.get('/admin/logs', autenticar, apenasAdmin, logController.listar)

module.exports = router