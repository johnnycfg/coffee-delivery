import { ReactNode } from 'react'
import { RoundedIconContainer } from './styles'

interface RoundedIconProps {
  backgroundColor: string
  children: ReactNode
  iconColor?: string
}

export function RoundedIcon({
  children,
  iconColor,
  backgroundColor,
}: RoundedIconProps) {
  return (
    <RoundedIconContainer
      backgroundColor={backgroundColor}
      iconColor={iconColor}
    >
      {children}
    </RoundedIconContainer>
  )
}
