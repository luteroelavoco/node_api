const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB

mongoose.connect('mongodb://localhost:27017/nodeapi'
    ,{useNewUrlParser:true}
);

requireDir('./src/models');

//Rotas
app.use("/api", require("./src/models/routes"));


app.listen(3001);