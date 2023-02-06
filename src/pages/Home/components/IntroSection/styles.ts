import styled from 'styled-components'

export const IntroSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  padding: 6rem 10rem;

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
`
interface RoundedIconProps {
  backgroundColor: string
  iconColor?: string
}

export const RoundedIcon = styled.div<RoundedIconProps>`
  background: ${(props) => props.backgroundColor};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.iconColor ?? props.theme.background};
  }
`