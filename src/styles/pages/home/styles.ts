import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`

export const LatestEpisodes = styled.section`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    li {
      background: ${({ theme }) => theme.secondary};
      border: 1px solid ${({ theme }) => theme.border};
      padding: 1.25rem;
      border-radius: 1.25rem;
      position: relative;

      display: flex;
      align-items: center;

      transition: all 0.25s linear;

      img {
        width: 6rem;
        height: 6rem;
        border-radius: 1rem;

        @media(max-width: 600px) {
          width: 0;
          height: 0;
          border-radius: 0;
        }
      }
      
      button {
        position: absolute;
        right: 2rem;
        bottom: 2rem;

        width: 2.5rem;
        height: 2.5rem;
        background: ${({ theme }) => theme.secondary};
        border: 1px solid ${({ theme }) => theme.border};
        border-radius: 0.675rem;
        font-size: 0;

        transition: all 0.25s linear;
        
        img {
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover {
          filter: brightness(0.95);
        }
      }
    }

    @media(max-width: 1719px) {
      display: flex;
      flex-direction: column;
    }

    @media(max-width: 1447px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    @media(max-width: 1255px) {
      display: flex;
      flex-direction: column;
    }

    
  }
`

export const EpisodeDetails = styled.div`
  flex: 1;
  margin-left: 1rem;

  a {
    display: block;
    color: ${({ theme }) => theme.title};
    font-family: Lexend, sans-serif;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.4rem;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 0.875rem;

    &:last-child {
      margin-left: 0.5rem;
      padding-left: 0.5rem;
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

  @media(max-width: 480px) {
    margin: 0;

    display: grid;
    grid-template-columns: 85% 15%;
    p,
    span {
      display: none;
    }
  }
`

export const AllEpisodes = styled.section`
  padding-bottom: 2rem;

  table {
    width: 100%;

    th, td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.border};

      transition: border-color 0.25s linear;
    }

    th {
      color: var(--gray-200);
      text-transform: uppercase;
      font: 500 0.75rem Lexend, sans-serif;
      text-align: left;
    }

    td {
      font-size: 0.875rem;
      
      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.5rem;
      }

      a {
        color: ${({ theme }) => theme.title};
        font-family: Lexend, sans-serif;
        font-weight: 600;
        text-decoration: none;
        line-height: 1.4rem;
        font-size: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }

      button {
        width: 2rem;
        height: 2rem;
        background: ${({ theme }) => theme.secondary};
        border: 1px solid ${({ theme }) => theme.border};
        border-radius: 0.5rem;
        font-size: 0;

        transition: all 0.25s linear;
        
        img {
          width: 1.25rem;
          height: 1.25rem;
        }

        &:hover {
          filter: brightness(0.95);
        }
      }
    }
  }

  @media(max-width: 1450px) {
   margin-bottom: 20vh;
  }

  @media(max-width: 880px) {
    table {
      td:nth-child(3),
      th:nth-child(3) {
        display: none;
      }
    }
  }

  @media(max-width: 640px) {
    table {
      td:nth-child(4),
      th:nth-child(4) {
        display: none;
      }

      td:nth-child(2) {
        max-width: 270px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  @media(max-width: 582px) {
    table {
      td:nth-child(1),
      th:nth-child(1),
      td:nth-child(5),
      th:nth-child(5) {
        display: none;
      }

      td:nth-child(2) {
        max-width: 207px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`