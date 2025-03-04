const jwt = require('jsonwebtoken')
const User = require('../models/User')

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body

      const userExists = await User.findOne({ email })
      if (userExists) {
        res.status(400)
        throw new Error('User already exists')
      }

      const user = await User.create({
        name,
        email,
        password,
      })

      if (user) {
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token: generateToken(user._id),
        })
      }
    } catch (error) {
      res.status(400)
      throw error
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email })
      if (user && (await user.matchPassword(password))) {
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token: generateToken(user._id),
        })
      } else {
        res.status(401)
        throw new Error('Invalid email or password')
      }
    } catch (error) {
      res.status(401)
      throw error
    }
  },

  getCurrentUser: async (req, res) => {
    try {
      const user = await User.findById(req.user._id).select('-password')
      res.json(user)
    } catch (error) {
      res.status(404)
      throw new Error('User not found')
    }
  },
}

module.exports = authController 