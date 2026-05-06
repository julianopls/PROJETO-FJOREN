const prisma = require('../prisma')

async function listarPorProduto(req, res) {
  const { idProduto } = req.params

  const avaliacoes = await prisma.avaliacao.findMany({
    where: { idProduto: Number(idProduto) },
    include: { usuario: { select: { nome: true } } },
    orderBy: { id: 'desc' },
  })

  return res.json(avaliacoes)
}

async function criar(req, res) {
  const idUsuario = req.usuario.id
  const { idProduto, idPedido, nota, comentario } = req.body

  if (!idProduto || !idPedido || nota === undefined) {
    return res.status(400).json({ erro: 'idProduto, idPedido e nota são obrigatórios.' })
  }

  if (nota < 1 || nota > 5) {
    return res.status(400).json({ erro: 'Nota deve ser entre 1 e 5.' })
  }

  const pedido = await prisma.pedido.findFirst({
    where: {
      id: Number(idPedido),
      idUsuario,
      itens: { some: { idProduto: Number(idProduto) } },
    },
  })

  if (!pedido) {
    return res.status(403).json({ erro: 'Você só pode avaliar produtos que comprou.' })
  }

  const jaAvaliou = await prisma.avaliacao.findUnique({
    where: {
      idUsuario_idProduto_idPedido: {
        idUsuario,
        idProduto: Number(idProduto),
        idPedido: Number(idPedido),
      },
    },
  })

  if (jaAvaliou) return res.status(409).json({ erro: 'Você já avaliou este produto.' })

  const avaliacao = await prisma.avaliacao.create({
    data: {
      idUsuario,
      idProduto: Number(idProduto),
      idPedido: Number(idPedido),
      nota: Number(nota),
      comentario,
    },
  })

  return res.status(201).json(avaliacao)
}

module.exports = { listarPorProduto, 
    criar 
}