import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import productRoutes from './routes/product.js'
import { notFound, errorHandler } from './middleware/error.js'

dotenv.config()

// DATABASE
connectDB()

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
)

app.get('/', (req, res) => {
  res.send('In the name of of Allah the Merciful')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)
app.use(morgan('dev'))

app.listen(process.env.PORT || 5000, () => console.log('App Running...'))
