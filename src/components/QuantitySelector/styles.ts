import styled from 'styled-components'

export const QuantitySelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: fit-content;
  height: 38px;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  color: ${(props) => props.theme['base-title']};

  button {
    display: flex;
    align-items: center;

    border: 0;
    background-color: transparent;

    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};

      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`
