import fs from 'fs/promises'
import { v4 as uuidv4 } from 'uuid'

export default class CartManager {
  constructor(path) {
    this.path = path
  }

  async _readFile() {
    try {
      const data = await fs.readFile(this.path, 'utf-8')
      return JSON.parse(data)
    } catch (error) {
      return []
    }
  }

  async _writeFile(data) {
    await fs.writeFile(this.path, JSON.stringify(data, null, 2), 'utf-8')
  }

  async createCart() {
    const carts = await this._readFile()

    const newCart = {
      id: uuidv4(),
      products: [],
    }

    carts.push(newCart)
    await this._writeFile(carts)
    return newCart
  }

  async getCartById(cid) {
    const carts = await this._readFile()
    return carts.find(c => c.id === cid)
  }

  async addProductToCart(cid, pid) {
    const carts = await this._readFile()
    const cartIndex = carts.findIndex(c => c.id === cid)

    if (cartIndex === -1) throw new Error('Carrito no encontrado')

    const cart = carts[cartIndex]
    const productIndex = cart.products.findIndex(p => p.product === pid)

    if (productIndex !== -1) {
      cart.products[productIndex].quantity += 1
    } else {
      cart.products.push({ product: pid, quantity: 1 })
    }

    carts[cartIndex] = cart
    await this._writeFile(carts)
    return cart
  }
}