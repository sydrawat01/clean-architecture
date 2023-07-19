import { type Dialect } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const { DB, DBPORT, USER, PASSWORD, ENVIRONMENT, HOSTNAME } = process.env

let dialectOptions = {}
if (ENVIRONMENT !== 'dev') {
  dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}
interface dbConfig {
  DB: string
  HOSTNAME: string
  DBPORT: number
  USER: string
  PASSWORD: string
  dialect: Dialect
  dialectOptions: Record<string, unknown>
}

const config: dbConfig = {
  DB: DB ?? 'test',
  HOSTNAME: HOSTNAME ?? 'localhost',
  DBPORT: Number(DBPORT),
  USER: USER ?? 'sid',
  PASSWORD: PASSWORD ?? 'password',
  dialect: 'postgres',
  dialectOptions
}

export { config as dbConfig }
