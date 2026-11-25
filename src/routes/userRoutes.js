const express = require('express');
const { verifyCreateUser, verifyLogUser } = require('../schemas/userCreation')

const {
  createUser,
  logUser
} = require('../controllers/authController');

const rateLimitIpMiddleware = require('../middlewares/rateLimitIp');

const router = express.Router();

router.use(rateLimitIpMiddleware)
router.post('/', verifyCreateUser, createUser);


router.post('/auth', verifyLogUser, logUser)

module.exports = router;


