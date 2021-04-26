import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gray-200: #AFB2B1;

    --green-500: #04D361;
    
    --purple-300: #9F75FF;
    --purple-400: #9164FA; 
    --purple-500: #8257E5;
    --purple-800: #6F48C9;
  }

  @media(max-width: 1450px) {
    .wrapper {
      flex-direction: column;
      position: relative;
    }
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 940px) {
    html {
      font-size: 87.5%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 81.25%;
    }
  }

  @media(max-width: 680px) {
    html {
      font-size: 75%;
    }
  }

  @media(max-width: 580px) {
    html {
      font-size: 68.75%;
    }
  }

  @media(max-width: 500px) {
    html {
      font-size: 62.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.body}; 

    transition: all 0.25s linear;
  }

  body, input, textarea, button {
    font: 500 1rem Inter, sans-serif;
    color: ${({ theme }) => theme.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: ${({ theme }) => theme.title};
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  .wrapper {
    display: flex;

    main {
      flex: 1;
    }
  }
`