import { Request, Response } from 'express';
import HttpException from '../errors/HttpException';

export default function errorHandler(error: HttpException, _req: Request, res: Response): Response {
  return res.status(error.status).json({ message: error.message });
}
