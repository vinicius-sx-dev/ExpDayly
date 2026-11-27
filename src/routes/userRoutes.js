const express = require('express');
const { verifyCreateUser, verifyLogUser } = require('../schemas/userCreation')

const {
  createUser,
  logUser,
  getUser,
} = require('../controllers/authController');

const rateLimitIpMiddleware = require('../middlewares/rateLimitIp');
const { verify } = require('../middlewares/jwtVerification')

const router = express.Router();

router.use(rateLimitIpMiddleware)
router.post('/', verifyCreateUser, createUser);
router.get('/', verify, getUser)


router.post('/auth', verifyLogUser, logUser)

module.exports = router;


