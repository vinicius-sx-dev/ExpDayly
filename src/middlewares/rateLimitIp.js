const { ipLimiter } = require('../security/rateLimiters');

const rateLimitIpMiddleware = async (req, res, next) => {
  try {
    
    await ipLimiter.consume(req.ip);
    next();
  } catch (rejRes) {
    
    const retryAfter = Math.round(rejRes.msBeforeNext / 1000 ) || 1;

    res.set('Retry-After', String(retryAfter));
    return res.status(429).json({
      erro: 'Muitas requisições vindas desse IP. Tente novamente mais tarde',
      tentarNovamenteEmSegundos: retryAfter
    });
  }
};

module.exports = rateLimitIpMiddleware;