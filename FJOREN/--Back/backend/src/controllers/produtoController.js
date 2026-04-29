const prisma = require('../prisma')

async function listar(req, res) {
  const { categoria, estilo, idColecao } = req.query

  const produtos = await prisma.produto.findMany({
    where: {
      ...(categoria && { categoria }),
      ...(estilo && { estilo }),
      ...(idColecao && { idColecao: Number(idColecao) }),
    },
    include: {
      colecao: { select: { id: true, nome: true } },
      estoque: true,
    },
  })

  return res.json(produtos)
}

async function buscarPorId(req, res) {
  const { id } = req.params

  const produto = await prisma.produto.findUnique({
    where: { id: Number(id) },
    include: {
      colecao: true,
      estoque: true,
      avaliacoes: {
        include: { usuario: { select: { nome: true } } },
      },
    },
  })

  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' })
  return res.json(produto)
}

async function criar(req, res) {
  const { nome, descricao, preco, categoria, estilo, idColecao } = req.body

  if (!nome || !preco || !categoria || !idColecao) {
    return res.status(400).json({ erro: 'Nome, preço, categoria e coleção são obrigatórios.' })
  }

  if (Number(preco) <= 0) {
    return res.status(400).json({ erro: 'O preço deve ser um valor positivo.' })
  }

  const colecao = await prisma.colecao.findUnique({ where: { id: Number(idColecao) } })
  if (!colecao) return res.status(404).json({ erro: 'Coleção não encontrada.' })

  const totalProdutos = await prisma.produto.count({ where: { idColecao: Number(idColecao) } })
  if (totalProdutos >= colecao.limiteProdutos) {
    return res.status(422).json({ erro: 'Limite de produtos da coleção atingido.' })
  }

  const duplicado = await prisma.produto.findUnique({
    where: { nome_idColecao: { nome, idColecao: Number(idColecao) } },
  })
  if (duplicado) return res.status(409).json({ erro: 'Produto já cadastrado nesta coleção.' })

  const produto = await prisma.produto.create({
    data: { nome, descricao, preco: Number(preco), categoria, estilo, idColecao: Number(idColecao) },
  })

  return res.status(201).json(produto)
}

async function atualizar(req, res) {
  const { id } = req.params
  const { nome, descricao, preco, categoria, estilo, idColecao } = req.body

  const produto = await prisma.produto.findUnique({ where: { id: Number(id) } })
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' })

  if (preco && Number(preco) <= 0) {
    return res.status(400).json({ erro: 'O preço deve ser um valor positivo.' })
  }

  const atualizado = await prisma.produto.update({
    where: { id: Number(id) },
    data: {
      ...(nome && { nome }),
      ...(descricao !== undefined && { descricao }),
      ...(preco && { preco: Number(preco) }),
      ...(categoria && { categoria }),
      ...(estilo !== undefined && { estilo }),
      ...(idColecao && { idColecao: Number(idColecao) }),
    },
  })

  return res.json(atualizado)
}

async function remover(req, res) {
  const { id } = req.params

  const produto = await prisma.produto.findUnique({ where: { id: Number(id) } })
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' })

  await prisma.produto.delete({ where: { id: Number(id) } })
  return res.status(204).send()
}

module.exports = { listar, 
    buscarPorId, 
    criar, 
    atualizar, 
    remover 
}