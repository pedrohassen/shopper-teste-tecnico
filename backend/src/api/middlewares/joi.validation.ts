import { type Request, type Response, type NextFunction } from 'express';

const joiValidation = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  console.log(error || 'ok');
  if (error) {
    return res.status(422).json({ message: 'Invalid CSV' });
  }
  next();
};

export default joiValidation;
