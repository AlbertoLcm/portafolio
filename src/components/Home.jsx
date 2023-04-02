import { Fragment } from "react";
import { H1, H2, P, Main, Body, Section, Card } from './Elements'
import { ButtonPrimary, ButtonSecundary } from './Buttons'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect'
import me from '../assets/images/me.svg'
import Header from './Header'
import icons from '../assets/Icons.svg'

function Home() {
  return (
    <Fragment>
      <Header />
      <img src={icons} alt="icons" className={styles.svg__icons} />
      <Main>
        <Body>
          <section className={styles.home}>
            <H1>
              Hola, <br /> Soy <span className={styles.tittle__color}>Alberto</span>,
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

          <section id='acerca_de_mi' className={styles.about}>
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

            <div className={styles.about__image}>
              <div className={styles.image__container}>
                <img src={me} alt="me" title="me" className={styles.image} />
              </div>
            </div>
          </section>

          <section id='projects' className={styles.projects}>
            <H2>Proyectos.</H2>
            <Section>
              <section className={styles.cards__container}>
                <Card green={true}>Hola</Card>
                <Card blue={true}>Hola</Card>
                <Card orange={true}>Hola</Card>
              </section>
            </Section>
          </section>

          <section id='skills' className={styles.skills}>
            <section className={styles.skills__content}>
              <div>
                <H2>Habilidades</H2>
              </div>
              <div>
                Front-End
                <progress max="100" value="70"> 70% </progress>
                Back End
                <progress max="100" value="60"> 60% </progress>
                React Js
                <progress max="100" value="70"> 70% </progress>
                Node Js
                <progress max="100" value="50"> 50% </progress>
              </div>
            </section>
          </section>

          <section id='contacto' className={styles.contact}>
            <H2>Contacto</H2>
          </section>
        </Body>
      </Main>
    </Fragment>
  );
}

export default Home;