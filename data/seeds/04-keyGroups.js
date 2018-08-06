exports.seed = function (knex, Promise) {
    return knex('keyGroups')
        .del() // delete existing users
        .then(function () {
            return knex('keyGroups').insert([
                {
                    description: 'WEIGHT',
                    separator: '/',
                    toggle: true,
                    single: true,
                    position: 2,
                },
            ]);
        });
};