exports.seed = function (knex, Promise) {
    return knex('divisions')
        .del() // delete existing users
        .then(function () {
            return knex('divisions').insert([
                {
                    description: 'CONSTITUTIONAL',
                    position: 0,
                },
            ]);
        });
};