exports.seed = function (knex, Promise) {
    return knex('soap')
        .del() // delete existing users
        .then(function () {
            return knex('soap').insert([
                {
                    description: 'REVIEW OF SYSTEMS',
                    position: 0,
                },
            ]);
        });
};