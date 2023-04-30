import { Fragment } from "react";
import { H1, H2, P, Main, Body, Section, Card, Other } from "./Elements";
import { ButtonPrimary, ButtonSecundary } from "./Buttons";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";
import me from "../assets/images/me.svg";
import Header from "./Header";
import icons from "../assets/Icons.svg";
import { TextField } from "@mui/material";
import marker from "../assets/marker.svg";

function Home() {
  return (
    <Fragment>
      <Header />
      <img src={icons} alt="icons" className={styles.svg__icons} />
      <Main>
        <Body>
          <section className={styles.home}>
            <H1>
              Hola, <br /> Soy{" "}
              <span className={styles.tittle__color}>Alberto</span>,
              <Typewriter
                options={{
                  strings: ["Desarrollador Web.", "Web developer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </H1>
            <P gray={true}>Front-End y proximo Back-End Developer.</P>
            <div className={styles.buttons__container}>
              <ButtonPrimary> Contactame </ButtonPrimary>
              <ButtonSecundary> CV </ButtonSecundary>
            </div>
          </section>

          <section id="acerca_de_mi" className={styles.about}>
            <div className={styles.about__description}>
              <H2>Acerca de mí.</H2>
              <P>
                En mi enfoque de desarrollo, siempre trato de encontrar un
                equilibrio entre el diseño y la funcionalidad. Me aseguro de que
                cada sitio web o aplicación que construyo tenga un diseño
                atractivo y una experiencia de usuario intuitiva, mientras que
                también sea eficiente y esté bien estructurado en el backend.
              </P>
            </div>

            <div className={styles.about__image}>
              <div className={styles.image__container}>
                <img src={me} alt="me" title="me" className={styles.image} />
              </div>
            </div>
          </section>

          <section id="projects" className={styles.projects}>
            <H2>Portafolio.</H2>
            <Section>
              <section className={styles.cards__container}>
                <Card green={true}>Hola</Card>
                <Card blue={true}>Hola</Card>
                <Card orange={true}>Hola</Card>
              </section>
            </Section>
          </section>

          <section id="skills" className={styles.skills}>
            <section className={styles.skills__content}>
              <div>
                <H2>Habilidades y Experiencia.</H2>
                <P>
                  A los 20 años de edad, comencé a trabajar de manera
                  independiente en proyectos de desarrollo web. Durante el
                  último año de mi carrera como ingeniero en sistemas, tuve la
                  oportunidad de trabajar en una empresa desarrollando
                  aplicaciones web y móviles tanto en frontend como en backend.
                  <br /> <br />
                  Este trabajo me permitió aplicar mis conocimientos y
                  habilidades en un entorno real y adquirir experiencia en el
                  desarrollo de aplicaciones completas y de alta calidad.
                  <br /> <br />
                  Desde entonces, he seguido desarrollando mi carrera
                  profesional en el área de la tecnología, con una gran pasión
                  por el desarrollo de software y el aprendizaje constante de
                  nuevas tecnologías y herramientas.
                </P>
              </div>
              <div>
                <div className={styles.progress}>
                  <span>Front-End</span>
                  <progress max="100" value="80">
                    80%
                  </progress>
                </div>
                <div className={styles.progress}>
                  <span>Back End</span>
                  <progress max="100" value="60">
                    60%
                  </progress>
                </div>
                <div className={styles.progress}>
                  <span>React Js</span>
                  <progress max="100" value="70">
                    70%
                  </progress>
                </div>
                <div className={styles.progress}>
                  <span>Express</span>
                  <progress max="100" value="60">
                    60%
                  </progress>
                </div>
              </div>
            </section>
          </section>

          <section id="contacto" className={styles.contact}>
            <section className={styles.contactContent}>
              <div>
                <H2>Contactame.</H2>
                <Other name={"form"}>
                  <form className={styles.form}>
                    <section>
                      <TextField
                        fullWidth
                        id="name"
                        label="Nombre"
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        id="email"
                        label="Correo Electrónico"
                        variant="outlined"
                      />
                    </section>
                    <TextField
                      fullWidth
                      id="asunto"
                      label="Asunto"
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      id="mensaje"
                      label="Mensaje"
                      variant="outlined"
                      multiline
                      rows={6}
                    />
                    <ButtonPrimary>Enviar</ButtonPrimary>
                  </form>
                </Other>
              </div>
              <section className={styles.map}>
                <img src={marker} />
              </section>
            </section>
          </section>
        </Body>
      </Main>
    </Fragment>
  );
}

export default Home;
