const Store = require('../models/Store')

const storeController = {
  getStores: async (req, res) => {
    try {
      const { lat, lng, radius = 5, type } = req.query
      const query = {}

      if (lat && lng) {
        query['location.coordinates'] = {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [parseFloat(lng), parseFloat(lat)],
            },
            $maxDistance: radius * 1000,
          },
        }
      }

      if (type) {
        query.type = type
      }

      const stores = await Store.find(query).populate('owner', 'name email')
      res.json(stores)
    } catch (error) {
      res.status(400)
      throw error
    }
  },

  getStoreById: async (req, res) => {
    try {
      const store = await Store.findById(req.params.id)
        .populate('owner', 'name email')

      if (!store) {
        res.status(404)
        throw new Error('Store not found')
      }

      res.json(store)
    } catch (error) {
      res.status(404)
      throw error
    }
  },

  registerStore: async (req, res) => {
    try {
      const store = new Store({
        ...req.body,
        owner: req.user._id,
      })

      const createdStore = await store.save()
      res.status(201).json(createdStore)
    } catch (error) {
      res.status(400)
      throw error
    }
  },

  updateStore: async (req, res) => {
    try {
      const store = await Store.findById(req.params.id)

      if (!store) {
        res.status(404)
        throw new Error('Store not found')
      }

      if (store.owner.toString() !== req.user._id.toString() && 
          req.user.role !== 'admin') {
        res.status(403)
        throw new Error('Not authorized to update this store')
      }

      const updatedStore = await Store.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )

      res.json(updatedStore)
    } catch (error) {
      res.status(400)
      throw error
    }
  },
}

module.exports = storeController 