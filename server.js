const express = require('express');
// const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const timingMiddleware = require('./middlewares/timingMiddleware');
// Initialize dotenv
dotenv.config();

// Create Express app
const app = express();

// Connect to database
// connectDB();

// Middleware
app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: 'GET,POST,PUT,DELETE',
//   credentials: true
// }));
app.use(express.json());
// Add after other middleware declarations
app.use(timingMiddleware);
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/uploads', express.static('uploads'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});