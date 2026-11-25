const { RateLimiterMemory } = require('rate-limiter-flexible');

const ipLimiter = new RateLimiterMemory({
  points: 100,
  duration: 60*60
});

const loginEmailLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60 * 15,
  blockOuration: 60 * 15,
});

module.exports = { ipLimiter, loginEmailLimiter };

