import { Request, Response } from 'express';
import HttpException from '../errors/HttpException';

export default function errorHandler(error: HttpException, _req: Request, res: Response) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  return res.status(status).json({ message });
}
