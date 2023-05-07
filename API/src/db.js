const mongoose = require("mongoose");
function connect(){
  // Para conectar ao banco de dados
    mongoose.connect("mongodb://127.0.0.1:27017/AlarmDb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Conectado ao MongoDB com sucesso!");
      })
      .catch((err) => {
        console.log("Não foi possível conectar ao MongoDB", err);
      });

      const db = mongoose.connection;
}

