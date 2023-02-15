import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { QuantitySelector } from '../../components/QuantitySelector'
import { CartContext } from '../../contexts/CartContext'
import { api } from '../../services/api'
import { Product } from '../Home'
import {
  AddressSection,
  CheckoutForm,
  CompleteOrderSection,
  ConfirmOrderButton,
  Divider,
  FormGroup,
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
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Caption } from '../../components/Caption'
import { useTheme } from 'styled-components'
import { useNavigate } from 'react-router-dom'

const DELIVERY_FEE = 3.5

const newOrderFormValidationSchema = zod.object({
  zipCode: zod
    .string({ required_error: 'O CEP é obrigatório' })
    .min(8, 'Informe o CEP')
    .max(9, 'O CEP não deve ter mais que 9 caracteres'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.number({ invalid_type_error: 'Informe um número válido' }),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(2, 'Informe o estado'),
  paymentMethod: zod.enum(['creditCard', 'debitCard', 'money'], {
    invalid_type_error: 'Escolha uma forma de pagamento',
  }),
  products: zod.array(
    zod.object({
      id: zod.string().min(1),
      amount: zod.number().positive(),
    }),
  ),
  totalPrice: zod.number().positive(),
  deliveryFee: zod.number().positive(),
})

type newOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const theme = useTheme()
  const nagivate = useNavigate()
  const { cart, removeProductFromCart, updateProductAmountInTheCart } =
    useContext(CartContext)
  const [products, setProducts] = useState<Product[]>([])

  const { register, setValue, handleSubmit, formState } =
    useForm<newOrderFormData>({
      resolver: zodResolver(newOrderFormValidationSchema),
      defaultValues: {
        products: cart,
        number: 0,
      },
    })

  const { errors } = formState

  async function getProducts() {
    const res = await api.get<Product[]>(`/products`).then((res) => res)

    setProducts(res.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const detailedCart = cart.map((cartItem) => {
    const product = products.find((product) => product.id === cartItem.id)

    const totalPrice = cartItem.amount * (product?.price ?? 0)

    return {
      id: product?.id,
      name: product?.name,
      image: product?.image,
      amount: cartItem.amount,
      availableAmount: product?.availableAmount,
      totalPrice,
    }
  })

  const reducedCartPrice = detailedCart.reduce((acc, cur) => {
    return acc + cur.totalPrice
  }, 0)

  const totalPriceWithDeliveryFee = reducedCartPrice + DELIVERY_FEE

  useEffect(() => {
    setValue('products', cart)
    setValue('totalPrice', reducedCartPrice)
    setValue('deliveryFee', DELIVERY_FEE)
  }, [cart, reducedCartPrice, setValue])

  function onSubmit(data: newOrderFormData) {
    const stateJSON = JSON.stringify(data)

    localStorage.setItem('@coffee-delivery:order-state-1.0.0', stateJSON)

    nagivate('/order')
  }

  return (
    <main>
      <CheckoutForm onSubmit={handleSubmit(onSubmit)}>
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

            <FormGroup>
              <Input
                placeholder="CEP"
                style={{ width: '228px' }}
                {...register('zipCode')}
                error={!!errors.zipCode}
              />
              {errors.zipCode?.message && (
                <Caption
                  description={errors.zipCode.message}
                  iconColor={theme.red}
                  textColor={theme.red}
                />
              )}
            </FormGroup>

            <FormGroup fullWidth>
              <Input
                placeholder="Rua"
                fullWidth
                {...register('street')}
                error={!!errors.street}
              />
              {errors.street?.message && (
                <Caption
                  description={errors.street.message}
                  iconColor={theme.red}
                  textColor={theme.red}
                />
              )}
            </FormGroup>

            <div>
              <FormGroup>
                <Input
                  placeholder="Número"
                  {...register('number', { valueAsNumber: true })}
                  error={!!errors.number}
                />
                {errors.number?.message && (
                  <Caption
                    description={errors.number.message}
                    iconColor={theme.red}
                    textColor={theme.red}
                  />
                )}
              </FormGroup>
              <FormGroup fullWidth>
                <Input
                  placeholder="Complemento"
                  fullWidth
                  {...register('complement')}
                  error={!!errors.complement}
                />
                {errors.complement?.message && (
                  <Caption
                    description={errors.complement.message}
                    iconColor={theme.red}
                    textColor={theme.red}
                  />
                )}
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <Input
                  placeholder="Bairro"
                  {...register('neighborhood')}
                  error={!!errors.neighborhood}
                />
                {errors.neighborhood?.message && (
                  <Caption
                    description={errors.neighborhood.message}
                    iconColor={theme.red}
                    textColor={theme.red}
                  />
                )}
              </FormGroup>
              <FormGroup fullWidth>
                <Input
                  placeholder="Cidade"
                  fullWidth
                  {...register('city')}
                  error={!!errors.city}
                />
                {errors.city?.message && (
                  <Caption
                    description={errors.city.message}
                    iconColor={theme.red}
                    textColor={theme.red}
                  />
                )}
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder="UF"
                  style={{ width: '60px' }}
                  {...register('state')}
                  error={!!errors.state}
                />
                {errors.state?.message && (
                  <Caption
                    description={errors.state.message}
                    iconColor={theme.red}
                    textColor={theme.red}
                  />
                )}
              </FormGroup>
            </div>
          </AddressSection>

          <PaymentSection error={!!errors.paymentMethod}>
            {errors.paymentMethod?.message && (
              <Caption
                description={errors.paymentMethod.message}
                iconColor={theme.red}
                textColor={theme.red}
              />
            )}
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
                value="creditCard"
                id="creditCard"
                {...register('paymentMethod')}
              />
              <label htmlFor="creditCard">
                <CreditCard />
                CARTÃO DE CRÉDITO
              </label>

              <input
                type="radio"
                value="debitCard"
                id="debitCard"
                {...register('paymentMethod')}
              />
              <label htmlFor="debitCard">
                <Bank />
                CARTÃO DE DÉBITO
              </label>

              <input
                type="radio"
                value="money"
                id="money"
                {...register('paymentMethod')}
              />
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
              {detailedCart.map((cartItem) => {
                return (
                  <>
                    <OrderItem key={cartItem.id}>
                      <img
                        src={cartItem.image}
                        alt="xicara de café de café expresso tradicional"
                      />
                      <div>
                        <h2>{cartItem.name}</h2>
                        <OrderItemActions>
                          <QuantitySelector
                            initialAmount={cartItem.amount}
                            limitAmount={cartItem.availableAmount ?? 0}
                            onChange={(value) =>
                              updateProductAmountInTheCart({
                                id: cartItem.id!,
                                amount: value,
                              })
                            }
                          />
                          <RemoveItemButton
                            type="button"
                            onClick={() => removeProductFromCart(cartItem.id!)}
                          >
                            <Trash /> REMOVER
                          </RemoveItemButton>
                        </OrderItemActions>
                      </div>
                      <span>R$ {cartItem.totalPrice.toFixed(2)}</span>
                    </OrderItem>

                    <Divider />
                  </>
                )
              })}

              <OrderSummary>
                <div>
                  <span>Total de itens</span>
                  <span>R$ {reducedCartPrice.toFixed(2)}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ {DELIVERY_FEE.toFixed(2)}</span>
                </div>
                <div>
                  <span>Total</span>
                  <span>R$ {totalPriceWithDeliveryFee.toFixed(2)}</span>
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
