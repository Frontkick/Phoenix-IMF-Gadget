const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const gadgetRoutes = require('./routes/gadget');

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gadgets', gadgetRoutes);

// Sync the database
sequelize.sync()
  .then(() => {
    console.log('Database connected and synced');
  })
  .catch((error) => {
    console.log('Error syncing database:', error);
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
