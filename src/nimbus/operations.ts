import { DynamicExpression, Expression, Operation } from '@zup-it/nimbus-backend-core'
import { MarketEntitiy } from '../models/marketEntitiy'

export const formatPrice = (price: Expression<number>, currency: string) => (
  new Operation<string>('formatPrice', [price, currency])
)

