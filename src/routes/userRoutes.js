const express = require('express');
const { verifyCreateUser, verifyLogUser } = require('../schemas/userCreation')

const {
  createUser,
  logUser
} = require('../controllers/authController');

const router = express.Router();

router.post('/', verifyCreateUser, createUser);
router.post('/auth', verifyLogUser, logUser)

module.exports = router;


