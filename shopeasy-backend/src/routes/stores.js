const express = require('express')
const router = express.Router()
const storeController = require('../controllers/storeController')
const { protect } = require('../middleware/auth')

router.get('/', storeController.getStores)
router.get('/:id', storeController.getStoreById)
router.post('/', protect, storeController.registerStore)
router.put('/:id', protect, storeController.updateStore)

module.exports = router 