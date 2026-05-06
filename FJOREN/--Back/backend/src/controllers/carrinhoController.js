const prisma = require('../prisma')

async function obter(req, res) {
  const idUsuario = req.usuario.id

  let carrinho = await prisma.carrinho.findUnique({
    where: { idUsuario },
    include: {
      itens: {
        include: { produto: { select: { id: true, nome: true, preco: true } } },
      },
    },
  })

  if (!carrinho) {
    carrinho = await prisma.carrinho.create({
      data: { idUsuario },
      include: { itens: true },
    })
  }

  const total = carrinho.itens.reduce(
    (acc, item) => acc + Number(item.produto.preco) * item.quantidade,
    0
  )

  return res.json({ ...carrinho, total: total.toFixed(2) })
}

async function adicionarItem(req, res) {
  const idUsuario = req.usuario.id
  const { idProduto, tamanho, quantidade } = req.body

  if (!idProduto || !tamanho || !quantidade) {
    return res.status(400).json({ erro: 'idProduto, tamanho e quantidade são obrigatórios.' })
  }

  const estoque = await prisma.estoque.findFirst({
    where: { idProduto: Number(idProduto), tamanho },
  })

  if (!estoque || estoque.quantidade < Number(quantidade)) {
    return res.status(422).json({ erro: 'Estoque insuficiente.' })
  }

  let carrinho = await prisma.carrinho.findUnique({ where: { idUsuario } })
  if (!carrinho) {
    carrinho = await prisma.carrinho.create({ data: { idUsuario } })
  }

  const item = await prisma.itemCarrinho.create({
    data: {
      idCarrinho: carrinho.id,
      idProduto: Number(idProduto),
      tamanho,
      quantidade: Number(quantidade),
    },
  })

  return res.status(201).json(item)
}

async function removerItem(req, res) {
  const { id } = req.params
  const idUsuario = req.usuario.id

  const item = await prisma.itemCarrinho.findUnique({
    where: { id: Number(id) },
    include: { carrinho: true },
  })

  if (!item || item.carrinho.idUsuario !== idUsuario) {
    return res.status(404).json({ erro: 'Item não encontrado.' })
  }

  await prisma.itemCarrinho.delete({ where: { id: Number(id) } })
  return res.status(204).send()
}

module.exports = { obter, 
    adicionarItem, 
    removerItem 
}