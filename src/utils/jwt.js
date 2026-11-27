const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

function gerarToken(payload) {

  try {
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: '5h'
      }
    );

    return token;
  }catch(error){
    console.error('Erro ao gerar token: ', error);
    throw new Error('Erro ao gerar token')
  }

}

function verificarToken(token){

  try{

    const decoded = jwt.verify(token, JWT_SECRET);

    return decoded;

  }catch(error){
    console.error('Token inválido ou expirado', error);
    throw new Error('Token inválido ou expirado')
  }

}

function extractBearerToken(header){

  const tokenInteiro = header.authorization;

  if(!tokenInteiro){
    throw new Error('Token não presente')
  }

  const token = tokenInteiro.split(" ")[1];

  const type = tokenInteiro.split(" ")[0];

  if(type != "Bearer"){
    throw new Error('Formato de token inválido')
  }

  if(!token){
    throw new Error('Formato de token inválido')
  }

  return token;

}

module.exports = {
  gerarToken,
  verificarToken,
  extractBearerToken,
}