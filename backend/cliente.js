// importar o pacote 'mongoose'
const mongoose = require('mongoose');

// Definir o esqeuma dos nossos dados
const clienteSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  fone: {
    type: String,
    required: false,
    refault: '000000000'
  },
  email: {
    type: String,
    required: true
  },
});

// Criar um modelo associado ao esquema:
module
.export = mongoose.model('Cliente', clienteSchema)