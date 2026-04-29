const jwt = require('jsonwebtoken')

function autenticar(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido.' })
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.usuario = payload
    next()
  } catch {
    return res.status(401).json({ erro: 'Token inválido ou expirado.' })
  }
}

function apenasAdmin(req, res, next) {
  if (req.usuario?.perfil !== 'administrador') {
    return res.status(403).json({ erro: 'Acesso restrito a administradores.' })
  }
  next()
}

module.exports = { autenticar, apenasAdmin }