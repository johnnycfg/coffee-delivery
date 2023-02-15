import styled from 'styled-components'

interface CaptionProps {
  textColor?: string
  iconColor?: string
}

export const CaptionContainer = styled.div<CaptionProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.iconColor || props.theme['base-subtitle']};
    width: 1rem;
    height: 1rem;
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.textColor || props.theme['base-text']};
  }
`
