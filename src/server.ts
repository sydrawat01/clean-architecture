import 'module-alias/register'
import app from '@api/app'
import { appConfig } from '@configs/app.config'
import logger from '@configs/logger.config'
import db from '@api/models'

const { HOSTNAME, PORT, ENVIRONMENT } = appConfig

db.connectionTest().then((req) => {
  app.listen(PORT, () => {
    if (ENVIRONMENT !== 'prod') {
      logger.info(`Server is running at ${HOSTNAME}:${PORT}`)
    }
  })
}).catch((err) => {
  console.log('error', err)
})
