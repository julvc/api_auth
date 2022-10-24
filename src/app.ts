process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

import dotenv from 'dotenv';
import express from 'express';

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

const app: express.Application = express();
app.use(express.json());


export { app };