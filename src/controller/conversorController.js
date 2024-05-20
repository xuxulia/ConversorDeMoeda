const mysql = require('mysql');
const databaseConfig = require('../config/database.js');

async function createConversor(req, res) {
  const { id_moeda, data_1, valor_cota, valor_orig, convertido } = req.body;

  const connection = mysql.createConnection(databaseConfig);

  connection.connect((err) => {
    if (err) {
      return res.status(500).send({
        message: "Error connecting to database",
        error: err.message,
      });
    }

    const insertConversor = "INSERT INTO conversao(id_moeda, data_1, valor_cota, valor_orig, valor_conv) VALUES(?, ?, ?, ?, ?)";
    connection.query(insertConversor, [id_moeda, data_1, valor_cota, valor_orig, convertido], (err, results) => {
      if (err) {
        console.log(err);

        return res.status(500).send({
          message: "Error inserting data into database",
          error: err.message,
        });
      }

      res.status(201).json({ message: "Success!" });
    });

    connection.end();
  });
}

module.exports = {
  createConversor,
};