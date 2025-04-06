import fs from 'fs/promises'
import { v4 as uuidv4 } from 'uuid'

export default class ProductManager {
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

  async getProducts() {
    return await this._readFile()
  }

  async getProductById(id) {
    const products = await this._readFile()
    return products.find(p => p.id === id)
  }

  async addProduct(product) {
    const products = await this._readFile()

    const newProduct = {
      id: uuidv4(),
      status: true,
      ...product,
    }

    products.push(newProduct)
    await this._writeFile(products)
    return newProduct
  }

  async updateProduct(id, updates) {
    const products = await this._readFile()
    const index = products.findIndex(p => p.id === id)

    if (index === -1) throw new Error('Producto no encontrado')

    const updatedProduct = { ...products[index], ...updates, id: products[index].id }
    products[index] = updatedProduct

    await this._writeFile(products)
    return updatedProduct
  }

  async deleteProduct(id) {
    const products = await this._readFile()
    const updatedProducts = products.filter(p => p.id !== id)
    await this._writeFile(updatedProducts)
  }
}