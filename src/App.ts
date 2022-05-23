import express from 'express';
import errorHandler from './middlewares/errorHandler';
import authenticationRouter from './routes/authentication';

export default class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  private middlewares(): void {

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
