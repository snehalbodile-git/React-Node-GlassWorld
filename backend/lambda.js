const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const { connectMongoDb } = require("./connection");
const routes = require("./routes/user");

const app = express();

// Connect MongoDB
connectMongoDb();

app.use(express.json());
app.use(cors());

app.use("/api/users", routes);

app.get("/", (req, res) => {
  res.send("Lambda API Running");
});

module.exports.handler = serverless(app);