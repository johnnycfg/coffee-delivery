import styled from 'styled-components'

export const OrderContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 5rem 0;

  & > div {
    h1 {
      font-size: 2rem;
      font-family: 'Baloo 2', sans-serif;
      color: ${(props) => props.theme['yellow-dark']};
      font-weight: 800;
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
    }
  }
`
export const OrderInfoSection = styled.section`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  img {
    max-height: 293px;
    object-fit: contain;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.background};
  border-radius: 6px 36px;

  padding: 2.5rem;
  position: relative;

  &::before {
    content: '';
    ${(props) => {
      return `background-image: linear-gradient(to right, ${props.theme.yellow}, ${props.theme.purple});`
    }}
    border-radius: 7px 37px;
    height: calc(100% + 2px);
    left: -2px;
    top: -2px;
    padding: 1px;
    position: absolute;
    width: calc(100% + 2px);
    z-index: -1;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      list-style-type: none;
      color: ${(props) => props.theme['base-text']};

      span span {
        font-weight: 700;
      }
    }
  }
`
