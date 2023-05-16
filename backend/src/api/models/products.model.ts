import { PrismaClient, type products } from '@prisma/client';
import { type IProductsCsv } from '../interfaces/products.interface';

export default class ProductsModel {
  private readonly _prisma: PrismaClient;

  constructor () {
    this._prisma = new PrismaClient();
  }

  public findAll = async (): Promise<products[]> => {
    return await this._prisma.products.findMany();
  };

  public getProductByCode = async (code: number): Promise<products | null> => {
    const product = await this._prisma.products.findUnique({
      where: {
        code
      }
    });

    if (product === null) throw new Error(`Produto não encontrado para o código: ${code}`);

    return product;
  };

  public updatePrice = async (updates: IProductsCsv): Promise<void> => {
    await this._prisma.$transaction([
      this._prisma.products.updateMany({
        where: {
          code: {
            in: updates.code as number
          }
        },
        data: {
          sales_price: updates.updatedPrice
        }
      })
    ]);
  };
}
