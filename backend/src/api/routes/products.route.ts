import express from 'express';
import multer from 'multer';
import os from 'os';
import ProductsController from '../controllers/products.controller';
import ProductsService from '../services/products.service';
import ProductsModel from '../models/products.model';

const productsModel = new ProductsModel();
const productsService = new ProductsService(productsModel);
const productsController = new ProductsController(productsService);

const router = express.Router();
const upload = multer({
  dest: os.tmpdir()
});

router.get('/', productsController.findAll);
router.put('/', upload.single('file'), productsController.updatePrice);

export default router;
