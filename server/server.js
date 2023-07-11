import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import products from './data/products.js';

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('In the name of of Allah the Merciful')
})

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  res.json(product);
});

// DATABASE
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('DB Connected...')
  })
  .catch(() => {
    console.log('DB Failed...')
  })

app.listen(process.env.PORT || 5000, () => console.log('App Running...'))
