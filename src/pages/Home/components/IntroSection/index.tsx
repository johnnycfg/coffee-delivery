import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { RoundedIcon } from '../../../../components/RoundedIcon'
import { IntroSectionContainer } from './styles'

export function IntroSection() {
  const theme = useTheme()

  return (
    <IntroSectionContainer>
      <div>
        <header>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
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
    </IntroSectionContainer>
  )
}
