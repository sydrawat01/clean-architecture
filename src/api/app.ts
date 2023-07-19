import express, { type Application } from 'express'
import { HealthRoute } from './routes/health.route'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', HealthRoute)

export default app
