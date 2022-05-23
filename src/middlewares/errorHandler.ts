import { NextFunction, Request, Response } from 'express';
import HttpException from '../errors/HttpException';

export default function errorHandler(
  error: HttpException,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  if (!res.status) return next();
  return res.status(status).json({ message });
}
