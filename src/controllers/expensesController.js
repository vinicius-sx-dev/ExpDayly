const expensesService = require('../services/expensesService')

async function insertValue(req, res) {

    try {

        const { type, gender, amount, datetime, description } = req.body;
        const id = req.id;

        await expensesService.insertValue(type, gender, amount, datetime, description, id)

        return res.status(201).json({
            mensagem: "expense inserida com sucesso"
        })

    } catch (error) {

        console.error('Erro interno ao inserir expense | ', error)

        return res.status(500).json({
            mensagem: 'Erro interno ao inserir expense'
        })

    }
}

module.exports = {
    insertValue
}