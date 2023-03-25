import { useState } from 'react'
import { H1, H2, P, Section, Sector, Main, Body } from './components/Elements'
import { ButtonPrimary, ButtonSecundary } from './components/Buttons'
import { ThemeProvider } from 'styled-components'
import styles from './styles/Home.module.css'
import image from './assets/images/test.png'
import Typewriter from 'typewriter-effect'
import Header from './components/Header'
import colors from './colors'
import GlobalStyles from './styles/GlobalStyles'
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

        <Header />

        <Main>
          <Body>
            <section className={styles.home}>
              <H1>
                <p className={styles.title}>Hola,</p>
                <p className={styles.title}>Soy <span className={styles.tittle__color}>Alberto</span>,</p>
                <div className={styles.title}>
                  <Typewriter
                    options={{
                      strings: ['Desarrollador Web.', 'Web developer.'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </H1>
              <P gray={true}>Front-End y Back-End Developer</P>
              <div className={styles.buttons__container}>
                <ButtonPrimary> Contactame </ButtonPrimary>
                <ButtonSecundary> CV </ButtonSecundary>
              </div>
            </section>

            <Sector id='acerca_de_mi' className={styles.about}>
              <H2>Acerca de mí</H2>
              <P>
                Soy un desarrollador frontend apasionado por la creación de
                experiencias web intuitivas y atractivas. Mientras continúo
                desarrollando mis habilidades en el frontend, estoy
                emocionado de explorar nuevas oportunidades en el backend
                para poder ofrecer soluciones web más completas y efectivas.
              </P>
            </Sector>

            <Sector id='proyectos'>
              <Section>Probando</Section>
            </Sector>

            <Sector id='habilidades'>
              <h2>habilidades</h2>
            </Sector>

            <Sector id='testimonios'>
              <h2>Testimonios</h2>
            </Sector>

            <Sector id='contacto'>
              <h2>Contacto</h2>
            </Sector>
          </Body>
        </Main>
      </div>
    </ThemeProvider>
  )
}

export default App