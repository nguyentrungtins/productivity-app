const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const todoListRoutes = require("./routes/todo");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todo", todoListRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server start on port ${port}`));
