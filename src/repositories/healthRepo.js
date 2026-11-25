const pool = require('../config/database');

async function checkDatabase() {
  try {

    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();

    const [rows] = await pool.query('SELECT 1 AS healthy');

    return { status: 'UP', result: rows[0].healthy };
  } catch (error) {
    return { status: 'DOWN', error: error.message };
  }
}

module.exports = {
  checkDatabase
}