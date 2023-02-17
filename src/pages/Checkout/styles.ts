import styled, { css } from 'styled-components'

export const CheckoutForm = styled.form`
  display: flex;
  gap: 2rem;

  margin: 2.5rem 0;

  @media screen and (max-width: 940px) {
    flex-direction: column;
  }
`

export const CompleteOrderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 640px;
  width: 100%;

  @media screen and (max-width: 940px) {
    max-width: 100%;
  }

  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
  }
`

export const AddressSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;

    div {
      display: block;
    }

    svg {
      color: ${(props) => props.theme['yellow-dark']};
      min-width: 1.375rem;
      min-height: 1.375rem;
    }

    h2 {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`
interface FormGroupProps {
  fullWidth?: boolean
}

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-grow: ${(props) => (props.fullWidth ? '1' : '0')};
  flex-direction: column;
  height: fit-content;
  gap: 0.5rem;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

interface InputProps {
  fullWidth?: boolean
  error?: boolean
}

export const Input = styled.input<InputProps>`
  flex-grow: ${(props) => (props.fullWidth ? '1' : '0')};
  background: ${(props) => props.theme['base-input']};
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 0.25rem;

  color: ${(props) => props.theme['base-text']};

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 1.2;
  }

  ${(props) => {
    if (props.error) {
      return css`
        box-shadow: 0 0 0 2px ${(props) => props.theme.red};
        &:focus {
          outline: 0;
          box-shadow: 0 0 0 2px ${(props) => props.theme.red};
        }
      `
    }
  }}
`

interface PaymentSectionProps {
  error?: boolean
}

export const PaymentSection = styled.div<PaymentSectionProps>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  ${(props) => {
    if (props.error) {
      return css`
        box-shadow: 0 0 0 2px ${(props) => props.theme.red};
      `
    }
  }}

  header {
    display: flex;
    gap: 0.5rem;

    div {
      display: block;
    }

    svg {
      color: ${(props) => props.theme.purple};
      min-width: 1.375rem;
      min-height: 1.375rem;
    }

    h2 {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const RadioGroupContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;

  input[type='radio'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  input[type='radio']:checked + label {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  input[type='radio']:focus + label {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  label {
    display: flex;
    min-width: 11.25rem;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    cursor: pointer;
    color: ${(props) => props.theme['base-text']};

    font-size: 0.75rem;

    svg {
      color: ${(props) => props.theme.purple};
      width: 1rem;
      height: 1rem;
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const SelectedCoffeeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 448px;
  width: 100%;

  @media screen and (max-width: 940px) {
    max-width: 100%;
  }

  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
  }
`

export const OrderSummarySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  @media screen and (max-width: 470px) {
    padding: 2.5rem 1rem;
  }
`

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  max-width: 23rem;

  padding: 0.5rem 0.25rem;

  @media screen and (max-width: 380px) {
    gap: 1rem;
  }

  img {
    width: 4rem;
    object-fit: contain;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  span {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
`

export const OrderItemActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  border: 0;

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 1.2;

  cursor: pointer;

  transition: background 0.2s;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;

    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};

    span {
      &:last-of-type {
        font-size: 1rem;
      }
    }

    &:last-of-type {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ConfirmOrderButton = styled.button`
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-subtitle']};
    cursor: not-allowed;
  }
`

export const Divider = styled.hr`
  height: 1px;
  background-color: ${(props) => props.theme['base-hover']};
  border: 0;
`

export const EmptyCartContainer = styled.div`
  display: flex;
  gap: 3.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  button {
    border: 0;
    border-radius: 6px;
    padding: 0.75rem 0.5rem;
    width: 100%;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;

    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }

  img {
    max-width: 400px;
    width: 100%;
    object-fit: contain;
  }
`
