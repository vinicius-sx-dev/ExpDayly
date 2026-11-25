const {
  hashPassword,
  comparePassword
} = require('../utils/password');

const { checkPassword } = require('../utils/passwordVerification')

const {
  gerarToken,
  verificarToken
} = require('../utils/jwt');

const userRepo = require('../repositories/userRepo');

async function createUser(name, email, password) {

  try {
    const resultado = await checkPassword(password);

    if (!resultado.score || resultado.score < 3) return res.status(403).json({ mensagem: "Senha fraca" })

    const hash = await hashPassword(password);

    const createUser = await userRepo.createUser(name, email, hash)
  
    if(createUser === 0){
      throw new Error("Erro ao gerar log")
    } else {
      return true;
    }

  } catch (error) {
    console.error("Erro na camada de serviço ao criar usuário | ", error);
    throw new Error(error)
  }

}

module.exports = {
  createUser
}