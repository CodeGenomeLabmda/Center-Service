import express from 'express';
import { createCenterHandler } from '../../controllers/center.controller';
import { validateRequetBody } from '../../validators';
import { createCenterSchema } from '../../validators/center.validator';

const centerRouter = express.Router();

centerRouter.post('/', validateRequetBody(createCenterSchema), createCenterHandler);


export default centerRouter;