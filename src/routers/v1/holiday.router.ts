import express from 'express';
import { createHolidayHandler } from '../../controllers/holiday.controller';
import { validateRequetBody } from '../../validators';
import { createHolidaySchema } from '../../validators/holiday.validator';

const holidayRouter = express.Router();

holidayRouter.post('/', validateRequetBody(createHolidaySchema), createHolidayHandler);

export default holidayRouter;
