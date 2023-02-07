import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AddressSection,
  CompleteOrderSection,
  Input,
  PaymentSection,
  RadioGroupContainer,
} from './styles'

export function Checkout() {
  return (
    <main>
      <form>
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
      </form>
    </main>
  )
}
