import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Badge } from '../../../../components/Badge'
import { QuantitySelector } from '../../../../components/QuantitySelector'
import { CartContext } from '../../../../contexts/CartContext'
import {
  AddToCartButton,
  BuySection,
  BuySectionActions,
  CoffeeCardContainer,
  TagsContainer,
} from './styles'

interface ProductProps {
  data: {
    id: string
    name: string
    description: string
    image: string
    price: number
    availableAmount: number
    tags: string[]
  }
}

export function CoffeeCard({ data }: ProductProps) {
  const { id, name, description, image, price, availableAmount, tags } = data
  const [amount, setAmount] = useState<number>(0)
  const { addProductToCart } = useContext(CartContext)

  function addToCart(id: string, amount: number) {
    const newProduct = {
      id,
      amount,
    }

    addProductToCart(newProduct)
    setAmount(1)
  }

  return (
    <CoffeeCardContainer>
      <img src={image} alt={description} />

      <TagsContainer>
        {tags.map((tag) => (
          <Badge key={tag} colorScheme="yellow">
            {tag}
          </Badge>
        ))}
      </TagsContainer>

      <h1>{name}</h1>
      <p>{description}</p>

      <BuySection>
        <span>
          <span>R$</span> {price}
        </span>

        <BuySectionActions>
          <QuantitySelector
            initialAmount={1}
            limitAmount={availableAmount}
            onChange={(value) => setAmount(value)}
          />
          <AddToCartButton onClick={() => addToCart(id, amount)}>
            <ShoppingCartSimple weight="fill" />
          </AddToCartButton>
        </BuySectionActions>
      </BuySection>
    </CoffeeCardContainer>
  )
}
