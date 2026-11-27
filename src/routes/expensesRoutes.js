const express = require('express');
const { verifyInsertValue } = require('../schemas/expensesSchemas')

const {
  insertValue,
} = require('../controllers/expensesController');

const rateLimitIpMiddleware = require('../middlewares/rateLimitIp');
const { verify } = require('../middlewares/jwtVerification')

const router = express.Router();

router.use(rateLimitIpMiddleware)
router.use(verify)

router.post('/', verifyInsertValue, insertValue);

module.exports = router;