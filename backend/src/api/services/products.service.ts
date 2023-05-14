import { type products } from '@prisma/client';
import type ProductsModel from '../models/products.model';
import type IProducts from '../interfaces/products.interface';

export default class ProductsService {
  constructor (private readonly model: ProductsModel) {}

  public findAll = async (): Promise<products[]> => {
    return await this.model.findAll();
  };

  public updatePrice = async (updates: IProducts[]): Promise<void> => {
    await this.model.updatePrice(updates);
  };
}
