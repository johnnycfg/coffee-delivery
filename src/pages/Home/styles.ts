import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`

export const CoffeeListContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  padding: 2rem 10rem;

  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }
`

export const CoffeeList = styled.div`
  display: flex;
  gap: 2.5rem 2rem;
  flex-wrap: wrap;
`
