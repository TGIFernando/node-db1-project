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

async function validateAccountBody(req, res, next){
    if(!req.body){
        res.status(400).json({ message: 'required fields are blank'})
    } else if (!req.body.name || !req.body.budget) {
        res.status(400).json({message : 'missing account name or budget'})
    } else {
        next()
    }
}


module.exports = {
    validateID,
    validateAccountBody
}