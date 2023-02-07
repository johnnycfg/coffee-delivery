import styled from 'styled-components'

export const CompleteOrderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 640px;
  width: 100%;

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

  header {
    display: flex;
    gap: 0.5rem;

    div {
      display: block;
    }

    svg {
      color: ${(props) => props.theme['yellow-dark']};
      width: 1.375rem;
      height: 1.375rem;
    }

    h2 {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`

interface InputProps {
  fullWidth?: boolean
}

export const Input = styled.input<InputProps>`
  flex-grow: ${(props) => (props.fullWidth ? '1' : '0')};
  background: ${(props) => props.theme['base-input']};
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 0.25rem;

  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 1.2;
  }
`

export const PaymentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  header {
    display: flex;
    gap: 0.5rem;

    div {
      display: block;
    }

    svg {
      color: ${(props) => props.theme.purple};
      width: 1.375rem;
      height: 1.375rem;
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
  gap: 0.75rem;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  label {
    display: flex;
    flex: 1;
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
