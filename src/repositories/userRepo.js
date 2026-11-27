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


async function getData(email) {

  try {

    const getDataQuery = "SELECT id, email, hashed_password, role FROM User WHERE email = ? ";

    const [getData] = await pool.execute(getDataQuery, [email]);

    const data = getData[0]

    if(!data || data == null){
      throw new Error("Email ou senha inválidos")
    }

    return data;
  
  } catch (error) {
    console.error("Erro no banco de dados ao buscar dados do usuário | ", error);
    throw error;
  }

}

async function getUser(id){
 
  try {

    const getDataQuery = "SELECT email, role FROM User WHERE id = ? ";

    const [getData] = await pool.execute(getDataQuery, [id]);

    const data = getData[0]

    if(!data || data == null){
      throw new Error("Usuário inválido")
    }

    return data;
  
  } catch (error) {
    console.error("Erro no banco de dados ao buscar usuário | ", error);
    throw error;
  }

}

module.exports = {
  createUser,
  getData,
  getUser
}