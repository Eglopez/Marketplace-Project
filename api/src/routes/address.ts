import { Router } from 'express';
import {
    getDepartments,
    getMunicipalitiesPerDepartment
} from '../controllers/address';

const AddressRouter = Router();

AddressRouter.get('/departments', getDepartments);
AddressRouter.get('/mun-per-department/:id', getMunicipalitiesPerDepartment);

export default AddressRouter;
