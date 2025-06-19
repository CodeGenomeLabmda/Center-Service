import express from 'express';
import { createCenterHandler, updateCenterHandler } from '../../controllers/center.controller';
import { validateRequetBody } from '../../validators';
import { createCenterSchema, updateCenterSchema } from '../../validators/center.validator';

const centerRouter = express.Router();

centerRouter.post('/', validateRequetBody(createCenterSchema), createCenterHandler);
centerRouter.patch('/', validateRequetBody(updateCenterSchema), updateCenterHandler);


export default centerRouter;