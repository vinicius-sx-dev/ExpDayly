const { verifyEmail } = require('../utils/emailRegex')

function validateFields(fields, req, res){

  const camposEnviados = Object.keys(req.body)

  const camposExtras = camposEnviados.filter(campo => !fields.includes(campo))

  if(camposExtras.length > 0){
    return res.status(422).json({
      mensagem: `Campos não permitidos: ${camposExtras.join(", ")}`
  })
  }

  return;
}


function verifyCreateUser(req, res, next) {

  validateFields(['name', 'email', 'password'], req, res)

  const { name, email, password } = req.body

  if (!name || !email || !password) return res.status(401).json({ mensagem: "Campos obrigatórios" });

  if ((String(name).trim()).length < 2) return res.status(403).json({ mensagem: "Nome inválido " })

  if (!verifyEmail(email)) return res.status(403).json({ mensagem: "Formato de email inválido " })

  if (String(password).length < 6) return res.status(403).json({ mensagem: "Senha fraca" })

  next();
}

function verifyLogUser(req, res, next){

  validateFields(['email', 'password'], req, res)

  const { email, password } = req.body

  if (!email || !password) return res.status(401).json({ mensagem: "Campos obrigatórios" });

  if (!verifyEmail(email)) return res.status(403).json({ mensagem: "Formato de email inválido " })

  if (String(password).length < 6) return res.status(403).json({ mensagem: "Senha inválida" })

  next();
}

module.exports = {
  verifyCreateUser,
  verifyLogUser
}