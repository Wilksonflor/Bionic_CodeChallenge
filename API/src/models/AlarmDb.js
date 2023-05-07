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
  typeName: String,
  checked: Boolean,
  deviceType: Number,
  deviceTypeName: String,
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
  // const alarmEnvio = new Alarm({
  //   serial: "AB123",
  //   type: 1,
  //   checked: false,
  //   deviceType: 2,
  // });
  const type = [
    { name: "Alarme nível 1", value: 1 },
    { name: "Alarme nível 2", value: 2 },
    { name: "Alarme nível 3", value: 3 },
    { name: "Alarme Nível 4", value: 4 },
    { name: "Alarme nível 5", value: 5 },
  ];

  const deviceType = [
    { name: "Dispositivo 1", value: 1 },
    { name: "Dispositivo 2", value: 2 },
    { name: "Dispositivo 3", value: 3 },
    { name: "Dispositivo 4", value: 4 },
    { name: "Dispositivo 5", value: 5 },
  ];

  const getRandomItem = (items) =>
    items[Math.floor(Math.random() * items.length)];
  const typeAll = type.map(({ name, value }) => ({ name, value }));
  const deviceTypeAll = deviceType.map(({ name, value }) => ({ name, value }));

  const alarmEnvio = new Alarm({
    serial: "AB123",
    type: getRandomItem(typeAll).value,
    typeName: getRandomItem(typeAll).name,
    checked: false,
    deviceType: getRandomItem(deviceTypeAll).value,
    deviceTypeName: getRandomItem(deviceTypeAll).name,
  });
  try {
    await alarmEnvio.save();
    console.log("Alarme criado com sucesso!");
  } catch (err) {
    console.log("Erro ao criar o alarme ", err);
  }

  // Fechar conexão com o banco de dados
  // db.close();
});

module.exports = Alarm;
