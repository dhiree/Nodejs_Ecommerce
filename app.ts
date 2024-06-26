import mongoose from 'mongoose';
import userRoute from './route/userRoute';
import productCategories from './route/productCategoriesRoute'
import productVariants from './route/productVariants'
import productManagement from './route/productManagementRoute'
import express from "express"


class App {
    public app: express.Application;
    public port: number;

    constructor() {
        this.app = express();
        this.port = 8000;

        this.configureMiddleware();
        this.connectDatabase();
        this.initializeRoutes();
        this.startServer();
    }

    private configureMiddleware(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private connectDatabase(): void {
        const mongoUri = "mongodb+srv://bhandaridheere:9878249693@cluster0.kbjsfkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        mongoose.connect(mongoUri, {

        }).then(() => {
            console.log('Connected to MongoDB');
        }).catch((error) => {
            console.error('MongoDB connection error:', error);
        });
    }

    private initializeRoutes(): void {
        this.app.use('/user', userRoute);
        this.app.use('/productCategories', productCategories)
        this.app.use('/productVariant', productVariants)
        this.app.use('/productManagement', productManagement)
    }

    private startServer(): void {
        this.app.listen(this.port, () => {
            console.log(`Server started on http://localhost:${this.port}`);
        });
    }
}

new App();
