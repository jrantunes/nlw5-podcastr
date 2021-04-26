import styled from 'styled-components'

interface ContainerProps {
  isDarkMode: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 3rem 4rem;
  width: 26.5rem;
  height: 100vh;

  background: ${({ theme }) => theme.primary};
  color: ${({ theme, isDarkMode }) => isDarkMode ? '#fff' : theme.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  transition: all 0.25s linear;

  header {
    display: flex;
    align-items: center;
    gap: 1rem; /* new property - space between header items */
  }

  strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }

  footer {
    align-self: stretch;

    &.empty div {
      opacity: 0.5;
    }
  }

  @media(max-width: 1450px) {
    & {
      padding: 0 2rem 0 0;
      width: 100%;
      height: 20vh;
      position: fixed;
      bottom: 0;
      overflow: hidden;

      flex-direction: row;
      align-items: flex-start;

      header {
        display: none;
      }

      > div {
        width: 10%;
        height: 100%;

        display: flex;
        margin-right: 1rem;

        img {
          border-radius: 0 1.5rem 1.5rem 0;
        }

        strong {
          font-size: 0.875rem;
          position: absolute;
          bottom: 70%;
          left: calc(10% + 1rem);
        }

        span {
          font-size: 0.75rem;
          position: absolute;
          top: 60%;
          left: calc(10% + 1rem);
        }
      }

      footer {
        flex: 1;

        display: flex;
        gap: 2rem;

        div:first-child {
          flex: 1;
        }

        div:last-child {
          margin: 0;
        }
      }
    }
  }

  @media(min-width: 940px) {
    footer {
      strong {
        display: none;
      }
    }
  }

  @media(max-width: 940px) {
    padding: 0;

    > div {
      display: none;

      img {
        height: 0;
        width: 0;
      }
    }

    footer {
      padding: 0 2rem 1rem;
      width: 100%;

      justify-content: center;
      flex-direction: column;
      gap: 0.75rem;

      text-align: center;

      strong {
        font-size: 0.875rem;
        margin-bottom: 0.25rem;
      }
    }
  }
`

export const EmptyPlayer = styled.div`
  width: 100%;
  height: 20rem;
  border: 1.5px dashed var(--purple-300);
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.linear};
  
  padding: 4rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 1450px) {
    & {
      border-radius: 0 1.5rem 1.5rem 0;

      strong {
        display: none;
      }
    }
  }
  
`

export const CurrentEpisode = styled.div`
  text-align: center;

  img {
    border-radius: 1.5rem;
  }

  strong {
    display: block;
    margin-top: 2rem;
    font: 600 1.25rem Lexend, sans-serif;
    line-height: 1.75rem;
  }

  span {
    display: block;
    margin-top: 1rem;
    opacity: 0.6;
    line-height: 1.5rem;
  }
`

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }

  .slider {
    flex: 1;

    .empty-slider {
      width: 100%;
      height: 4px;
      background: var(--purple-300);
      border-radius: 2px;
    }
  }

  @media(min-width: 940px) {
    flex: 1
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  button {
    background: transparent;
    border: 0;
    font-size: 0;

    transition: filter 0.2s;

    &:disabled {
      cursor: default;
      opacity: 0.5;
    }

    &:hover:not(:disabled) {
      filter: brightness(0.7);
    }

    &.active {
      filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
    }

    &.active:hover {
      filter: brightness(0.6) invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
    }

    &.play-button {
      width: 4rem;
      height: 4rem;
      border-radius: 1rem;
      background: var(--purple-400);

      &:hover:not(:disabled) {
        filter: brightness(0.95);
      }
    }
  }
`