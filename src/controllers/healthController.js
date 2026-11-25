const healthService = require('../services/healthService')

async function healthCheck(req, res){
  try {

    const resposta = await healthService.healthCheck()

    if(!resposta) {
      return res.status(404).json({
        mensagem: "Camada de serviço não encontrada"
      })
    }

    return res.status(200).json({
      mensagem: "Servidor vivo",
      resposta: resposta
    })

  } catch (error) {
    return res.status(500).json({
      mensagem: "Erro no servidor"
    })
  }
}

module.exports ={
  healthCheck
}