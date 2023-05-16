import { type products } from '@prisma/client';
import type ProductsModel from '../models/products.model';
import updateValidation from '../middlewares/update.validation';
import { type ResponseReturn, type IProductsCsv } from '../interfaces/products.interface';

export default class ProductsService {
  constructor (private readonly model: ProductsModel) {}

  public findAll = async (): Promise<products[]> => {
    return await this.model.findAll();
  };

  public updatePrice = async (updates: IProductsCsv[]): Promise<ResponseReturn> => {
    for (const update of updates) {
      const product = await this.model.getProductByCode(update.code as number);

      if (!product && updates !== undefined) {
        return {
          error: `Produto não encontrado para o código: ${update.code as number}`
        };
      }

      if (product === null) {
        return {
          error: `Produto não encontrado para o código: ${update.code as number}`
        };
      }

      const validationResult = updateValidation(product.cost_price, product.sales_price, update.updatedPrice);

      if (validationResult.message !== 'O preço foi atualizado com sucesso.') {
        return {
          error: validationResult.message
        };
      }
      await this.model.updatePrice(update);
    }
    return {
      message: 'Os preços foram atualizados com sucesso.'
    };
  };
}
