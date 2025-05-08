import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  code: { type: String, unique: true, required: true },
  price: { type: Number, required: true },
  status: { type: Boolean, default: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  thumbnails: { type: [String], default: [] }
});

productSchema.plugin(require('mongoose-paginate-v2'));

export const ProductModel = mongoose.model('Product', productSchema);
