const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  logo: {
    type: String
  },
  location: {
    address: String,
    city: String,
    state: String,
    coordinates: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
  },
  contact: {
    phone: String,
    email: String
  },
  hours: {
    monday: { open: String, close: String },
    tuesday: { open: String, close: String },
    wednesday: { open: String, close: String },
    thursday: { open: String, close: String },
    friday: { open: String, close: String },
    saturday: { open: String, close: String },
    sunday: { open: String, close: String }
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

storeSchema.index({ 'location.coordinates': '2dsphere' })

module.exports = mongoose.model('Store', storeSchema) 