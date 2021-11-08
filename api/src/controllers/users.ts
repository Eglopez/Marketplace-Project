import { Request, Response } from 'express';
const db = require('../config/database');

export const getUsers = async (req: Request & any, res: Response) => {
    await db.query('call sp_getUsers', (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener usuarios', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const getUser = async (req: Request & any, res: Response) => {
    const user = req.params.id;
    await db.query('call sp_getUserID( ? )', user , (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener usuario', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const getCurrentUser = async (req: Request & any, res: Response) => {
    const user = req.payload.user.id;
    await db.query('call sp_getUserID( ? )', user , (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener usuario actual', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const deleteUser = async (req: Request & any, res: Response) => {
    const user = req.params.id;
    await db.query('call sp_removeUser( ? )', user , (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al remover usuario', error });
        return res.status(200).send({ message: 'Usuario removido correctamente' });
    });
};
