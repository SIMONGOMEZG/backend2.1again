import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
  }]
});

cartSchema.methods.getTotal = function() {
  return this.products.reduce((total, item) => total + (item.quantity * item.product.price), 0);
};

export const CartModel = mongoose.model('Cart', cartSchema);
