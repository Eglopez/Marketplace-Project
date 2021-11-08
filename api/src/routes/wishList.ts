import { Router } from 'express';
import { addToWishList, getUserWishList } from '../controllers/wishList';

const WishListRouter = Router();

WishListRouter.post('/new', addToWishList);
WishListRouter.get('/list', getUserWishList);

export default WishListRouter;
