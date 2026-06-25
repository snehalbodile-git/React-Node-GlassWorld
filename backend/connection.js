const mongoose = require('mongoose');

// async function connectMongoDb(){
//     // return mongoose.connect('mongodb://127.0.0.1:27017/glass-world');
// }

let isConnected = false;

async function connectMongoDb() {
    if (isConnected) return;

    await mongoose.connect(process.env.MONGO_URI);

    isConnected = true;
    console.log("MongoDB Connected");
}
module.exports = {connectMongoDb};