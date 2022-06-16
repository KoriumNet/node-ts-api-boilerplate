import { Router } from 'express';
import controller from '../../../controllers/needAuth.controller';
import { authorization } from '../../../middleware';
import { validate } from 'express-validation';

const router = Router();

router.get('/', authorization, controller.get);
router.post('/', authorization, controller.post);
// Additionally, you could validate the request
// router.post('/', authorization, validate(postValidate) ,controller.get);


export default router;
