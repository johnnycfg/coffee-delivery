import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { CoffeeCard } from './components/CoffeeCard'
import { IntroSection } from './components/IntroSection'
import { CoffeeList, CoffeeListContainer, HomeContainer } from './styles'

export interface Product {
  id: string
  name: string
  description: string
  image: string
  price: number
  availableAmount: number
  tags: string[]
}

export function Home() {
  const [products, setProducts] = useState<Product[]>([])

  const availableProducts = products.filter(
    (product) => product.availableAmount > 0,
  )

  useEffect(() => {
    api.get('/products').then((res) => setProducts(res.data))
  }, [])

  return (
    <HomeContainer>
      <IntroSection />

      <CoffeeListContainer>
        <h1>Nossos cafés</h1>

        <CoffeeList>
          {availableProducts.map((product) => {
            return <CoffeeCard key={product.id} data={product} />
          })}
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
