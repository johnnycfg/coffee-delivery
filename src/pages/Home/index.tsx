import { Header } from '../../components/Header'
import { CoffeeCard } from './components/CoffeeCard'
import { IntroSection } from './components/IntroSection'
import { CoffeeList, CoffeeListContainer, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <IntroSection />

      <CoffeeListContainer>
        <h1>Nossos cafés</h1>

        <CoffeeList>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
