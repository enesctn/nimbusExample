import { Express } from 'express'
import { applyRoutes as applyProductRoutes } from './market'


export function applyRoutes(app: Express) {
  applyProductRoutes(app)
}
