import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { RoundedIcon } from '../../components/RoundedIcon'
import { CartContext } from '../../contexts/CartContext'
import { OrderContainer, OrderInfo, OrderInfoSection } from './styles'

interface OrderProps {
  number: number
  zipCode: string
  street: string
  complement: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'creditCard' | 'debitCard' | 'money'
  products: {
    id: string
    amount: number
  }[]
  totalPrice: number
  deliveryFee: number
}

const PAYMENT_METHOD = {
  creditCard: 'Cartão de Crédito',
  debitCard: 'Cartão de Débito',
  money: 'Dinheiro',
}

export function Order() {
  const theme = useTheme()
  const { clearCartAfterOrder } = useContext(CartContext)
  const [order, setOrder] = useState<OrderProps>({} as OrderProps)

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:order-state-1.0.0',
    )

    if (storedStateAsJSON) {
      setOrder(JSON.parse(storedStateAsJSON))
      clearCartAfterOrder()
    }
  }, [clearCartAfterOrder])

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
                Entrega em{' '}
                <span>
                  Rua {order.street}, {order.number}
                </span>{' '}
                <br /> {order.neighborhood} - {order.city}, {order.state}
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
                Pagamento na entrega <br />{' '}
                <span>{PAYMENT_METHOD[order.paymentMethod]}</span>
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
