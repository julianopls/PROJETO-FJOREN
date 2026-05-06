require('dotenv').config()
const express = require('express')
const routes  = require('./src/routes')
 
const app = express()
 
app.use(express.json())
app.use('/api', routes)
 
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ erro: 'Erro interno do servidor.' })
})
 
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))