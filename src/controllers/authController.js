const {
  gerarToken,
  verificarToken,
  extractBearerToken
} = require('../utils/jwt');

const { loginEmailLimiter } = require('../security/rateLimiters');

const authService = require('../services/authService')

async function createUser(req, res) {
  try {

    const { name, email, password } = req.body;

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

async function logUser(req, res) {
  try {

    const { email, password } = req.body;

    const resEmail = await loginEmailLimiter.get(email);

    if (resEmail !== null && resEmail.consumedPoints >= loginEmailLimiter.points) {
      const retryAfter = Math.round(resEmail.msBeforeNext / 1000) || 1;
      res.set('Retry-After', String(retryAfter));

      return res.status(429).json({
        erro: 'Conta temporariamente bloqueada por excesso de tentativas.',
        tentarNovamenteEmSegundos: retryAfter
      });
    }

    const response = await authService.logUser(email, password)

    return res.status(201).json({
      mensagem: "User in",
      token: response
    })

  } catch (error) {
    console.error("Erro interno ao logar | ", error)

    if (error.msBeforeNext) {
      const retryAfter = Math.round(err.msBeforeNext / 1000) || 1;
      res.set('Retry-After', String(retryAfter));
      return res.status(429).json({
        erro: 'Muitas tentativas falhas. Conta bloqueada por 15 minutos.',
        tentarNovamenteEmSegundos: retryAfter
      });
    }

    return res.status(500).json({
      mensagem: `Erro interno ao logar ${error}`
    })
  }
}


async function getUser(req, res){

  try {

    const id = req.id

    const resposta = await authService.getUser(id)

    return res.status(200).json({
      usuario: resposta
    });
    
  } catch (error) {
    console.error('Erro ao pegar usuário');
    return res.status(500).json({
      mensagem: 'Erro ao pegar o usuário'
    });
  }

}

module.exports = {
  createUser,
  logUser,
  getUser,
}