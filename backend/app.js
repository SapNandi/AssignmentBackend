const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Error Handler Middleware
const errorMiddleware = require("./Middleware/error");

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
const bookRoute = require("./routes/BookRoute");

app.use("/api/v1", bookRoute);

// Error Middleware
app.use(errorMiddleware);

module.exports = app;
