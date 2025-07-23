import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes'
import authUser  from './routes/authUser'
import cors from 'cors'
import authValidation from './routes/authValidation'
import authIas from './routes/authIAS'

dotenv.config()
const express = require("express")

const app = express()


app.use(express.json())
app.use(cors())
app.use('/app',authRoutes)
app.use('/auth',authUser)
app.use('/validation',authValidation)
app.use('/tokeHuggin',authValidation)
app.use('/generate',authIas)

export default app