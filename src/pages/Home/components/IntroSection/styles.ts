import styled from 'styled-components'

export const IntroSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  padding: 6rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.875rem 2.5rem;

    list-style-type: none;

    color: ${(props) => props.theme['base-text']};

    li {
      display: inline-flex;
      flex: 1;
      min-width: 45%;
      align-items: center;
      gap: 0.875rem;
    }
  }

  img {
    max-width: 476px;
    width: 100%;
    object-fit: contain;
  }
`
