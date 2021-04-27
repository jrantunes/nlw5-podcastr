import { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Player } from '../components/Player'

import { PlayerContextProvider } from '../hooks/usePlayer'
import { useTheme } from '../hooks/useTheme'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/global'
import { lightTheme, darkTheme } from '../styles/themes'

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, isDarkMode, toggleTheme } = useTheme()

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <PlayerContextProvider>
        <GlobalStyle />
        <div className='wrapper'>
          <main>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
            <Component {...pageProps} isDarkMode={isDarkMode} />
          </main>
          <Player isDarkMode={isDarkMode} />
        </div>
      </PlayerContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
