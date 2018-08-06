exports.seed = function (knex, Promise) {
    return knex('keys')
        .del() // delete existing users
        .then(function () {
            return knex('keys').insert([
                {
                    description: 'FEVER',
                    active: false,
                    positive: 'Patient currently has fever, ',
                    negative: 'Patient denies fever, ',
                    position: 0,
                },
                {
                    description: 'CHILLS',
                    active: false,
                    positive: 'has chills. ',
                    negative: 'denies chills. ',
                    position: 1,
                },
                {
                    description: 'LOSS',
                    active: false,
                    positive: 'Has lost weight. ',
                    negative: '',
                    position: 0,
                },
                {
                    description: 'GAIN',
                    active: false,
                    positive: 'Has gained weight. ',
                    negative: '',
                    position: 1,
                },
                {
                    description: 'NO CHANGE',
                    active: false,
                    positive: 'Had no change in weight. ',
                    negative: '',
                    position: 2,
                },
                {
                    description: 'WEAKNESS GENERAL',
                    active: false,
                    positive: 'Patient complains of general weakness. ',
                    negative: 'Patient denies any feelings of weakness in general. ',
                    position: 3,
                },
            ]);
        });
};