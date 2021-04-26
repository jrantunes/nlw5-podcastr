import styled from 'styled-components'

interface ContainerProps {
  isDarkMode: boolean;
}

export const Container = styled.header<ContainerProps>`
  background: ${({ theme }) => theme.secondary};
  height: 6.5rem;
 
  display: flex;
  align-items: center;

  padding: 2rem 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  transition: all 0.25s linear;

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid ${({ theme, isDarkMode }) => isDarkMode 
      ? '#484f5a'
      : theme.border
    };

    transition: border-color 0.25s linear;
  }

  span {
    margin-left: auto;
    margin-right: 2rem;
    text-transform: capitalize;
  }

  @media(max-width: 620px) {
    span {
      display: none;
    }
  }

  @media(max-width: 500px) {
    p {
      display: none;
    }

    justify-content: center;
    gap: 2rem;
  }
`