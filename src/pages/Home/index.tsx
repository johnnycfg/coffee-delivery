import { Coffee, MapPin, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  CartButton,
  Header,
  HomeContainer,
  IntroSection,
  LocationButton,
  RoundedIcon,
} from './styles'

export function Home() {
  const theme = useTheme()

  return (
    <HomeContainer>
      <Header>
        <img src="./src/assets/logo.svg" alt="logo do coffe delivery" />

        <div>
          <LocationButton>
            <MapPin weight="fill" />
            Porto Alegre, RS
          </LocationButton>
          <CartButton>
            <ShoppingCart weight="fill" />
          </CartButton>
        </div>
      </Header>

      <main>
        <IntroSection>
          <div>
            <header>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </header>

            <ul>
              <li>
                <RoundedIcon backgroundColor={theme['yellow-dark']}>
                  <ShoppingCart weight="fill" />
                </RoundedIcon>{' '}
                Compra simples e segura
              </li>
              <li>
                <RoundedIcon backgroundColor={theme['base-text']}>
                  <Package weight="fill" />
                </RoundedIcon>{' '}
                Embalagem mantém o café intacto
              </li>
              <li>
                <RoundedIcon backgroundColor={theme.yellow}>
                  <Timer weight="fill" />
                </RoundedIcon>{' '}
                Entrega rápida e rastreada
              </li>
              <li>
                <RoundedIcon backgroundColor={theme.purple}>
                  <Coffee weight="fill" />
                </RoundedIcon>{' '}
                O café chega fresquinho até você
              </li>
            </ul>
          </div>
          <img
            src="./src/assets/coffee-cup.svg"
            alt="Copo de café com uma logo escrito Coffee Delivery"
          />
        </IntroSection>
      </main>
    </HomeContainer>
  )
}
