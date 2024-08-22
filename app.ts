import mongoose from 'mongoose';
import userRoute from './routes/user.route';
import categories from './routes/categorie.route'
import productVariants from './routes/product-variants.route'
import product from './routes/product.Route'
import subCategories from './routes/sub-categories.routs'
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
        this.app.use('/health', (req, res) => {
            res.status(200).json({ msg: "Server is healthy" });
        })
        this.app.use('/user', userRoute);
        this.app.use('/categories', categories)
        this.app.use('/variant', productVariants)
        this.app.use('/product', product)
        this.app.use('/sub-categories', subCategories)
    }


    private startServer(): void {
        this.app.listen(this.port, () => {
            console.log(`Server started on http://localhost:${this.port}`);
        });
    }
}

new App();
