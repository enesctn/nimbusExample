import { eq, Else, If, NimbusJSX, Then } from '@zup-it/nimbus-backend-core'
import { Screen, ScreenRequest } from '@zup-it/nimbus-backend-express'
import { Column, RemoteImage, Row, ScreenComponent, ScrollView, Text } from '@zup-it/nimbus-backend-layout'
import { MarketEntitiy as ProductModel } from '../../models/marketEntitiy'
import { formatPrice } from '../operations'

interface ProductScreenProps extends ScreenRequest {
  state: {
    product: ProductModel,
  }
}

export const Product: Screen<ProductScreenProps> = ({ getViewState }) => {
  const product = getViewState('product')

  return (

    <ScreenComponent title ={product.get('title')} >
      <ScrollView>
      <Column backgroundColor="#FFFFFF" height="expand" width = "expand"  >
          <Column padding={1} crossAxisAlignment="center" height="expand" width = "expand" >
            <Text size={24} weight="bold">{product.get('descriptionRate')}</Text>
            <RemoteImage url={product.get('image').toString()} scale="center"  />



            <Text size={24} weight="bold">{formatPrice(product.get('price'), 'USD')}</Text>
            <Text size={16} weight="light">{product.get('description')}</Text>
            <Text size={16} weight="light" color="#515151">{product.get('descriptionRate')}</Text>
          </Column>
      </Column>
  </ScrollView>
    </ScreenComponent>
  )
}
