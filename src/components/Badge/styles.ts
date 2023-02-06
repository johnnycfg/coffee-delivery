import styled from 'styled-components'

const COLOR_SCHEME = {
  yellow: {
    textColor: 'yellow-dark',
    backgroundColor: 'yellow-light',
  },
} as const

interface BadgeContainerProps {
  colorScheme: keyof typeof COLOR_SCHEME
}

export const BadgeContainer = styled.span<BadgeContainerProps>`
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  background-color: ${(props) =>
    props.theme[COLOR_SCHEME[props.colorScheme].backgroundColor]};
  color: ${(props) => props.theme[COLOR_SCHEME[props.colorScheme].textColor]};
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
`
