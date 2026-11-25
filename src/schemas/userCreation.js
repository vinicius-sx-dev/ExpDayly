const { verifyEmail } = require('../utils/emailRegex')


function verifyCreateUser(req, res, next) {
  const { name, email, password } = req.body

  if (!name || !email || !password) return res.status(401).json({ mensagem: "Campos obrigatórios" });

  if ((String(name).trim()).length < 2) return res.status(403).json({ mensagem: "Nome inválido " })

  if (!verifyEmail(email)) return res.status(403).json({ mensagem: "Formato de email inválido " })

  if (String(password).length < 6) return res.status(403).json({ mensagem: "Senha fraca" })

  next()
}

module.exports = {
  verifyCreateUser
}