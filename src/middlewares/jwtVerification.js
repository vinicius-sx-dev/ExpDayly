const { extractBearerToken, verificarToken } = require('../utils/jwt');

async function verify(req, res, next){

  try {
    const token = extractBearerToken(req.headers);

    verificarToken(token)  

    req.token = token

    next()

  } catch (error) {
    console.error('Erro ao verificar token no middleware | ', error);

    return res.status(401).json({
      mensagem: 'Token inválido ou expirado'
    })
  }

  

  

}