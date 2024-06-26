
import { Router } from 'express';
import UserController from '../controllers/user.controller';
import usercontroller from '../controllers/user.controller';

const router = Router();

router.post('/signin', UserController.createUser);
router.post('/login', usercontroller.login);
router.get('/:userId', UserController.getUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
