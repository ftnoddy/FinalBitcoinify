import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
