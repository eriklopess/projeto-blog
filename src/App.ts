import express from 'express';
import notFound from './middlewares/404';
import errorHandler from './middlewares/errorHandler';
import authenticationRouter from './routes/authentication';
import connectToDatabase from './connection';
import UserModel from './model/User';

export default class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.config();
    this.routes();
    this.errorHandler();
    this.app.use(notFound);
  }

  private middlewares(): void {
    this.app.use(express.json());
  }

  private config(): void {
    this.app.disable('x-powered-by');
  }

  private routes(): void {
    this.app.use('/', authenticationRouter);
  }

  private errorHandler(): void {
    this.app.use(errorHandler);
  }

  public async start(PORT: number): Promise<void> {
    await connectToDatabase();
    this.app.listen(PORT, () => console.log(`Server is listening on: ${PORT}`));
  }
}
