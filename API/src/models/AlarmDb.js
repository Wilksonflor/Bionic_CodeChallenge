const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/AlarmDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado ao MongoDB com sucesso!");
  })
  .catch((err) => {
    console.log("Não foi possível conectar ao MongoDB", err);
  });

const alarmSchema = new mongoose.Schema({
  serial: String,
  type: Number,
  checked: Boolean,
  deviceType: Number,
});

const Alarm = mongoose.model("Alarm", alarmSchema);

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "Erro de conexão com o banco de dados:")
);
db.once("open", async function () {
  console.log("Conexão com o banco de dados estabelecida com sucesso!");

  // Criar um alarme exemplo
  const alarmExample = new Alarm({
    serial: "AB123",
    type: 1,
    checked: false,
    deviceType: 2,
  });

  try {
    await alarmExample.save();
    console.log("Alarme criado com sucesso!");
  } catch (err) {
    console.log("Erro ao criar o alarme ", err);
  }

  // Fechar conexão com o banco de dados
  db.close();
});

module.exports = Alarm;
