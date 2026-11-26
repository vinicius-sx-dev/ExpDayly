const db_host = process.env.DB_HOST
const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_name = process.env.DB_NAME
const jwt_secret = process.env.jwt_secret

function verifyUp(db_host, db_user, db_password, db_name, jwt_secret){
    if(!db_host || !db_user || !db_password || !db_name || !jwt_secret){
        console.error("Dependências incompletas")
        throw new Error("Dependências incompletas")
    }
    return;
}

module.exports = verifyUp;




