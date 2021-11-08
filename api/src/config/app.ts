import cors from 'cors';
import express from 'express';
import path from 'path';
import indexRouter from '../routes/index';
import expressJwt from 'express-jwt';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';

const app = express();
const passport = require('passport'); // ToDo

import './database';

// * ----------------------- Intializations -----------------------
dotenv.config({ path: '.env' });
app.get('./env');
app.use(express.static(path.join(__dirname, 'public')));


// * ----------------------- Middlewares --------------------------
app.use(cors({ origin: '*' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('port', process.env.SERVER_PORT || 3000);

// * ----------------------- JWT Config -----------------------
const jwtOptions: any = {
  secret: process.env.SECRET_KEY,
  algorithms: ['HS256'],
  userProperty: 'payload',
};

app.use('/',
  expressJwt(jwtOptions).unless({ path: ['/api/auth/login']}),
    async (err: any, req: any, res: any, next: any): Promise<any> => {
    const root = '/api';
    // ToDo buscar alternativa de controlar las rutas autorizadas.
    // const excluded = [`${root}/auth/login`, `${root}/auth/register`, `${root}/address/departments`, `${root}/address/mun-per-department`];
    // if (excluded.indexOf(req.url) > -1) return next();
    return next();
    res.status(err.status).json(err);
});

// * ----------------------- Router -----------------------

app.use('/api', indexRouter);

export default app;
