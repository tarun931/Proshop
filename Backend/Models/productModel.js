import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number, //ye wali rating individual rating h ....jo neeche define ki h wo sbka average h
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const productSchema = mongoose.Schema(
  {
    //ye pta krne ke liye h kis admin ne product create kiya h
    user: {
      type: mongoose.Schema.Types.ObjectId, //object id ese lenge
      required: true,
      ref: "User", //ye alag object model btare hain kaise show krna chahiye ...to ye btaega kaunsa user h
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema], //ye array type hoga ...aur iska schema bhi thoda alag hoga
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true } //timestamps daalne pe created at aur updated at time ajaega ...khud add hojaege dono fields
);

const Product = mongoose.model("Product", productSchema); //we will call it User and pass userSchema function

export default Product;
