import express, { Application } from 'express';
import "reflect-metadata"
import cors from 'cors';
import router from './routes';
import { AppDataSource } from 'db/app.datasource';


async function initServer() {
  const datasource = await AppDataSource.initialize()
  
  const app: Application = express();
  
  app.use(
    cors({
      origin: "*"
    })
  );
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));
  
  app.use('/', router);
  
  app.listen(4000, () => {
    console.log('app running on port 4000');
  });
}

initServer()