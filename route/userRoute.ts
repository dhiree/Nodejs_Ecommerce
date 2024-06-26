
import { Router } from 'express';
import UserController from '../controller/usercontroller';
import usercontroller from '../controller/usercontroller';

const router = Router();

router.post('/signin', UserController.createUser);
router.post('/login', usercontroller.login);
router.get('/:userId', UserController.getUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
