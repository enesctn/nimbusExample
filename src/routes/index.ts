import { Express } from 'express'
import { applyRoutes as applyProductRoutes } from './product'


export function applyRoutes(app: Express) {
  applyProductRoutes(app)
}
