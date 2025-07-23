import express from 'express'
import { validarFunction } from '../controller/authValidation'
import { tokenHuggin } from '../controller/authController'

const router = express.Router()

router.post('/validation',validarFunction);
router.get('/token',tokenHuggin);
export default router