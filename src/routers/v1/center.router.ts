import express from 'express';
import { createCenterHandler, getAllCenterHandler, updateCenterHandler } from '../../controllers/center.controller';
import { validateRequetBody } from '../../validators';
import { createCenterSchema, updateCenterSchema } from '../../validators/center.validator';

const centerRouter = express.Router();

centerRouter.post('/', validateRequetBody(createCenterSchema), createCenterHandler);
centerRouter.patch('/:id', validateRequetBody(updateCenterSchema), updateCenterHandler);
centerRouter.get('/', getAllCenterHandler);


export default centerRouter;