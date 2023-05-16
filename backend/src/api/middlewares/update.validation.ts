import { type Prisma } from '@prisma/client';

const updateValidation = (costValue: Prisma.Decimal, actualPrice: Prisma.Decimal, updatedPrice: Prisma.Decimal): any => {
  if (+updatedPrice < +costValue) {
    const message = 'Você não pode atualizar o preço do produto para um valor menor do que o valor de custo.';
    return { message, price: actualPrice };
  }

  const tenPercent = +actualPrice * 0.1;
  const variation = Math.abs(+actualPrice - +updatedPrice);

  if (variation > tenPercent) {
    const message = 'A variação de preço não pode exceder 10% do valor atual.';
    return { message, price: actualPrice };
  }

  const message = 'O preço foi atualizado com sucesso.';
  return { message, price: updatedPrice };
};

export default updateValidation;
