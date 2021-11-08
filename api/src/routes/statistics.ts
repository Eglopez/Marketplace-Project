import { Router } from 'express';
import {
    getPublicationsByCategories,
    getStatistics,
} from '../controllers/statistics';

const StatisticsRouter = Router();

StatisticsRouter.get('/data', getStatistics);
StatisticsRouter.get('/count', getPublicationsByCategories);

export default StatisticsRouter;
