import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { QuantitySelector } from '../../components/QuantitySelector'
import {
  AddressSection,
  CheckoutForm,
  CompleteOrderSection,
  ConfirmOrderButton,
  Divider,
  Input,
  OrderItem,
  OrderItemActions,
  OrderList,
  OrderSummary,
  OrderSummarySection,
  PaymentSection,
  RadioGroupContainer,
  RemoveItemButton,
  SelectedCoffeeSection,
} from './styles'

export function Checkout() {
  return (
    <main>
      <CheckoutForm>
        <CompleteOrderSection>
          <h1>Complete seu pedido</h1>

          <AddressSection>
            <header>
              <MapPinLine />
              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <Input placeholder="CEP" style={{ width: '228px' }} />
            <Input placeholder="Rua" fullWidth />

            <div>
              <Input placeholder="Número" />
              <Input placeholder="Complemento" fullWidth />
            </div>
            <div>
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" fullWidth />
              <Input placeholder="UF" style={{ width: '60px' }} />
            </div>
          </AddressSection>

          <PaymentSection>
            <header>
              <CurrencyDollar />
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <RadioGroupContainer>
              <input
                type="radio"
                name="payment"
                value="creditCard"
                id="creditCard"
              />
              <label htmlFor="creditCard">
                <CreditCard />
                CARTÃO DE CRÉDITO
              </label>

              <input
                type="radio"
                name="payment"
                value="debitCard"
                id="debitCard"
              />
              <label htmlFor="debitCard">
                <Bank />
                CARTÃO DE DÉBITO
              </label>

              <input type="radio" name="payment" value="money" id="money" />
              <label htmlFor="money">
                <Money />
                DINHEIRO
              </label>
            </RadioGroupContainer>
          </PaymentSection>
        </CompleteOrderSection>

        <SelectedCoffeeSection>
          <h1>Cafés selecionados</h1>

          <OrderSummarySection>
            <OrderList>
              <OrderItem>
                <img
                  src="./src/assets/expresso.png"
                  alt="xicara de café de café expresso tradicional"
                />
                <div>
                  <h2>Expresso Tradicional</h2>
                  <OrderItemActions>
                    <QuantitySelector />
                    <RemoveItemButton type="button">
                      <Trash /> REMOVER
                    </RemoveItemButton>
                  </OrderItemActions>
                </div>
                <span>R$ 9,90</span>
              </OrderItem>

              <Divider />

              <OrderItem>
                <img
                  src="./src/assets/expresso.png"
                  alt="xicara de café de café expresso tradicional"
                />
                <div>
                  <h2>Expresso Tradicional</h2>
                  <OrderItemActions>
                    <QuantitySelector />
                    <RemoveItemButton type="button">
                      <Trash /> REMOVER
                    </RemoveItemButton>
                  </OrderItemActions>
                </div>

                <span>R$ 9,90</span>
              </OrderItem>
              <Divider />
              <OrderSummary>
                <div>
                  <span>Total de itens</span>
                  <span>R$ 29,70</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </div>
                <div>
                  <span>Total</span>
                  <span>R$ 33,20</span>
                </div>
              </OrderSummary>
            </OrderList>

            <ConfirmOrderButton type="submit">
              CONFIRMAR PEDIDO
            </ConfirmOrderButton>
          </OrderSummarySection>
        </SelectedCoffeeSection>
      </CheckoutForm>
    </main>
  )
}
