// import mongoose from "mongoose";

// const toppingSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   vegetarian: { type: Boolean, default: false },
//   inStock: { type: Boolean, default: true },
//   price: { type: Number, required: true },
// });

// const pizzaSchema = new mongoose.Schema({
//   size: {
//     type: String,
//     enum: ["small", "medium", "large", "extraLarge"],
//     required: true,
//   },
//   toppings: [toppingSchema],
//   basePrice: { type: Number, required: true },
//   totalPrice: { type: Number, required: true },
// }, {
//   timestamps: true,
// });

// const Pizza = mongoose.model("Pizza", pizzaSchema);
// export default Pizza;

import mongoose from "mongoose";

const toppingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  vegetarian: { type: Boolean, default: false },
  inStock: { type: Boolean, default: true },
  price: { type: Number, required: true },
});

const pizzaSchema = new mongoose.Schema({
  size: {
    type: String,
    enum: ["small", "medium", "large", "extraLarge"],
    required: true,
  },
  toppings: [toppingSchema],
  basePrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
}, {
  timestamps: true,
});

const Pizza = mongoose.model("Pizza", pizzaSchema);
export default Pizza;
