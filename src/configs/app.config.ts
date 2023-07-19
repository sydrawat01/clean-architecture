import dotenv from 'dotenv'

dotenv.config()

const { HOSTNAME, PORT, ENVIRONMENT } = process.env

interface appConfig {
  HOSTNAME: string
  PORT: number
  ENVIRONMENT: string
}

const config: appConfig = {
  HOSTNAME: HOSTNAME ?? 'localhost',
  PORT: Number(PORT),
  ENVIRONMENT: ENVIRONMENT ?? 'test'
}

export { config as appConfig }
