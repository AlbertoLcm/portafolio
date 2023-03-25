import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Home from './components/Home'
import colors from './colors'
import './App.css'

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={colors[theme]}>
      <GlobalStyles />
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App