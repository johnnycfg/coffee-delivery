import styled from 'styled-components'

interface RoundedIconProps {
  backgroundColor: string
  iconColor?: string
}

export const RoundedIconContainer = styled.div<RoundedIconProps>`
  background: ${(props) => props.backgroundColor};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.iconColor ?? props.theme.background};
  }
`
