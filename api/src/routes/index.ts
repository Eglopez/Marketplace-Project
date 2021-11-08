import { Router } from 'express';
import AddressRouter from './address';
import AuthRouter from './auth';
import CategoryRouter from './categories';
import ComplaintRouter from './complaints';
import ConfigRouter from './config';
import PublicationRouter from './publications';
import ReviewRouter from './reviews';
import StatisticsRouter from './statistics';
import SubscriptionRouter from './subscriptions';
import UploadRouter from './uploads';
import UserRouter from './users';
import WishListRouter from './wishList';

const routerIndex = Router();

routerIndex.use('/auth', AuthRouter);
routerIndex.use('/publications', PublicationRouter);
routerIndex.use('/address', AddressRouter);
routerIndex.use('/categories', CategoryRouter);
routerIndex.use('/users', UserRouter);
routerIndex.use('/uploads', UploadRouter);
routerIndex.use('/reviews', ReviewRouter);
routerIndex.use('/complaints', ComplaintRouter);
routerIndex.use('/wish-list', WishListRouter);
routerIndex.use('/subscriptions', SubscriptionRouter);
routerIndex.use('/config', ConfigRouter);
routerIndex.use('/statistics', StatisticsRouter);


export default routerIndex;
