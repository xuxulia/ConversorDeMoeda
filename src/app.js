const express = require("express");
const conversorRouter = require("./router/conversorRouter.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

const PORT = 3006;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", conversorRouter);

// Atualize o caminho para o seu arquivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './html/index.html'));
});

// Atualize o caminho para o diretório que contém seus arquivos estáticos
app.use(express.static('./src'));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});