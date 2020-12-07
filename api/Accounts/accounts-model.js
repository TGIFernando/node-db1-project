const db = require('../../data/dbConfig')

module.exports = {
    getAll(query) {
        const {page = 1, limit = 100, sortby = 'id', sortdir = 'asc'} = query
        const offset = limit * (page - 1)
        let rows = db('accounts').orderBy(sortby, sortdir).limit(limit).offset(offset)
        return rows
    },
    getById(id){
        return db('accounts').where('id', id).first()
    },
    create(account){
        return db('accounts').insert(account)
            .then(([id]) => {
                return db('accounts').where('id', id).first()
            })
    },
    update(id, changes){
        return db('accounts').where('id', id).update(changes)
    },
    delete(id){
        return db('accounts').where('id', id).del()
    }
}