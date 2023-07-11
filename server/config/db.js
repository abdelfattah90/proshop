import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`MongoDB Connected! port:${conn.connection.port}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}
export default connectDB

// mongoose
//     .connect(process.env.MONGODB_URI)
//     .then(() => {
//         console.log('DB Connected...')
//     })
//     .catch(() => {
//         console.log('DB Failed...')
//     })
