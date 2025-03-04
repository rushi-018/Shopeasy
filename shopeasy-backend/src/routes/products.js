const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const { protect } = require('../middleware/auth')

router.get('/', productController.getProducts)
router.get('/:id', productController.getProductById)
router.get('/:id/local-shops', productController.getLocalShops)
router.post('/', protect, productController.createProduct)
router.put('/:id', protect, productController.updateProduct)

module.exports = router 