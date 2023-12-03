import { Actions, NimbusJSX, FC, If, Then, Else, Operation, Expression } from '@zup-it/nimbus-backend-core'
import { Column, RemoteImage, Row, Text, Touchable } from '@zup-it/nimbus-backend-layout'
import { formatPrice } from '../operations'

export interface ProductItemProps {
  image: Expression<string>,
  title: Expression<string>,
  desc: Expression<string>,
  price: Expression<number>,
  onPressBuy: Actions,
  onPressDetails: Actions,
}

export const MarketItem: FC<ProductItemProps> = ({
  id,
  image,
  title,
  desc,
  price,
  onPressBuy,
  onPressDetails,
}) => (
  <Column
    id={id}
    backgroundColor="#FFFFFF"
    borderColor="#e3e3e3"
    borderWidth={1}
    cornerRadius={12}
    paddingHorizontal={24}
    paddingVertical={16}
    marginBottom={14}
    width="expand"
    shadow={[{ x: 1, y: 1, blur: 4, color: "#00000012" }]}
  >
    <Touchable onPress={onPressDetails}>
      <Row>
        <RemoteImage url={image.toString()} width={60} height={60} scale="fillWidth" />
        <Column marginStart={30}>
          <Text size={15}>{title}</Text>
          <Text size={15}>{desc}</Text>
          <Row paddingTop={12}>
            <Text size={17} weight="bold">{formatPrice(price, 'USD')}</Text>
          </Row>
        </Column>
      </Row>
    </Touchable>

  </Column>
)
