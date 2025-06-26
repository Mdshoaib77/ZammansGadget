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
