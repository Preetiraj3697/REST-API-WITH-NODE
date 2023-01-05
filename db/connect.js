const mongoose = require('mongoose');


const connectDB = (uri)=>{
    console.log("connect Db")
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};

module.exports = connectDB;