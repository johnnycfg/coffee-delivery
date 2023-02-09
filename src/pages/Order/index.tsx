import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { RoundedIcon } from '../../components/RoundedIcon'
import { OrderContainer, OrderInfo, OrderInfoSection } from './styles'

export function Order() {
  const theme = useTheme()
  return (
    <OrderContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <OrderInfoSection>
        <OrderInfo>
          <ul>
            <li>
              <RoundedIcon backgroundColor={theme.purple}>
                <MapPin weight="fill" />
              </RoundedIcon>
              <span>
                Entrega em <span>Rua João Daniel Martinelli, 102</span> <br />{' '}
                Farrapos - Porto Alegre, RS
              </span>
            </li>
            <li>
              <RoundedIcon backgroundColor={theme.yellow}>
                <Timer weight="fill" />
              </RoundedIcon>
              <span>
                Previsão de entrega <br /> <span>20 min - 30 min</span>
              </span>
            </li>
            <li>
              <RoundedIcon backgroundColor={theme['yellow-dark']}>
                <CurrencyDollar weight="fill" />
              </RoundedIcon>
              <span>
                Pagamento na entrega <br /> <span>Cartão de Crédito</span>
              </span>
            </li>
          </ul>
        </OrderInfo>
        <img
          src="./src/assets/delivery-guy.png"
          alt="homem pilotando uma moto com a entrega de um cliente"
        />
      </OrderInfoSection>
    </OrderContainer>
  )
}
