import express from 'express';
import centerRouter from './center.router';

const router = express.Router();
router.use('/centers', centerRouter);

export default router;