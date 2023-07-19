import { type Request, type Response } from 'express'
import logger from '@configs/logger.config'

const health = (req: Request, res: Response): void => {
  const { protocol, hostname, method, originalUrl } = req
  const headers = { ...req.headers }
  const metaData = { protocol, method, hostname, originalUrl, headers }
  logger.info(`Requesting ${method} ${protocol}://${hostname}${originalUrl}`, {
    metaData
  })
  res.sendStatus(200)
}

export default health
