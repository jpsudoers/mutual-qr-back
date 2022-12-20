import express from 'express';
import cors from 'cors';
import config from './config';
import userController from './routes/users.route';

const app = express();
app.set('port', config.port)
app.use(cors({
    origin: '*',
}))
app.use(userController);



export default app;