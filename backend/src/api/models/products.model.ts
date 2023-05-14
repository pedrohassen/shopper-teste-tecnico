import { PrismaClient, type products } from '@prisma/client';
import type IProducts from '../interfaces/products.interface';

export default class ProductsModel {
  private readonly _prisma: PrismaClient;

  constructor () {
    this._prisma = new PrismaClient();
  }

  public findAll = async (): Promise<products[]> => {
    return await this._prisma.products.findMany();
  };

  public updatePrice = async (updates: IProducts[]): Promise<void> => {
    await this._prisma.$transaction([
      this._prisma.products.updateMany({
        where: {
          code: {
            in: updates.map((update) => update.code)
          }
        },
        data: updates
      })
    ]);
  };
}
