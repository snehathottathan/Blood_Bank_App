const mongoose = require('mongoose')
const colors = require('colors')
const connectedDB = async () => {

    try{
await mongoose.connect(process.env.MONGO_URL)
console.log(`Connected to mongoDb ${mongoose.connection.host}`);
    }catch(error) { 
console.log(`Mongodb database error ${error}`.bgRed.white);
    }
}

module.exports = connectedDB