const express = require('express');
const app = express();
const axios = require('axios')


require('./models/AlarmDb')

const alarmRoutes = require("./routers/alarmRouters");
const AlarmGenerator = require('./AlarmGenerator');


app.use(express.json());
app.use('/alarm', alarmRoutes);


