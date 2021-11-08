import { Request, Response, NextFunction } from 'express';
const db = require('../config/database');

export const getStatistics = async (req: Request & any, res: Response) => {
    console.log('statisc');
    await db.query('call sp_statistics', (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener estadisticas', error });
        const data = result[0];
        return res.status(200).send(data);
    });
};

export const getPublicationsByCategories = async (req: Request & any, res: Response) => {
    await db.query('call sp_publicationsXcategories', (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener publicaciones por categories', error });
        const data = result[0];
        return res.status(200).send(data);
    });
};
