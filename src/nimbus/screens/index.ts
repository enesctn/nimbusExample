import { RouteMap } from '@zup-it/nimbus-backend-express'
import { Markets } from './markets'
import { Market } from './market'


export const routes: RouteMap = {
  '/products': Markets,
  '/product': Market,
}
