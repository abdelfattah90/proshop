import asyncHandler from '../middleware/async_handler.js'
import Product from '../models/product.js'

// Desc: Fetch all products
// Route: GET /api/products
// Access: Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// Desc: Fetch single product
// Route: GET /api/products/:id
// Access: Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    return res.json(product)
  }
  res.status(404)
  throw new Error('Resource not found')
})

export { getProducts, getProductById }
