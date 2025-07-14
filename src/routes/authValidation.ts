import express from 'express'
import { validarFunction } from '../controller/authValidation'

const router = express.Router()

router.post('/validation',validarFunction)

export default router