import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  subCategory: String,
  bestseller: Boolean,
  soldOut: { type: Boolean, default: false },
  sizes: [String],
  colors: [String],  // <-- এখানে colors array যোগ করা হলো
  image: [String],
  date: { type: Date, default: Date.now }
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;
// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: String,
//   price: Number,
//   category: { type: String, required: true },   // Only category field
//   bestseller: { type: Boolean, default: false }, // Mark featured product
//   soldOut: { type: Boolean, default: false },
//   sizes: [String],
//   colors: [String],
//   image: [String],
//   date: { type: Date, default: Date.now }
// });

// const productModel = mongoose.model('Product', productSchema);

// export default productModel;

