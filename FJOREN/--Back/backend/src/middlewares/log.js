const prisma = require('../prisma')

function registrarLog(acao, tabela) {
  return async (req, res, next) => {
    res.on('finish', async () => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        try {
          await prisma.logAdmin.create({
            data: {
              idUsuario: req.usuario.id,
              acao,
              tabelaAfetada: tabela,
            },
          })
        } catch (err) {
          console.error('Erro ao registrar log:', err)
        }
      }
    })
    next()
  }
}

module.exports = { registrarLog }