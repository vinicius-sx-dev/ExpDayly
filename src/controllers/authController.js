const {
    gerarToken,
    verificarToken,
    extractBearerToken
} = require('../utils/jwt');

const authService = require('../services/authService')

async function createUser(req, res){
  try {

    const {name, email, password} = req.body;

    await authService.createUser(name, email, password)

    return res.status(201).json({
      mensagem: "User created succesfully",
      email: email
    })
    
  } catch (error) {
    console.error("Erro interno ao criar usuário | ", error)
    return res.status(500).json({
      mensagem: `Erro interno ao criar usuário ${error}`
    })
  }
}

module.exports ={
  createUser
}