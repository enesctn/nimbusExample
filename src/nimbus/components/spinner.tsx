import { NimbusJSX, FC } from '@zup-it/nimbus-backend-core'

export const Spinner: FC = ({ id, ...props }) => (
  <component id={id} namespace="store" name="spinner" properties={{ ...props }}></component>

)
