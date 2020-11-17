const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const clientesRouter = require('./rotas/clientes');
mongoose.connect('mongodb+srv://rafa:rafa1@cluster0.toqy2.mongodb.net/<dbname>?retryWrites=true&w=majority')
.then(() =>  console.log ("Conexao OK")).catch((e) => console.log ("Conexão N OK " +JSON.stringify(e)));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT,  OPTIONS');
  next()
});

app.use('/api/clientes',clientesRoutes);

module.exports = app

