import { createLogger, format, transports } from 'winston'
import appRootPath from 'app-root-path'

const { timestamp, combine, printf, splat } = format

/**
 * Logging levels
 * error: 0, #bf616a
   warn: 1, #ebcb8b
   info: 2, #8fa1b3
   http: 3, #a3be8c
   verbose: 4, #b48ead
   debug: 5, #96b5b4
   silly: 6, #ff00fb
 */

const logFormat = printf(({ level, message, timestamp, ...meta }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message} ${
    meta ? JSON.stringify(meta) : ''
  }`
})

const logger = createLogger({
  format: combine(timestamp(), splat(), logFormat),
  transports: [
    new transports.File({ filename: `${appRootPath}/logs/api.log` }),
    new transports.Console()
  ]
})

export default logger
