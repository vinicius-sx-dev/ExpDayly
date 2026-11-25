const healthRepo = require('../repositories/healthRepo');

async function healthCheck(){
  try {

    const resposta = await healthRepo.checkDatabase()

    if (!resposta) {
      throw new Error("Erro ao conectar-se ao repositório")
    }

    return resposta;
    
  } catch (error) {
    return error
  }
}

module.exports = {
  healthCheck
}