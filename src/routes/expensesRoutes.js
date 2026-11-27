const express = require('express');
const { verifyInsertExpense } = require('../schemas/expensesSchemas')

const {
  insertExpense,
} = require('../controllers/expensesController');

const rateLimitIpMiddleware = require('../middlewares/rateLimitIp');
const { verify } = require('../middlewares/jwtVerification')

const router = express.Router();

router.use(rateLimitIpMiddleware)
router.use(verify)

router.post('/', verifyInsertExpense, insertExpense);

module.exports = router;