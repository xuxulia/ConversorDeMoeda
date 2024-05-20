const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createMoedaTable() {
    try {
        const connection = await mysql.createConnection(databaseConfig);
        await connection.query(`USE ${databaseConfig.database}`);
        await connection.query(`
            CREATE TABLE moeda(
                id_moeda integer primary key auto_increment not null,
                nome_moeda varchar(20) not null
            );
        `);
        await connection.end();
        console.log("Table moeda created!");
    } catch (error) {
        console.log("Error creating table moeda:", error);
    }
}

createMoedaTable();
