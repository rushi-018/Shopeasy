const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [{
    type: String
  }],
  category: {
    type: String,
    required: true
  },
  specifications: {
    type: Map,
    of: String
  },
  prices: [{
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Store'
    },
    price: Number,
    url: String,
    lastUpdated: Date
  }],
  onlinePrices: [{
    platform: String,
    price: Number,
    url: String,
    lastUpdated: Date
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', productSchema) 