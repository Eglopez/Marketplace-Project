import { Request, Response } from 'express';
const db = require('../config/database');

export const addSubscription = async (req: Request & any, res: Response) => {
    const user = req.payload.user.id;
    const category = req.body.categoryId;
    await db.query('call sp_addSuscriptions( ?, ? )', [user, category], (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al crear subscripcion', error });
        return res.status(200).send({message: 'Subscripcion realizada correctamente'});
    });
};

export const getSubscriptions = async (req: Request & any, res: Response) => {
    const user = req.payload.user.id;
    await db.query('call sp_getSuscriptionsUser( ? )', user, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener subscripciones', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};
