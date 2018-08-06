const knex = require('../../data/dbConfig.js');

const soap = (req, res) => {
    knex('soap')
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json({ errorMessage: err.message });
        });
}

module.exports = {
    soap,
}