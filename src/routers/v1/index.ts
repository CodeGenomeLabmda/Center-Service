import express from 'express';
import centerRouter from './center.router';
import holidayRouter from './holiday.router';

const router = express.Router();
router.use('/centers', centerRouter);
router.use('/holidays', holidayRouter);

export default router;