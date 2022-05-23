import { Request, Response, Router } from 'express';
import validation from '../middlewares/validation';
import authentication from '../schemas/authentication';

const authenticationRouter = Router();

authenticationRouter.post('/auth', validation(authentication), (req: Request, res: Response) => res.send(''));

export default authenticationRouter;
