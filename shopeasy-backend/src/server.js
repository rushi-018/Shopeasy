require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorHandler')
const uploadRoutes = require('./routes/upload')
const profileRoutes = require('./routes/profile')

// Connect to database
connectDB()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/products', require('./routes/products'))
app.use('/api/stores', require('./routes/stores'))
app.use('/api/upload', uploadRoutes)
app.use('/api/profile', profileRoutes)

// Error Handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) 