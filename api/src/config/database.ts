const mysql = require('mysql');
const config = require('./db-config');
const { promisify } = require('util'); // Convert callbacks to promises;

const pool = mysql.createPool(config);
pool.getConnection(async (err: any, connection: any) => {
    if (err !== null) {
        console.error('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        console.error('           DATABASE CONNECTION ERROR');
        console.error('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

        if (err.code === 'PROTOCOLO_CONNECTION_LOST') console.error('DataBase connection was closed');
        else if (err.code === 'ER_CON_COUNT_ERROR') console.error('DataBase has many connections');
        else if (err.code === 'ECONNREFUSED') console.error('DataBase connection was refused');
        else if (err.code === 'ER_BAD_DB_ERROR') console.error(err.sqlMessage);
        else console.error('Undefined error: ', err.code, err.sqlMessage);
    }

    if (connection) {
        console.log('   -------------------------------------------------------------');
        console.log((`        successful connection to the '%s' DB`), config.database);
        console.log('   -------------------------------------------------------------\n');
        connection.release();
    }
    return;
});

// Promisify POOL query.
pool.query = promisify(pool.query);
module.exports = pool;
