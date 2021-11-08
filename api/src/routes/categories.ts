import { Router } from 'express';
import {
    createCategory,
    deleteCategory,
    getCategories,
} from '../controllers/categories';

const CategoryRouter = Router();

CategoryRouter.post('/new', createCategory);
CategoryRouter.get('/list', getCategories);
CategoryRouter.delete('/:id', deleteCategory);

export default CategoryRouter;
