import { Info } from 'phosphor-react'
import { ReactNode } from 'react'
import { CaptionContainer } from './styles'

interface CaptionProps {
  icon?: ReactNode
  iconColor?: string
  description: string
  textColor?: string
}

export function Caption({
  icon,
  description,
  iconColor,
  textColor,
}: CaptionProps) {
  return (
    <CaptionContainer
      aria-describedby="description"
      iconColor={iconColor}
      textColor={textColor}
    >
      {icon || <Info weight="fill" />}
      <span id="description">{description}</span>
    </CaptionContainer>
  )
}
