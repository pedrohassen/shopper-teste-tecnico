import express from 'express';
import ProductsController from '../controllers/products.controller';
import ProductsService from '../services/products.service';
import ProductsModel from '../models/products.model';
import joiValidation from '../middlewares/joi.validation';
import fileValidation from '../middlewares/file.validation';
import adapter from '../middlewares/adapt.requisition';

const productsModel = new ProductsModel();
const productsService = new ProductsService(productsModel);
const productsController = new ProductsController(productsService);

const router = express.Router();

router.get('/', productsController.findAll);
router.put('/', joiValidation(fileValidation),
  adapter,
  productsController.updatePrice);

export default router;
