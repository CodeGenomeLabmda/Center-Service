import express from 'express';
import { createCenterHandler, deleteCenterHandler, getAllCenterHandler, getAllCenterHolidaysHandler, getCenterHandler, updateCenterHandler } from '../../controllers/center.controller';
import { validateRequetBody } from '../../validators';
import { createCenterSchema, updateCenterSchema } from '../../validators/center.validator';

const centerRouter = express.Router();

centerRouter.post('/', validateRequetBody(createCenterSchema), createCenterHandler);
centerRouter.patch('/:id', validateRequetBody(updateCenterSchema), updateCenterHandler);
centerRouter.get('/', getAllCenterHandler);
centerRouter.get('/:id', getCenterHandler);
centerRouter.delete('/:id', deleteCenterHandler);
centerRouter.get('/:id/holidays', getAllCenterHolidaysHandler);


export default centerRouter;