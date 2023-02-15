import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { CartButton, HeaderContainer, LocationButton } from './styles'

export function Header() {
  const { cart } = useContext(CartContext)
  const nagivate = useNavigate()

  const cartSize = cart.length

  return (
    <HeaderContainer>
      <img
        src="./src/assets/logo.svg"
        alt="logo do coffe delivery"
        onClick={() => nagivate('/')}
      />

      <div>
        <LocationButton>
          <MapPin weight="fill" />
          Porto Alegre, RS
        </LocationButton>
        <CartButton
          badgeContent={cartSize}
          onClick={() => nagivate('/checkout')}
        >
          <ShoppingCart weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
