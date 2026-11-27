const expensesService = require('../services/expensesService')

async function insertExpense(req, res) {

    try {

        const { type, gender, amount, datetime } = req.body;
        const id = req.id;

    } catch (error) {

        console.error('Erro interno ao inserir expense | ', error)

        return res.status(500).json({
            mensagem: 'Erro interno ao inserir expense'
        })

    }
}

module.exports = {
    insertExpense
}