import { Router } from 'express';
import {
    getConfig,
    setTimeAnnouncement,
} from '../controllers/config';

const ConfigRouter = Router();

ConfigRouter.put('/set-time-config', setTimeAnnouncement);
ConfigRouter.get('/data', getConfig);

export default ConfigRouter;
