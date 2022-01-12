//databse config or database connect file

import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }); //ye mongoose.connect bhejega promise ... ismein .env file mein jo connect krne ke liye string dali hui hai wo pass kr rhe hain ....
    //{useUnifiedTopology: true , useNewUrlParser: true, useCreateIndex:true}  // ye daalna pdta h nhi to error dedega console mein
    console.log(`Mongodb connected: ${con.connection.host}`.cyan.underline); //cyan.underline ...ye bus color add kr rha hun
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
