import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Home from './components/Home'
import colors from './colors'
import './styles/App.css'

function App() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  return (
    <ThemeProvider theme={colors[theme]}>
      <meta name="theme-color" content={theme === 'dark' ? '#011A30' : '#F3F3F3'} />
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App