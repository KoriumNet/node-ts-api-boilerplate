import { Router } from 'express';
import  controller from '../../../controllers/generic.controller';

const router = Router();

router.get('/', controller.get);

export default router;
