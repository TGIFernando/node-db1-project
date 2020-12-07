const Accounts = require('./accounts-model')

async function validateID(req, res, next){
    const { id } = req.params
    try{
        const acc = await Accounts.getById(id)
        if (acc) {
            req.account = acc
            req.id = id
            next()
        } else {
            res.status(404).json({ message: `Account with id ${id} does not exist`})
        }
    } catch (error){
        res.status(404).json({ message: error.message})
    }
}



module.exports = {
    validateID,
}