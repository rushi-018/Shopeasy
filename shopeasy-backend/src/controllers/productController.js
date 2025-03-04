const Product = require('../models/Product')

const productController = {
  getProducts: async (req, res) => {
    try {
      const { category, search, page = 1, limit = 10 } = req.query
      const query = {}

      if (category) {
        query.category = category
      }

      if (search) {
        query.name = { $regex: search, $options: 'i' }
      }

      const products = await Product.find(query)
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec()

      const count = await Product.countDocuments(query)

      res.json({
        products,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      })
    } catch (error) {
      res.status(400)
      throw error
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id)
        .populate('prices.store', 'name location')

      if (!product) {
        res.status(404)
        throw new Error('Product not found')
      }

      res.json(product)
    } catch (error) {
      res.status(404)
      throw error
    }
  },

  getLocalShops: async (req, res) => {
    try {
      const { lat, lng, radius = 5 } = req.query
      const product = await Product.findById(req.params.id)
        .populate({
          path: 'prices.store',
          match: {
            'location.coordinates': {
              $near: {
                $geometry: {
                  type: 'Point',
                  coordinates: [parseFloat(lng), parseFloat(lat)],
                },
                $maxDistance: radius * 1000, // Convert km to meters
              },
            },
          },
        })

      const localShops = product.prices
        .filter(price => price.store)
        .map(price => ({
          store: price.store,
          price: price.price,
          lastUpdated: price.lastUpdated,
        }))

      res.json(localShops)
    } catch (error) {
      res.status(400)
      throw error
    }
  },

  createProduct: async (req, res) => {
    try {
      const product = new Product({
        ...req.body,
        images: req.body.images || [],
      })

      const createdProduct = await product.save()
      res.status(201).json(createdProduct)
    } catch (error) {
      res.status(400)
      throw error
    }
  },

  updateProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id)

      if (!product) {
        res.status(404)
        throw new Error('Product not found')
      }

      // Only admin can update products
      if (req.user.role !== 'admin') {
        res.status(403)
        throw new Error('Not authorized to update products')
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )

      res.json(updatedProduct)
    } catch (error) {
      res.status(400)
      throw error
    }
  },
}

module.exports = productController 