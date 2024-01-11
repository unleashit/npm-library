import express, { Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import login from './routes/login';
import { notFound, errorHandler, MessageResponse } from './middlewares';
import signup from './routes/signup';
import quickForm from './routes/quickForm';
import pagination from './routes/pagination';
import forgotPasswordRoutes from './routes/forgotPassword';

require('dotenv').config();

const app: Application = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get<object, MessageResponse | string>('/', (_, res) => {
  res.json({ message: 'Welcome to the npm-library demo api' });
});
app.get('/blog', pagination);
app.post('/login', login);
app.post('/signup', signup);
app.post('/quickform', quickForm);
app.use('/forgot-password', forgotPasswordRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
