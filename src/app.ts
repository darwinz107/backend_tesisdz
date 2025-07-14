import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes'
import authUser  from './routes/authUser'
import cors from 'cors'
import authValidation from './routes/authValidation'

dotenv.config()
const express = require("express")

const app = express()


app.use(express.json())
app.use(cors())
app.use('/app',authRoutes)
app.use('/auth',authUser)
app.use('/validation',authValidation)

export default app