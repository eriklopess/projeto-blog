import express from 'express';
import errorHandler from './middlewares/errorHandler';
import authenticationRouter from './routes/authentication';

export default class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.config();
    this.routes();
    this.errorHandler();
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

  public start(PORT: number): void {
    this.app.listen(PORT, () => console.log(`Server is listening on: ${PORT}`));
  }
}
