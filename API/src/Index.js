const express = require('express');
const app = express();
const axios = require('axios')


require('./models/AlarmDb')

const alarmRoutes = require("./routers/alarmRouters");



app.use(express.json());
app.use('/alarm', alarmRoutes);


