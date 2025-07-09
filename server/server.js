const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json());

// 👉 Root route
app.get('/', (req, res) => {
    res.send('✅ URL Shortener API is running!');
  });

app.use('/api/v1', require('./routes/urlRoutes'));
app.use('/api/test', require('./routes/testRoute'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
