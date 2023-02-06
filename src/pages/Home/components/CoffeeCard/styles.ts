import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  min-width: 16rem;
  width: 16rem;
  min-height: 19.3rem;
  height: 19.3rem;
  padding: 0 1.25rem 1.25rem 1.25rem;
  background: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  text-align: center;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
  }
`

export const BuySection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  & > span {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;

    span {
      font-size: 0.875rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }
  }
`

export const BuySectionActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const QuantitySelector = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 38px;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  color: ${(props) => props.theme['base-title']};

  button {
    display: flex;
    align-items: center;

    border: 0;
    background-color: transparent;

    svg {
      color: ${(props) => props.theme.purple};
      cursor: pointer;

      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`

export const AddToCartButton = styled.button`
  width: 38px;
  height: 38px;
  padding: 0.5rem;
  background: ${(props) => props.theme['purple-dark']};
  border: 0;
  border-radius: 6px;

  color: ${(props) => props.theme['base-card']};
  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
