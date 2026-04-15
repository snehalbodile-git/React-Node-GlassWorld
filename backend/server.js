
const express = require("express")
const cors = require("cors")
const {connectMongoDb} = require("./connection");
const { connection } = require("mongoose");
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRouter = require('./routes/user');

// connection
connectMongoDb();

app.use(cors())

app.get("/",(req,res)=>{
    res.send("API Running")
})

// Routes

app.use('/api/users',userRouter);

app.listen(5001,()=>{
    console.log("Server running on port 5000")
})
