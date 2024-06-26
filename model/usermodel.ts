
import { model, Schema, Document } from 'mongoose';
import { UserInterface } from '../interfaces/routes.interface';

const userSchema: Schema<UserInterface & Document> = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Customer"]
    }
}, { timestamps: true });

const userModel = model<UserInterface & Document>('User', userSchema);

export default userModel;
