import userModel from '../model/usermodel';
import { UserInterface } from '../interfaces/routes.interface';
import jwt from 'jsonwebtoken'


class UserService {
    public async createUser(userData: UserInterface) {
        try {
            const newUser = await userModel.create(userData);
            return newUser;
        } catch (error) {
            throw new Error(`Error creating user: `);
        }
    }

    public async login(email: string, password: string): Promise<string | undefined> {
        try {
            const user = await userModel.findOne({ email, password });
            if (!user) {
                throw new Error('Invalid email or password');
            }
            const token = jwt.sign({ user }, 'your-secret-token', { expiresIn: '1h' });
            return token;
        } catch (error) {
            console.error('Error during login:');
            throw new Error('Invalid email or password');
        }
    }
    public async getUserById(userId: any) {
        try {
            const user = await userModel.findOne({ _id: userId });
            if (!user) {
                throw new Error('User not found');
            }
            return user
        } catch (error) {
            throw new Error(`Error fetching user:`);
        }
    }

    public async updateUser(userId: any, userData: any) {
        return await userModel.findByIdAndUpdate(userId, userData)
    }
    public async deleteUser(userId: any) {
        return await userModel.findByIdAndDelete(userId)
    }
}

export default new UserService();
