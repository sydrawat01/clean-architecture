import { Sequelize } from 'sequelize'
import { dbConfig } from '@configs/db.config'
import logger from '@configs/logger.config'

const { DB, HOSTNAME, DBPORT, USER, PASSWORD, dialect, dialectOptions } = dbConfig

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOSTNAME,
  port: DBPORT,
  dialect,
  dialectOptions,
  logging: false
})

const connectionTest = async (): Promise<void> => {
  try {
    await sequelize.authenticate()
    logger.info(`Successfully connected to database ${DB}`)
  } catch (error) {
    logger.error(`Unable to connect to database ${DB}`, error)
  }
}
const db = {
  Sequelize,
  sequelize,
  connectionTest
}

export default db
