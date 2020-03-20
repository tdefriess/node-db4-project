const express = require('express');
const helmet = require('helmet');

// const db = require('')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API up');
});

module.exports = server;