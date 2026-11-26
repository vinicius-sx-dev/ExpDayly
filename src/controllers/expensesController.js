const expensesService = require('../services/expensesService')

async function insertExpense(req, res){

    const { type, gender, amount, datetime } = req.body

    //get the id by passing it in the middleware

    

}

module.exports = {
    insertExpense
}