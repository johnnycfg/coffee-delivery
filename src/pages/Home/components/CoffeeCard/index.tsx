import { ShoppingCartSimple } from 'phosphor-react'
import { Badge } from '../../../../components/Badge'
import { QuantitySelector } from '../../../../components/QuantitySelector'
import {
  AddToCartButton,
  BuySection,
  BuySectionActions,
  CoffeeCardContainer,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img
        src="./src/assets/expresso.png"
        alt="xicara de café de café expresso tradicional"
      />

      <Badge colorScheme="yellow">TRADICIONAL</Badge>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <BuySection>
        <span>
          <span>R$</span> 9,90
        </span>

        <BuySectionActions>
          <QuantitySelector />
          <AddToCartButton>
            <ShoppingCartSimple weight="fill" />
          </AddToCartButton>
        </BuySectionActions>
      </BuySection>
    </CoffeeCardContainer>
  )
}
