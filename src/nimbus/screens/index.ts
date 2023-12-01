import { RouteMap } from '@zup-it/nimbus-backend-express'
import { Products } from './products'
import { Product } from './product'


export const routes: RouteMap = {
  '/products': Products,
  '/product': Product,
}
