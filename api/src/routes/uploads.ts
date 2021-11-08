import { Router } from 'express';
import {
    uploadFile,
    getFilesPerPublication,
    uploadFileUser,
    getUserFile
} from '../controllers/uploads';

const UploadRouter = Router();
const multer = require('multer');
const path = require('path');

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req: Request, file: any, cb: any) => {
        // tslint:disable-next-line:no-null-keyword
        cb(null, Date.now() + '-product-' + file.originalname);
    }
});

const fileUpload = multer({
    storage: diskstorage
}).single('image');

UploadRouter.post('/new/:id', fileUpload, uploadFile);
UploadRouter.post('/new-profile', fileUpload, uploadFileUser);
UploadRouter.get('/list-per-publication/:id', getFilesPerPublication);

export default UploadRouter;
