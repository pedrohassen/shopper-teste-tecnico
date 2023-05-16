import { type NextFunction, type Request, type Response } from 'express';

const adapter = (req: Request, res: Response, next: NextFunction): any => {
  try {
    const defaultBody = req.body.map((item: any) => {
      return {
        updatedPrice: +item.new_price,
        code: +item.product_code
      };
    });
    req.body = defaultBody;
    next();
  } catch (error) {
    return res.status(422).json({ message: 'Invalid CSV' });
  }
};

export default adapter;
