const express = require('express')
const router = express.Router()
const Accounts = require('./accounts-model')

router.get('/', async (_, res) => {
    try {
        const data = await Accounts.getAll()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

module.exports = router