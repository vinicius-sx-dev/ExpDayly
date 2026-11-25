const pool = require('../config/database');

async function createUser(name, email, hash_password) {

  try {

    const [rows] = await pool.execute("CALL sp_CreateUserWithLog(?, ?, ?)", [
      name,
      email,
      hash_password,
    ]);

    const result = rows[0][0];
    return result.insertId;


  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      throw new Error("Usuário já cadastrado");
    }

    console.error("Erro no banco de dados ao criar usuário | ", error);
    throw error;
  }

}

module.exports = {
  createUser
}