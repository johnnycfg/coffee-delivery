import { Minus, Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { QuantitySelectorContainer } from './styles'

interface QuantitySelectorProps {
  initialAmount: number
  limitAmount: number
  onChange?: (value: number, action: string) => void
}

export function QuantitySelector({
  initialAmount = 0,
  limitAmount,
  onChange,
}: QuantitySelectorProps) {
  const [amount, setAmount] = useState<number>(initialAmount)
  const [lastAction, setLastAction] = useState<'decrease' | 'increase'>(
    'increase',
  )

  const decreaseButtonDisabled = amount === 0 || limitAmount === 0
  const increaseButtonDisabled = amount >= limitAmount

  useEffect(() => {
    onChangeAmount(amount, lastAction)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount])

  function decreaseAmount() {
    if (amount === 0) return

    setAmount((state) => state - 1)
    setLastAction('decrease')
  }

  function increaseAmount() {
    if (amount >= limitAmount) return

    setAmount((state) => state + 1)
    setLastAction('increase')
  }

  function onChangeAmount(value: number, action: string) {
    if (onChange) {
      onChange(value, action)
    }
  }

  return (
    <QuantitySelectorContainer>
      <button
        type="button"
        onClick={decreaseAmount}
        disabled={decreaseButtonDisabled}
      >
        <Minus weight="bold" />
      </button>
      {amount}
      <button
        type="button"
        onClick={increaseAmount}
        disabled={increaseButtonDisabled}
      >
        <Plus weight="bold" />
      </button>
    </QuantitySelectorContainer>
  )
}
