const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/AlarmDb')
.then(() =>{
    console.log("Conectado ao MongoDB com sucesso!")
})
.catch((err) =>{
    console.log("Não foi possível conectar ao MongoDB", err)
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão com o banco de dados:'));
db.once('open', function() {
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

const LoginSchema = new mongoose.Schema({
  type: String,
  required: true,
})