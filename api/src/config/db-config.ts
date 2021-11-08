// * Configuracion para conectarse a la BD.
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export const config = {
    host: process.env.HOST,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
    multipleStatements: true
};

module.exports = config;