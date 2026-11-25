const express = require('express');
const { verifyCreateUser } = require('../schemas/userCreation')

const {
  createUser
} = require('../controllers/authController');

const router = express.Router();

router.post('/', verifyCreateUser, createUser);

module.exports = router;


