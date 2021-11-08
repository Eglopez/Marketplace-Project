import { Request, Response } from 'express';
const db = require('../config/database');
const path = require('path');
const fs = require('fs');

export const uploadFileUser = async (req: Request & any, res: Response) => {
    const user = req.payload.user.id;
    const type: string = req.file.mimetype.split('/')[1];
    const name: string = req.file.originalname;
    const data: Buffer = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename));
    const params = [name, data, user, type];
    await db.query('call sp_savedImageProfile(?, ?, ?, ?)', params, (err: any, rows: any) => {
        if(err) return res.status(500).send({ message: 'Error al guardar imagen', err});
        res.status(200).send('Imagen guardada');
    });
};

export const uploadFile = async (req: Request & any, res: Response) => {
    const publication = req.params.id;
    console.log('publication', publication);
    const type: string = req.file.mimetype.split('/')[1];
    const name: string = req.file.originalname;
    const data: Buffer = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename));
    const params = [name, data, publication, type];
    await db.query('call sp_savedImagePublication(?, ?, ?, ?)', params, (err: any, rows: any) => {
        if(err) return res.status(500).send({ message: 'Error al guardar imagen', err});
        res.status(200).send('Imagen guardada');
    });
};

export const getFilesPerPublication = async (req: Request & any, res: Response) => {
    const publication = req.params.id;
    await db.query('SELECT data_img, format_img FROM Images WHERE publication_id = ?', publication, (err: any, result: any) => {
        if(err) return res.status(500).send({ message: 'Error al obtener archivos por publicacion', err});
        const img = result.map((item: any) => ({type: item.format_img, data: Buffer.from(item.data_img).toString('base64')}));
        res.status(200).json(img);
    });
};

export const getUserFile = async (req: Request & any, res: Response) => {
    const user = req.payload.user.id;
    await db.query('SELECT data_img, format_img FROM Images WHERE user_id = ?', user, (err: any, result: any) => {
        if(err) return res.status(500).send({ message: 'Error al obtener imagen de perfil', err});
        const img = result.map((item: any) => ({type: item.format_img, data: Buffer.from(item.data_img).toString('base64')}));
        res.status(200).json(img);
    });
};
