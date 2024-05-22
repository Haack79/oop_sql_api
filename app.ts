import express, { Application as ExpressApplication, Request, Response } from 'express';
import sequelize from './config/database';
import Order from './features/order/models/orderModel';

class Application {
  public app: ExpressApplication;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddleware();
    this.initializeDatabase();
    this.initializeRoutes();
  }

  private initializeMiddleware(): void {
    this.app.use(express.json());
  }

  private async initializeDatabase(): Promise<void> {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await sequelize.sync();
      console.log('Database synchronized.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  private initializeRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello, world!');
    });

    // Add more routes here
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

export default Application;
