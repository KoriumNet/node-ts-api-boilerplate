import { Router } from 'express';
import needAuth from './needAuth.routes';

const router = Router();

router.use('/needAuth', needAuth);

export default router;
