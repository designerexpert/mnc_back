exports.seed = function (knex, Promise) {
    return knex('usersLog')
        .del() // delete existing users
        .then(function () {
            return knex('usersLog').insert([
                { userId: 1, access: '000012' }, // 1
                { userId: 2, access: '000013' }, // 2
                { userId: 3, access: '000014' }, // 3
                { userId: 4, access: '000015' }, // 4
                { userId: 5, access: '000016' }, // 5
            ]);
        });
};
