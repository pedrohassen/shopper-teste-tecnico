import { type Prisma } from '@prisma/client';

export interface IProducts {
  code: number;
  name?: string;
  price?: number;
  sales_price: number;
}

export interface IProductsCsv {
  code?: number;
  costValue: Prisma.Decimal;
  actualPrice: Prisma.Decimal;
  updatedPrice: Prisma.Decimal;
}

export interface ResponseReturn {
  message?: string;
  error?: string;
}
