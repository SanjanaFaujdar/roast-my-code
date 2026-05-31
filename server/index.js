const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

dotenv.config();

const connectDB = require('./db');
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const roastLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many requests, please try again later.' }
});

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.use('/api', require('./routes/roast'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/roast', roastLimiter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});