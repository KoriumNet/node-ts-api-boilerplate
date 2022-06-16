import { Router } from 'express';
import generic from './generic-routes';
import auth from './auth-routes';

const router = Router();

router.use('/generic', generic);
router.use('/auth', auth);

export default router;
