import { Request, Response } from 'express';
const db = require('../config/database');

export const addComplaint = async (req: Request & any, res: Response) => {
    const user = req.payload.user.id;
    const body = req.body;
    const params = [user, body.user, body.typeComplaintId, body.comment];
    await db.query('call sp_addComplaint( ?, ?, ?, ? )', params, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al crear denuncia', error });
        return res.status(200).send({message: 'Denuncia creada correctamente'});

    });
};

export const addTypeComplaint = async (req: Request & any, res: Response) => {
    const body = req.body;
    await db.query('call sp_addTypeComplaints( ? )', body.type, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al crear tipo de denuncia', error });
        return res.status(200).send({message: 'Tipo de denuncia creada correctamente'});
    });
};

export const getComplaints = async (req: Request & any, res: Response) => {
    await db.query('call sp_getComplaint', (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener denuncias', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const getTypesComplaint = async (req: Request & any, res: Response) => {
    await db.query('call sp_getTypeComplaints', (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener tipos de denuncia', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const actionComplaint = async (req: Request & any, res: Response) => {
    const body = req.body;
    console.log('compaints body', req.body);
    await db.query('call sp_estimateComplaint ( ?, ? )',[body.userId, body.action] , (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al aplicar accion', error });
        return res.status(200).send({ message: 'Acccion realizada correctamente' });
    });
};
