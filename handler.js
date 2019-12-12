'use strict';
const pgPromise = require('pg-promise')()({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: 'test',
    port: 5432,
});

module.exports.hello = async event => {

    const user = await pgPromise.query('SELECT * FROM public.user');

    return {
        statusCode: 200,
        body: JSON.stringify(
            user,
            null,
            2
        ),
    };
};
