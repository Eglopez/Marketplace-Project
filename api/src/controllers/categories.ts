import { Request, Response, NextFunction } from 'express';
const db = require('../config/database');

export const createCategory = async (req: Request & any, res: Response) => {
    const name = req.body.name;
    await db.query('call sp_addCategory ( ? )', name, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al crear categoria', error });
        return res.status(200).send({ message: 'Categoria creada correctamente' });
    });
};

export const getCategories = async (req: Request & any, res: Response) => {
    await db.query('call sp_getCategories', (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener categorias', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const deleteCategory = async (req: Request, res: Response) => {
    const id = req.params.id;
    await db.query('call sp_removeCategory( ? )', id, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al eliminar categoria', error });
        return res.status(200).send({ message: 'Categoria removida correctamente' });
    });
};