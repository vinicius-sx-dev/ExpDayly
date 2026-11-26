const express = require('express');

const {
  insertExpense,
} = require('../controllers/expensesController');

const router = express.Router();

router.get('/', insertExpense);

module.exports = router;


