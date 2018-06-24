const express = require('express');
const mongoose = require('mongoose');
const routes = require('./socialclub-api/routes/routes')
const server = express();
const port = 3030;

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  routes(server);
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});