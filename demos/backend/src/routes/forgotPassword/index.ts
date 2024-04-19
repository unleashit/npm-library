import { Router } from 'express';
import { resetRequest } from './resetRequest';
import { passwordReset } from './passwordReset';

const router: Router = Router();

router.post('/', resetRequest);
router.post('/:id/:token', passwordReset);

export default router;
