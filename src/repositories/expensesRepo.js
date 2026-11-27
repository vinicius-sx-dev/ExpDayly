const pool = require('../config/database');

async function insertValue(type, gender, amount, datetime, description, id) {

    try {

        let desc;

        if(description == null){
            desc = 'None'
        } else {
            desc = description
        }

        const insertValueQuery = "INSERTO INTO Value ()";

        const [insertValue] = await pool.execute(insertValueQuery, [type, gender, amount, datetime, desc, id]);

        if (insertValue.affectedRows === 0) {
            throw new Error("Erro ao inserir valor")
        }

        return data;

    } catch (error) {
        console.error("Erro no banco de dados ao buscar dados do usuário | ", error);
        throw error;
    }



}

module.exports = {
    insertValue
}