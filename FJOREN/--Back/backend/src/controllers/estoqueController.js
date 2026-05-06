const prisma = require('../prisma')

async function listarPorProduto(req, res) {
  const { idProduto } = req.params

  const estoque = await prisma.estoque.findMany({
    where: { idProduto: Number(idProduto) },
  })

  return res.json(estoque)
}

async function adicionar(req, res) {
  const { idProduto, tamanho, cor, quantidade } = req.body

  if (!idProduto || !tamanho || !cor || quantidade === undefined) {
    return res.status(400).json({ erro: 'idProduto, tamanho, cor e quantidade são obrigatórios.' })
  }

  if (Number(quantidade) < 0) {
    return res.status(400).json({ erro: 'Quantidade não pode ser negativa.' })
  }

  const produto = await prisma.produto.findUnique({ where: { id: Number(idProduto) } })
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' })

  const duplicado = await prisma.estoque.findUnique({
    where: { idProduto_tamanho_cor: { idProduto: Number(idProduto), tamanho, cor } },
  })
  if (duplicado) return res.status(409).json({ erro: 'Estoque já existe para este produto, tamanho e cor.' })

  const item = await prisma.estoque.create({
    data: { idProduto: Number(idProduto), tamanho, cor, quantidade: Number(quantidade) },
  })

  return res.status(201).json(item)
}

async function atualizar(req, res) {
  const { id } = req.params
  const { quantidade } = req.body

  if (quantidade === undefined || Number(quantidade) < 0) {
    return res.status(400).json({ erro: 'Quantidade válida é obrigatória.' })
  }

  const item = await prisma.estoque.findUnique({ where: { id: Number(id) } })
  if (!item) return res.status(404).json({ erro: 'Item de estoque não encontrado.' })

  const atualizado = await prisma.estoque.update({
    where: { id: Number(id) },
    data: { quantidade: Number(quantidade) },
  })

  return res.json(atualizado)
}

module.exports = { listarPorProduto, 
    adicionar, 
    atualizar 
}