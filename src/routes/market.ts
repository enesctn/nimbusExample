import { Express } from 'express';
import { listProductsController } from '../controllers/market'

export function applyRoutes(app: Express) {
  app.get('/data/products', (_, res) => listProductsController(res))
}
