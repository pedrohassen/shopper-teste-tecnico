import { type Request, type Response } from 'express';
import type ProductsService from '../services/products.service';

export default class ProductsController {
  constructor (private readonly service: ProductsService) { }

  public findAll = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.service.findAll();
    return res.status(200).json({ message: products });
  };

  public updatePrice = async (req: Request, res: Response): Promise<Response> => {
    const { error, message } = await this.service.updatePrice(req.body);
    if (error) return res.status(400).json({ error });
    return res.status(200).json({ message });
  };
}
