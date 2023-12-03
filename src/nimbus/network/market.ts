import { request } from '@zup-it/nimbus-backend-core/actions'
import { MarketEntitiy } from '../../models/marketEntitiy'

export const listProducts = request<MarketEntitiy[]>()
  .compose(() => ({ url: '/data/products' }))
