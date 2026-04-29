const prisma = require('../prisma')

async function listar(req, res) {
  const { id: idUsuario, perfil } = req.usuario

  const pedidos = await prisma.pedido.findMany({
    where: perfil === 'administrador' ? {} : { idUsuario },
    include: {
      itens: {
        include: { produto: { select: { nome: true } } },
      },
    },
    orderBy: { criadoEm: 'desc' },
  })

  return res.json(pedidos)
}

async function buscarPorId(req, res) {
  const { id } = req.params
  const { id: idUsuario, perfil } = req.usuario

  const pedido = await prisma.pedido.findUnique({
    where: { id: Number(id) },
    include: {
      itens: {
        include: { produto: { select: { nome: true, preco: true } } },
      },
    },
  })

  if (!pedido) return res.status(404).json({ erro: 'Pedido não encontrado.' })

  if (perfil !== 'administrador' && pedido.idUsuario !== idUsuario) {
    return res.status(403).json({ erro: 'Acesso negado.' })
  }

  return res.json(pedido)
}

async function criar(req, res) {
  const idUsuario = req.usuario.id
  const { itens } = req.body

  if (!itens || !Array.isArray(itens) || itens.length === 0) {
    return res.status(400).json({ erro: 'A lista de itens é obrigatória.' })
  }

  try {
    const pedido = await prisma.$transaction(async (tx) => {
      let valorTotal = 0
      const itensPedido = []

      for (const item of itens) {
        const { idProduto, tamanho, quantidade } = item

        const produto = await tx.produto.findUnique({ where: { id: Number(idProduto) } })
        if (!produto) throw new Error(`Produto ${idProduto} não encontrado.`)

        const estoque = await tx.estoque.findFirst({
          where: { idProduto: Number(idProduto), tamanho },
        })

        if (!estoque || estoque.quantidade < Number(quantidade)) {
          throw new Error(`Estoque insuficiente para o produto ${produto.nome} no tamanho ${tamanho}.`)
        }

        await tx.estoque.update({
          where: { id: estoque.id },
          data: { quantidade: estoque.quantidade - Number(quantidade) },
        })

        valorTotal += Number(produto.preco) * Number(quantidade)
        itensPedido.push({
          idProduto: Number(idProduto),
          quantidade: Number(quantidade),
          precoUnitario: produto.preco,
          tamanho,
        })
      }

      const novoPedido = await tx.pedido.create({
        data: {
          idUsuario,
          valorTotal,
          itens: { create: itensPedido },
        },
        include: { itens: true },
      })

      return novoPedido
    })

    return res.status(201).json(pedido)
  } catch (err) {
    return res.status(422).json({ erro: err.message })
  }
}

module.exports = { listar, 
    buscarPorId, 
    criar 
}