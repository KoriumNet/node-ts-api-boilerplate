import { Router } from 'express';
import apiRoutes from './v1/api';
import publicRoutes from './v1/public';

const router = Router();

router.use('/', apiRoutes);
router.use('/public', publicRoutes);

export default router;
