const mongoose = require('mongoose');

const Admin = new mongoose.Schema({
  login: String,
  nome: String,
  senha: String
})

module.exports = mongoose.model('Admin', Admin);