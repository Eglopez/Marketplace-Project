import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
const jwt = require('jsonwebtoken');
const db = require('../config/database');

export const getDepartments = async (req: Request, res: Response) => {
    await db.query('call sp_getDep', (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener departamentos', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const getMunicipalitiesPerDepartment = async (req: Request, res: Response) => {
    const id = req.params.id;
    await db.query('call sp_getMun( ? )', [ id ], (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener municipalidades por departamento', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};
