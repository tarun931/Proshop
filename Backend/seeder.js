//sample data

import mongoose from "mongoose";
import dotenv from "dotenv"; //MONGo_URI .env mein h
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./Models/userModel.js";
import Order from "./Models/OrderModel.js"; //hum log sample orders  create nhi krenge ismein ...lekin hum chahte hain ki user ke products wgera  delete krskein
import connectDB from "./config/db.js";
import Product from "./Models/productModel.js";
//ye sb krna pdra h kyonki ye file hmare server se connected nhi h totallt seperate h
dotenv.config();
connectDB();
const importData = async () => {
  try {
    //we are clearing all 3 models
    await Order.deleteMany(); //this will be a promise thats why  we have used await
    await Product.deleteMany();
    await User.deleteMany();
    //ab hum log insert krenge data jo users.js se ara h
    const createdUsers = await User.insertMany(users); //created users sb ismein ajaenge (createdUsers mein) to isliye ye ek array h
    const adminUser = createdUsers[0]._id; //1st item yani index 0 isliye lere hain kyonki ....users.js mein jo pehla field h wo admin ka h ....to pta pdega kaunse admin ne add kiya h
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    }); //sari detail li hain aur user field mein adminUser daala h ....productmodel mein jaake ptapdega kya kya field

    await Product.insertMany(sampleProducts);
    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    //we are clearing all 3 models
    await Order.deleteMany(); //this will be a promise thats why  we have used await
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
//neeche terminal mein node backend/seeder -d likhenge ....isse access krne ke liye
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
