import styled from 'styled-components'

export const Container = styled.div`
  max-width: 45rem;
  padding: 3rem 2rem;
  margin: 0 auto;

  .description {
    margin-top: 2rem;
    line-height: 1.675rem;
    color: ${({ theme }) => theme.title};

    p {
      margin: 1.5rem 0;
    }
  }

  @media(max-width: 1450px) {
    margin-bottom: 20vh;
  }
`

export const ThumbnailContainer = styled.div`
  position: relative;

  img {
    border-radius: 1rem;
  }

  button {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    border: 0;
    position: absolute;
    z-index: 5;
    font-size: 0;
    
    transition: filter 0.2s;

    &:first-child {
      left: 0;
      top: 50%;
      background: var(--purple-500);
      transform: translate(-50%, -50%);
    }

    &:last-child {
      right: 0;
      top: 50%;
      background: var(--green-500);
      transform: translate(50%, -50%);
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Header = styled.header`
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  transition: border-color 0.25s linear;

  h1 {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }

  span {
    display: inline-block;
    font-size: 0.875rem;

    & + span {
      margin-left: 1rem;
      padding-left: 1rem;
      position: relative;

      &::before {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background: #ddd;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`