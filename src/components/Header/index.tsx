import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartButton, HeaderContainer, LocationButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src="./src/assets/logo.svg" alt="logo do coffe delivery" />

      <div>
        <LocationButton>
          <MapPin weight="fill" />
          Porto Alegre, RS
        </LocationButton>
        <CartButton badgeContent={12}>
          <ShoppingCart weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
