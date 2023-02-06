import { ReactNode } from 'react'
import { BadgeContainer } from './styles'

interface BadgeProps {
  children: ReactNode
  colorScheme: 'yellow'
}

export function Badge({ children, colorScheme }: BadgeProps) {
  return <BadgeContainer colorScheme={colorScheme}>{children}</BadgeContainer>
}
