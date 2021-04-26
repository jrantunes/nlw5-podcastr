import Switch from 'react-switch'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import { useContext } from 'react'

import { ThemeContext } from 'styled-components'

import { Container } from './styles'

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  const { primary } = useContext(ThemeContext)

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  })

  return (
    <Container isDarkMode={isDarkMode}>
      <img
        src={isDarkMode ? '/logo-light.svg' : '/logo-dark.svg'}
        alt="Podcastr"
      />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
      <Switch 
        onChange={toggleTheme}
        checked={isDarkMode}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={primary}
        onHandleColor={'#333'}
        offHandleColor={primary}
      />
    </Container>
  )
}