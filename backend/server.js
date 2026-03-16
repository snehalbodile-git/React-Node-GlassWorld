
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

/* Mock Users Data */
const users = [
  {
    id: 1,
    role: "Admin",
    firstName: "Snehal",
    lastName: "Bodile",
    email: "snehal@test.com",
    phone: "9876543210",
    altPhone: "9123456789",
    status: "Active",
    createdAt: "2026-03-15",
    updatedAt: "2026-03-15"
  },
  {
    id: 2,
    role: "Customer",
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul@test.com",
    phone: "9876540000",
    altPhone: "9000000000",
    status: "Active",
    createdAt: "2026-03-14",
    updatedAt: "2026-03-15"
  },
  {
    id: 3,
    role: "Vendor",
    firstName: "Priya",
    lastName: "Patil",
    email: "priya@test.com",
    phone: "9988776655",
    altPhone: "9876500000",
    status: "Inactive",
    createdAt: "2026-03-10",
    updatedAt: "2026-03-12"
  }
];

app.get("/",(req,res)=>{
    res.send("API Running")
})

app.get("/api/users", (req, res) => {

  res.json({
    success: true,
    data: users
  });

});

app.listen(5001,()=>{
    console.log("Server running on port 5000")
})
