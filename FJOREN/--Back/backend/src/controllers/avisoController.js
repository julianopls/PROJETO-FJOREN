const prisma = require('../prisma')

async function listar(req, res) {
  const avisos = await prisma.aviso.findMany({
    orderBy: { publicadoEm: 'desc' },
    include: { admin: { select: { nome: true } } },
  })
  return res.json(avisos)
}

async function criar(req, res) {
  const idAdmin = req.usuario.id
  const { titulo, conteudo } = req.body

  if (!titulo || !conteudo) {
    return res.status(400).json({ erro: 'Título e conteúdo são obrigatórios.' })
  }

  const aviso = await prisma.aviso.create({
    data: { idAdmin, titulo, conteudo },
  })

  return res.status(201).json(aviso)
}

async function remover(req, res) {
  const { id } = req.params

  const aviso = await prisma.aviso.findUnique({ where: { id: Number(id) } })
  if (!aviso) return res.status(404).json({ erro: 'Aviso não encontrado.' })

  await prisma.aviso.delete({ where: { id: Number(id) } })
  return res.status(204).send()
}

module.exports = { listar, 
    criar, 
    remover
 }