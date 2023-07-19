import { Router } from 'express'
import health from '@api/controllers/health.controller'

const router = Router()

router.get('/', health)
router.get('/health', health)

export { router as HealthRoute }
