import { Router } from 'express';
import { checkUser } from './checkUser';
// import { checkToken } from './checkToken';
import { passwordReset } from './passwordReset';

const router: Router = Router();

router.post('/', checkUser);
router.post('/:id/:token', passwordReset);
// router.post('/auth', checkToken);
// router.post('/other');

export default router;
