import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { Badge } from '../../../../components/Badge'
import {
  AddToCartButton,
  BuySection,
  BuySectionActions,
  CoffeeCardContainer,
  QuantitySelector,
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
          <QuantitySelector>
            <button>
              <Minus weight="bold" />
            </button>
            1
            <button>
              <Plus weight="bold" />
            </button>
          </QuantitySelector>
          <AddToCartButton>
            <ShoppingCartSimple weight="fill" />
          </AddToCartButton>
        </BuySectionActions>
      </BuySection>
    </CoffeeCardContainer>
  )
}
