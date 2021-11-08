import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
const jwt = require('jsonwebtoken');
const db = require('../config/database');

export const setTimeAnnouncement = async (req: Request & any, res: Response) => {
    const body = req.body;
    const params = [body.announcementTime, body.serviceTime];
    await db.query('call sp_timeAnnouncement ( ?, ? )', params, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al establecer configuracion de tiempo', error });
        return res.status(200).send({ message: 'Tiempo configurado correctamente' });
    });
};

export const getConfig = async (req: Request & any, res: Response) => {
    await db.query('call sp_getConfig', (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener configuracion de tiempo', error });
        const data = result[0][0];
        return res.status(200).send(data);
    });
};