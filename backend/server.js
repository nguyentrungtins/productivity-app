const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const todoListRoutes = require("./routes/todo");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todo", todoListRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server start on port ${port}`));
