import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import login from './routes/login';
import { notFound, errorHandler, MessageResponse } from './middlewares';
import signup from './routes/signup';
import quickForm from './routes/quickForm';
import forgotPasswordRoutes from './routes/forgotPassword';

require('dotenv').config();

const app: Application = express();

process.env.NODE_ENV === 'development' && app.use(morgan('dev'));

app.use(
  cors({
    origin: ['https://npm-library-demo.vercel.app', 'http://localhost:6006'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS', 'PUT'],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get<object, MessageResponse | string>('/', (_, res) => {
  res.json({ message: 'Welcome to the npm-library demo api' });
});
app.post('/login', login);
app.post('/signup', signup);
app.post('/quickform', quickForm);
app.use('/forgot-password', forgotPasswordRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
