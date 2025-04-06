import { Router } from 'express'
import CartManager from '../managers/CartManager.js'

const router = Router()
const cartManager = new CartManager('./src/data/carts.json')

router.post('/', async (req, res) => {
  const cart = await cartManager.createCart()
  res.status(201).json(cart)
})

router.get('/:cid', async (req, res) => {
  const cart = await cartManager.getCartById(req.params.cid)
  if (!cart) return res.status(404).json({ error: 'Carrito no encontrado' })
  res.json(cart)
})

router.post('/:cid/product/:pid', async (req, res) => {
  try {
    const updatedCart = await cartManager.addProductToCart(req.params.cid, req.params.pid)
    res.json(updatedCart)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

export default router