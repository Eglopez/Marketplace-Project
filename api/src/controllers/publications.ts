import { Request, Response, NextFunction } from 'express';
const db = require('../config/database');
const multer = require('multer');
const path = require('path');

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename: (req: Request, file: any, cb: any) => {
        // tslint:disable-next-line:no-null-keyword
        cb(null, Date.now() + '-monkeywit-' + file.originalname);
    }
});

const fileUpload = multer({
    storage: diskstorage
}).single('image');

export const createPublication = async (req: Request & any, res: Response) => {
    const user = req.payload.user.id;
    const publication: any = req.body;
    const params: any[] = [ user, publication.title, publication.category, publication.description, publication.price ];
    console.log('create pub');
    await db.query('call sp_createPublication(?, ?, ?, ?, ?)', params, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al crear publicacion', error });
        const id = result[0][0].id;
        return res.status(200).send({ message: 'Publicacion creada correctamente', id  });
    });
};

export const getPublications = async (req: Request, res: Response) => {
    const lower = req.params.lowerRange;
    const higher = req.params.higherRange;
    const params = [lower, higher];
    await db.query('call sp_getPublicationsAll(?, ?)', params, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener publicaciones', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const getPublicationsWithFilters = async (req: Request, res: Response) => {
    const filters = req.query;
    console.log('filters', filters);
    const params = [filters.category, filters.department, filters.municipality, filters.lowerPrice, filters.higherPrice, filters.dateOrder, filters.priceOrder];
    await db.query('call sp_filteredPublication(?, ?, ?, ?, ?, ?, ?)', params, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener publicaciones con filtros', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const getPublicationsFiltered = async (req: Request, res: Response) => {
    const filters = req.query;
    const params = [
        filters.text,
        filters.department,
        filters.municipality,
        filters.category,
        filters.lowerPrice,
        filters.higherPrice,
        filters.dateOrder,
        filters.priceOrder,
        filters.lowerPagination,
        filters.higherPagination,
    ];
    await db.query('call sp_filtered(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', params, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener publicaciones filtradas', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const getPublicationsCurrentUser = async (req: Request & any, res: Response) => {
    const user = req.payload.user.id;
    await db.query('call sp_getPublicationUserID( ? )', user, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener publicaciones del usuario actual', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const getPublicationsPerUser = async (req: Request & any, res: Response) => {
    const user = req.payload.user.id;
    await db.query('call sp_getPublicationUserID( ? )', user , (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener publicaciones de usuario', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const searchPublicationTitle = async (req: Request & any, res: Response) => {
    const body = req.query;
    await db.query('call sp_searchPublication( ?, ?, ? )', [body.title, body.dateOrder, body.priceOrder] , (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener publicaciones por titulo', error });
        const list = result[0];
        return res.status(200).send(list);
    });
};

export const getPublication = async (req: Request, res: Response) => {
    const id = req.params.id;
    await db.query('call sp_getPublicationID( ? )', id, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al obtener publicacion', error });
        const list = result[0][0];
        return res.status(200).send(list);
    });
};

export const removePublication = async (req: Request, res: Response) => {
    const id = req.params.id;
    await db.query('call sp_removeAd( ? )', id, (error: any, result: any) => {
        if (error) return res.status(500).json({ message: 'Error al eliminar publicacion', error });
        return res.status(200).send({ message: 'Publicacion removida correctamente' });
    });
};
