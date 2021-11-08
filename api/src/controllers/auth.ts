import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
const jwt = require('jsonwebtoken');
const db = require('../config/database');

export const register = async (req: Request & any, res: Response) => {
    const user = req.body;
    const users: any[] = await db.query('SELECT * FROM Users WHERE email = ?', user.email );
    // console.log('users len', users.length);

    if (users.length === 0) {
        const params = [ user.name , user.password , user.email , user.phone , user.dep , user.mun , user.dir];
        // console.log('register params sp: ', params);
        await db.query('call sp_createUser(?,?,?,?,?,?,?)', params, (error: any, result: any) => {
            if (error) return res.status(500).json({ message: 'Error al crear usuario', error });
            return res.status(200).send({ message: 'Usuario registrado correctamente' });
        });
    }
    res.status(401).send({ message: 'User already exists', error: 'AuthError' });
};

export const login = async (req: Request, res: Response) => {
    const auth = req.body;
    console.log('try login');
    await db.query('call sp_getUserEmail(?,?)', [auth.email, auth.password], (err: any, result: any)=> {
        if (err) res.status(500).json({ message: 'Error al iniciar sesion', err });
        const user = result[0][0];
        if (Object.keys(user).some(key => key === '0')) return res.status(401).send({ message: 'Correo o contrasena invalido' });
        // console.log('results', user);
        const token = jwt.sign({
            user,
        }, process.env.SECRET_KEY, { expiresIn: process.env.TOKEN_EXPIRES_IN });
        return res.status(200).json({ user, token });
    });
};


