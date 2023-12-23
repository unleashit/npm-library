import { Router } from 'express';
import { resetRequest } from './resetRequest';
// import { checkToken } from './checkToken';
import { passwordReset } from './passwordReset';

const router: Router = Router();

router.post('/', resetRequest);
router.post('/:id/:token', passwordReset);
// router.post('/auth', checkToken);
// router.post('/other');

export default router;
