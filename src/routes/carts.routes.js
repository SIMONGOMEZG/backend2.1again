import { Router } from 'express';
import { CartService } from '../services/cart.service.js';
import { validateCartProduct, validateCartArray } from '../middleware/validateCart.js';

const router = Router();

router.post('/', async (req, res) => {
  const cart = await CartService.create();
  res.status(201).json({ status: 'success', cart });
});

router.get('/:cid', async (req, res) => {
  const cart = await CartService.getById(req.params.cid);
  res.json({ status: 'success', cart });
});

router.post('/:cid/product/:pid', async (req, res) => {
  const cart = await CartService.addProduct(req.params.cid, req.params.pid);
  res.json({ status: 'success', cart });
});

router.put('/:cid/products/:pid', validateCartProduct, async (req, res) => {
  const cart = await CartService.updateQuantity(req.params.cid, req.params.pid, req.body.quantity);
  res.json({ status: 'success', cart });
});

router.put('/:cid', validateCartArray, async (req, res) => {
  const cart = await CartService.updateAllProducts(req.params.cid, req.body.products);
  res.json({ status: 'success', cart });
});

router.delete('/:cid/products/:pid', async (req, res) => {
  const cart = await CartService.removeProduct(req.params.cid, req.params.pid);
  res.json({ status: 'success', cart });
});

router.delete('/:cid', async (req, res) => {
  const cart = await CartService.clearCart(req.params.cid);
  res.json({ status: 'success', cart });
});

export default router;
