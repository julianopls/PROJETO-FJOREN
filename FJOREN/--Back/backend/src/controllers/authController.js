const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const prisma = require('../prisma')

async function registrar(req, res) {
  const { nome, email, senha } = req.body

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Nome, e-mail e senha são obrigatórios.' })
  }

  const existe = await prisma.usuario.findUnique({ where: { email } })
  if (existe) {
    return res.status(409).json({ erro: 'E-mail já cadastrado.' })
  }

  const senhaHash = await bcrypt.hash(senha, 10)

  const usuario = await prisma.usuario.create({
    data: { nome, email, senhaHash },
    select: { id: true, nome: true, email: true, perfil: true },
  })

  return res.status(201).json(usuario)
}

async function login(req, res) {
  const { email, senha } = req.body

  if (!email || !senha) {
    return res.status(400).json({ erro: 'E-mail e senha são obrigatórios.' })
  }

  const usuario = await prisma.usuario.findUnique({ where: { email } })
  if (!usuario) {
    return res.status(401).json({ erro: 'Credenciais inválidas.' })
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senhaHash)
  if (!senhaValida) {
    return res.status(401).json({ erro: 'Credenciais inválidas.' })
  }

  const token = jwt.sign(
    { id: usuario.id, perfil: usuario.perfil },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  )

  return res.json({ token, perfil: usuario.perfil, nome: usuario.nome })
}

module.exports = { 
    registrar, 
    login 
}