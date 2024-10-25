const mongoose = require('mongoose');
const connectdb = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI,   
            {
            }
        );
        console.log(`MongoDB connected: ${con.connection.host}`);
    }
    catch(error){
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
};

module.exports = connectdb;