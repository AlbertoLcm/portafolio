import { Fragment } from "react";
import { H1, H2, P, Section, Sector, Main, Body } from './Elements'
import { ButtonPrimary, ButtonSecundary } from './Buttons'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect'
import me from '../assets/images/me.jpg'
import Header from './Header'

function Home() {
  return (
    <Fragment>
      <Header />
      <Main>
        <Body>
          <section className={styles.home}>
            <H1>
              Hola, <br /> Soy <span className={styles.tittle__color}> Alberto</span>,
              <Typewriter
                options={{
                  strings: ['Desarrollador Web.', 'Web developer.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </H1>
            <P gray={true}>Front-End y Back-End Developer</P>
            <div className={styles.buttons__container}>
              <ButtonPrimary> Contactame </ButtonPrimary>
              <ButtonSecundary> CV </ButtonSecundary>
            </div>
          </section>

           <section id='about' className={styles.about}>
            <div className={styles.about__description}>
              <H2>Acerca de mí.</H2>
              <P>
                Soy un desarrollador frontend apasionado por la creación de
                experiencias web intuitivas y atractivas. Mientras continúo
                desarrollando mis habilidades en el frontend, estoy
                emocionado de explorar nuevas oportunidades en el backend
                para poder ofrecer soluciones web más completas y efectivas.
              </P>
            </div>
            <div className={styles.image__container}>
              <img src={me} alt="me" title="me" className={styles.image} />
            </div>
          </section>
          
          {/* 

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
          </Sector> */}
        </Body>
      </Main>
    </Fragment>
  );
}

export default Home;