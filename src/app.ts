import dotenv from 'dotenv'
dotenv.config()
const express = require("express")

const app = express()


app.use(express.json())

export default app