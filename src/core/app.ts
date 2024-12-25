import cors from 'cors';
import express from 'express';
import userRoutes from '../routes/userRoutes';

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3001', // Replace with your Next.js app URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', userRoutes);

export default app;
