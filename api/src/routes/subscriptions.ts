import { Router } from 'express';
import {
    addSubscription,
    getSubscriptions
} from '../controllers/subscriptions';

const SubscriptionRouter = Router();

SubscriptionRouter.post('/new', addSubscription);
SubscriptionRouter.get('/list', getSubscriptions);

export default SubscriptionRouter;
