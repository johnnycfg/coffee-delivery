import { Minus, Plus } from 'phosphor-react'
import { QuantitySelectorContainer } from './styles'

export function QuantitySelector() {
  return (
    <QuantitySelectorContainer>
      <button type="button">
        <Minus weight="bold" />
      </button>
      1
      <button type="button">
        <Plus weight="bold" />
      </button>
    </QuantitySelectorContainer>
  )
}
