import { Request, Response, NextFunction } from "express"
import UserService from '../services/user.service';
import Validate from '../validation/joi-validation';

class UserController {
    public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userData = req.body;
            const { error } = await Validate.createUser(userData);
            if (error) {
                throw new Error(error.details[0].message);
            }
            const newUser = await UserService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
    public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { email, password } = req.body;
            const { error } = await Validate.createUser({ email, password });
            if (error) {
                throw new Error(error.details[0].message);
            }
            const token = await UserService.login(email, password);
            res.status(200).json({ token });
        } catch (error) {
            console.error('Error during login:', error);
            next(error)
        }
    }
    public async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { userId } = req.params
            const user = await UserService.getUserById(userId);
            if (!user) {
                throw new Error('User not found....!');
            }
            res.status(200).json({
                data: user,
                message: "Success"
            });
        } catch (error) {
            next(error);
        }
    }
    public async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userId = req.params.id;
            const userData = req.body
            const { error } = await Validate.createUser({ userId, userData });
            if (error) {
                throw new Error(error.details[0].message);
            }
            const updateUser = await UserService.updateUser(userId, userData)
            if (!updateUser) {
                console.log("user not found......")
            }
            res.status(200).json({
                data: updateUser,
                message: "user Updated"
            })
        } catch (error) {
            console.log("User not Updated", error)
            next(error)
        }
    }

    public async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.id
            const deleteUser = await UserService.deleteUser(userId)
            res.status(200).json({
                message: "user delete",
                deleteUser
            })
        } catch (error) {
            console.log("user not deleted")
        }
    }
}

export default new UserController();
