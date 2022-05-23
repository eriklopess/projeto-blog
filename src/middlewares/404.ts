import { Request, Response } from 'express';

export default function notFound(req: Request, res: Response) { return res.status(404).send('<h1>404</h1> <h2>Breakpoint not found</h2>'); }
