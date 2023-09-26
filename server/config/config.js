const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function mongooseConnect() {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: "mernAuth",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { console.log('Connected to database'); }).catch(() => {
        console.error('error in connecting to MongoDB', error);
    })
}
module.exports = mongooseConnect;