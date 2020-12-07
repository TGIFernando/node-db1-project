const express = require("express");

const AcountRouter = require("./Accounts/accounts-router")

const server = express();

server.use(express.json());
server.use('/api/accounts', AcountRouter)

server.get("/", (_, res) => {
    res.status(200).json({ message: 'Welcome to the API'})
})

module.exports = server;
