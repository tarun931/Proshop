import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      //user that buys the product
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", //reference the user model
    },
    orderItems: [
      //this is gonna be an array ....ek se xad bhi order krskte hain
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      //jb paypal se payment hogi jb successful hoga to data aega
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String }, //paypal email
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true } //timestamps daalne pe created at aur updated at time ajaega ...khud add hojaege dono fields
);

const Order = mongoose.model("Order", orderSchema); //we will call it User and pass userSchema function

export default Order;
