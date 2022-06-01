const path = require('path');
const express = require('express');
const cors = require('cors');
const planetsRouter = require('./routes/planets/planets.router');

const app = express();

app.use(cors({
    origin: '*',
  }));

app.use(express.json());
app.use(express.static(path.resolve(__dirname, './client/build')))
  
app.use(planetsRouter);
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
});


module.exports = app; 