import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  img {
    cursor: pointer;
  }

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

  @media screen and (max-width: 380px) {
    display: none;
  }
`

interface CartButtonProps {
  badgeContent?: number
}

export const CartButton = styled.button<CartButtonProps>`
  width: 48px;
  height: 48px;
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  border: 0;
  border-radius: 6px;
  position: relative;

  color: ${(props) => props.theme['yellow-dark']};
  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
  }

  &::after {
    content: '${(props) => props.badgeContent}';
    display: ${(props) => (props.badgeContent ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;

    position: absolute;
    top: -8px;
    right: -10px;
  }
`
