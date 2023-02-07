import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  div {
    display: flex;
    gap: 0.875rem;
  }
`
export const LocationButton = styled.button`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;

  padding: 0.5rem;
  background: ${(props) => props.theme['purple-light']};
  border: 0;
  border-radius: 6px;

  color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
  }
`

export const CartButton = styled.button`
  width: 48px;
  height: 48px;
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  border: 0;
  border-radius: 6px;

  color: ${(props) => props.theme['yellow-dark']};
  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
  }
`
