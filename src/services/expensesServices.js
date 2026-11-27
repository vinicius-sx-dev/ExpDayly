const expensesRepo = require('../repositories/expensesRepo');

async function insertValue(type, gender, amount, datetime, description, id){

    try {
        
        const resposta = await expensesRepo.insertValue(type, gender, amount, datetime, description, id);

        return resposta;

    } catch (error) {
        console.error('Erro ao inserir despesa | ', error);
        throw new Error(error)
    }

}

module.exports = {
    insertValue
}