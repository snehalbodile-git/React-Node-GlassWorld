
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/",(req,res)=>{
    res.send("API Running")
})

app.get("/users",(req,res)=>{

    res.json([
        {id:1,name:"Snehal"},
        {id:2,name:"Megha"},
        {id:3,name:"Admin User"}
    ])

})

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})
