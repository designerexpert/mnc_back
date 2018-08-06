exports.seed = function (knex, Promise) {
    return knex('keyGroup_keys')
        .del() // delete existing users
        .then(function () {
            return knex('keyGroup_keys').insert([
                {
                    groupId: 1,
                    keyId: 3,
                },
                {
                    groupId: 1,
                    keyId: 4,
                },
                {
                    groupId: 1,
                    keyId: 5,
                },
            ]);
        });
};