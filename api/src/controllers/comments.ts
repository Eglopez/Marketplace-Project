import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
const jwt = require('jsonwebtoken');
const db = require('../config/database');

export const addCommentToUser = async (req: Request & any, res: Response) => {
    const body = req.body;
    const user = req.payload.user.id;
    const params = [body.userId, user, body.qualification, body.comment];
    await db.query('call sp_commentProfile( ?, ?, ?, ? )', params , (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al agregar rese?a a usuario', error });
        return res.status(200).send({ message: 'Rese?a a usuario agregada correctamente' });
    });
};

export const addCommentToPublication = async (req: Request & any, res: Response) => {
    const user = req.payload.user.id;
    const body: any = req.body;
    const params: any[] = [body.publicationId, user, body.comment];
    await db.query('call sp_commentPublication(?, ?, ?)', params, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al crear comentario a publicacion', error });
        return res.status(200).send({ message: 'Comentario a publicacion creada correctamente' });
    });
};

export const getUserComments = async (req: Request & any, res: Response) => {
    const userId = req.params.id;
    await db.query('call sp_getCommentProfileID( ? )', userId, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener comentarios de usuario', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const getPublicationComments = async (req: Request & any, res: Response) => {
    const publicationId = req.params.id;
    await db.query('call sp_getCommentPublicationID( ? )', publicationId, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener comentarios de publicacion', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const getUserQualification = async (req: Request & any, res: Response) => {
    const userId = req.params.id;
    await db.query('call sp_getQualificationID( ? )', userId, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener calificacion del usuario', error });
        const list = result[0][0];
        return res.status(200).send(list);
    });
};
