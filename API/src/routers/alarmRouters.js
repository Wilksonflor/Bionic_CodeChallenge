const express = require('express');
const router = express.Router();
const app = express();
const port = 8082;
const bodyParser = require('body-parser');
const saveAlarm = require('../models/AlarmDb');
const getAllAlarms = require('../models/AlarmDb');

app.use(bodyParser.json());

app.post('/alarm', async function (req, res) {
  const { serial, type, checked, deviceType } = req.body;
  console.log('Alarme recebido', req.body);
  
  try {
    await saveAlarm({ serial, type, checked, deviceType });
    res.status(200).send('Alarme recebido e salvo com sucesso');
  } catch (err) {
    console.log(err);
    res.status(500).send('Erro ao salvar alarme');
  }
});

app.get('/alarm', async function (req, res) {
  try {
    const alarms = await getAllAlarms(); // função para obter todos os alarmes do banco de dados
    res.status(200).send(alarms);
  } catch (err) {
    console.log(err);
    res.status(500).send('Erro ao buscar alarmes');
  }
});



app.listen(port, () => {
  console.log(`Server conectado na porta ${port}`);
});

module.exports = router;