import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes'
dotenv.config()
const express = require("express")

const app = express()


app.use(express.json())
app.use('/app',authRoutes)

export default app