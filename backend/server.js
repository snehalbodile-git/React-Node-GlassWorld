const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectMongoDb } = require("./connection");
const routes = require("./routes/user");

dotenv.config();

const app = express();

connectMongoDb();

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use("/api/users", routes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5002, () => {
  console.log("Server running on port 5002");
});