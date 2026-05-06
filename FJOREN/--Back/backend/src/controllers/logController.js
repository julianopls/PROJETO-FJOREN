const prisma = require('../prisma')

async function listar(req, res) {
  const logs = await prisma.logAdmin.findMany({
    orderBy: { executadoEm: 'desc' },
    include: { usuario: { select: { nome: true, email: true } } },
  })
  return res.json(logs)
}

module.exports = { listar }