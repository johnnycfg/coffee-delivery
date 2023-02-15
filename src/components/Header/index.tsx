import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CartButton, HeaderContainer, LocationButton } from './styles'

export function Header() {
  const { cart } = useContext(CartContext)

  const cartSize = cart.length

  return (
    <HeaderContainer>
      <img src="./src/assets/logo.svg" alt="logo do coffe delivery" />

      <div>
        <LocationButton>
          <MapPin weight="fill" />
          Porto Alegre, RS
        </LocationButton>
        <CartButton badgeContent={cartSize}>
          <ShoppingCart weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
