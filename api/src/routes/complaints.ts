import { Router } from 'express';
import {
    actionComplaint,
    addComplaint,
    addTypeComplaint,
    getComplaints,
    getTypesComplaint,
} from '../controllers/complaints';

const ComplaintRouter = Router();

ComplaintRouter.post('/new-type', addTypeComplaint);
ComplaintRouter.post('/new', addComplaint);
ComplaintRouter.put('/action-complaint', actionComplaint);
ComplaintRouter.get('/list', getComplaints);
ComplaintRouter.get('/list-types', getTypesComplaint);

export default ComplaintRouter;
