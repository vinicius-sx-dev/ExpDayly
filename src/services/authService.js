const {
  hashPassword,
  comparePassword
} = require('../utils/password');

const { checkPassword } = require('../utils/passwordVerification')

const {
  gerarToken,
  verificarToken
} = require('../utils/jwt');

const { loginEmailLimiter } = require('../security/rateLimiters');

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


async function logUser(email, password) {

  try {

    const getData = await userRepo.getData(email);

    const previous_password = getData.hashed_password;
    const previous_role = getData.role;
    const id = getData.id;

    const verification = await comparePassword(password, previous_password)

    if(!verification){
      await loginEmailLimiter.consume(email);
      throw new Error("Email ou senha inválidos");
    }

    await loginEmailLimiter.delete(email)

    const agora = new Date();

    // console.log(agora.getHours());   
    // console.log(agora.getMinutes()); 
    const hourMin = agora.toLocaleTimeString('pt-BR')

    const token = gerarToken({
      id: id,
      role: previous_role,
      time: hourMin
    })
  
    if(!token){
      throw new Error("Erro ao gerar token")
    }

    return token;

  } catch (error) {
    console.error("Erro na camada de serviço ao logar usuário | ", error);
    throw new Error(error)
  }

}


async function getUser(id){

  try {

    const usuario = await userRepo.getUser(id)

    return usuario;
    
  } catch (error) {
    console.error("Erro na camada de serviço ao logar usuário | ", error);
    throw new Error(error)   
  }

}

module.exports = {
  createUser,
  logUser,
  getUser,
}