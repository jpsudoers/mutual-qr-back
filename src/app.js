import express from 'express';
import cors from 'cors';
import config from './config';
import userController from './routes/users.route';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('port', config.port)
app.use(cors({
    origin: '*',
}))
app.use(userController);



export default app;