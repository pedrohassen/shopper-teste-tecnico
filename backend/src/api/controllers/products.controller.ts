import { type Request, type Response } from 'express';
import type ProductsService from '../services/products.service';
import csvImporter from '../utils/csv.importer';

export default class ProductsController {
  constructor (private readonly service: ProductsService) { }

  public findAll = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.service.findAll();
    return res.status(200).json(products);
  };

  public updatePrice = async (req: Request, res: Response): Promise<Response> => {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const updates = await csvImporter(file.path);
    await this.service.updatePrice(updates);
    return res.status(204).end();
  };
}
