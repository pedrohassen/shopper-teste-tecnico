import express from 'express';
import cors from 'cors';
import ProductsRoute from './api/routes/products.route';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/products', ProductsRoute);

export default app;
