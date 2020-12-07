const express = require('express')
const { validateID, validateAccountBody } = require('./accounts-middleware')
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

router.get('/:id', validateID, async (req, res) => {
    try {
        const { id } = req.params
        const data = await Accounts.getById(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

router.post('/', validateAccountBody, async (req, res) => {
    try {
        const data = await Accounts.create(req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

router.put('/:id', validateAccountBody, validateID, async (req, res) => {
    try {
        const data = await Accounts.update(req.id, req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

router.delete('/:id', validateID, async (req, res) => {
    try {
        await Accounts.delete(req.id)
        res.status(200).json({message: `Account with id ${req.id} has been nuked`})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

module.exports = router