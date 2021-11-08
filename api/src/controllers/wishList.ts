import { Request, Response } from 'express';
const db = require('../config/database');

export const addToWishList = async (req: Request & any, res: Response) => {
    const publication = req.body.publicationId;
    const user = req.payload.user.id;
    await db.query('call sp_addWishList( ?, ? )', [publication, user], (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al agregar a la lista de deseos', error });
        return res.status(200).send({message: 'Agregado correctamente a la lista de deseos'});
    });
};

export const getUserWishList = async (req: Request & any, res: Response) => {
    const user = req.payload.user.id;
    await db.query('call sp_getWishListUser( ? )', user, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener lista de deseos del usuario', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};
