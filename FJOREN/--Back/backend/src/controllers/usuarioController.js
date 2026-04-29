const bcrypt = require('bcrypt')
const prisma = require('../prisma')

async function listar(req, res) {
  const usuarios = await prisma.usuario.findMany({
    select: { id: true, nome: true, email: true, perfil: true, criadoEm: true },
  })
  return res.json(usuarios)
}

async function buscarPorId(req, res) {
  const { id } = req.params

  const usuario = await prisma.usuario.findUnique({
    where: { id: Number(id) },
    select: { id: true, nome: true, email: true, perfil: true, criadoEm: true },
  })

  if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado.' })
  return res.json(usuario)
}

async function criar(req, res) {
  const { nome, email, senha, perfil } = req.body

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Nome, e-mail e senha são obrigatórios.' })
  }

  const existe = await prisma.usuario.findUnique({ where: { email } })
  if (existe) return res.status(409).json({ erro: 'E-mail já cadastrado.' })

  const senhaHash = await bcrypt.hash(senha, 10)

  const usuario = await prisma.usuario.create({
    data: { nome, email, senhaHash, perfil: perfil || 'cliente' },
    select: { id: true, nome: true, email: true, perfil: true },
  })

  return res.status(201).json(usuario)
}

async function atualizar(req, res) {
  const { id } = req.params
  const { nome, email, senha, perfil } = req.body

  const usuario = await prisma.usuario.findUnique({ where: { id: Number(id) } })
  if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado.' })

  const dados = {}
  if (nome) dados.nome = nome
  if (email) dados.email = email
  if (perfil) dados.perfil = perfil
  if (senha) dados.senhaHash = await bcrypt.hash(senha, 10)

  const atualizado = await prisma.usuario.update({
    where: { id: Number(id) },
    data: dados,
    select: { id: true, nome: true, email: true, perfil: true },
  })

  return res.json(atualizado)
}

async function remover(req, res) {
  const { id } = req.params

  const usuario = await prisma.usuario.findUnique({ where: { id: Number(id) } })
  if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado.' })

  await prisma.usuario.delete({ where: { id: Number(id) } })
  return res.status(204).send()
}

module.exports = { listar, 
    buscarPorId, 
    criar, 
    atualizar, 
    remover 
}