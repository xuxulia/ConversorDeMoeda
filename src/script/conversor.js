const mysql = require('mysql');
const databaseConfig = require('../config/database');

async function getAllConversor() {
    const connection = mysql.createConnection(databaseConfig);
    
    try {
        await connection.connectAsync();
        const [rows] = await connection.queryAsync("SELECT * FROM conversao");
        return rows;
    } catch (error) {
        throw error;
    } finally {
        connection.end();
    }
}

async function createConversor(id_moeda, data_1, valor_cota, valor_orig, valor_conv) {
    const connection = mysql.createConnection(databaseConfig);
    console.log(connection)
    
    try {
        await connection.connectAsync();
        const insertConversor = "INSERT INTO conversao(id_moeda, data_1, valor_cota, valor_orig, valor_conv) VALUES(?, ?, ?, ?, ?)";
        await connection.queryAsync(insertConversor, [id_moeda, data_1, valor_cota, valor_orig, valor_conv]);
    } catch (error) {
        throw error;
    } finally {
        connection.end();
    }
}

module.exports = {
    getAllConversor,
    createConversor
};
