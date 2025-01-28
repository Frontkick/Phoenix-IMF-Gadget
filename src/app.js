const express = require("express");
const gadgetRoutes = require("./routes/gadgets");
const authRoutes = require("./routes/auth");
const authenticateToken = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());

// Authentication routes
app.use("/auth", authRoutes);

// Gadget routes (protected by token middleware)
app.use("/gadgets", authenticateToken, gadgetRoutes);

module.exports = app;
