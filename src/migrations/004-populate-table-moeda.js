const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function populateMoeda() {
    try {
        const connection = await mysql.createConnection(databaseConfig);
        await connection.query(`USE ${databaseConfig.database}`);
        await connection.query("INSERT INTO moeda (id_moeda, nome_moeda) values (1, 'Dólar')");
        await connection.query("INSERT INTO moeda (id_moeda, nome_moeda) values (2, 'Euro')");
        await connection.query("INSERT INTO moeda (id_moeda, nome_moeda) values (3, 'Libra')");
        await connection.query("INSERT INTO moeda (id_moeda, nome_moeda) values (4, 'Real')");
        await connection.query("INSERT INTO moeda (id_moeda, nome_moeda) values (5, 'Peso Argentino')");
        await connection.end();
        console.log("Data inserted into table moeda!");
    } catch (error) {
        console.log("Error inserting data into table moeda:", error);
    }
}

populateMoeda();