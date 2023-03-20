import './App.css'
import styles from './styles/Home.module.css'
import Header from './components/Header'
import image from './assets/images/me.jpg'
import svg from './assets/images/Untitled.svg'

function App() {
  return (
    <div className="App">

      <Header />
      <main>


        <section id='inicio' className={styles.inicio}>
          <div className={styles.codeH1}>
            <p className={styles.title}>Hola,</p>
            <p className={styles.title}>Soy <span>Alberto</span>,</p>
            <p className={styles.title}>Desarrollador Web.</p>
          </div>
          <p className={styles.codePGray}>Front-End y Back-End Developer</p>

          <div className={styles.buttons}>
            <button className='buttonPrimary'>Contactame</button>
            <button className='btnSecun'>CV</button>
          </div>
        </section>

        <img src={svg} alt="" className={styles.svg}/>

        <section id='acerca_de_mi' className={styles.about}>
          <div>
            <h2 className={styles.codeH2}>Acerca de mí</h2>
            <p className={styles.codeP}>
              Soy un desarrollador frontend apasionado por la creación de
              experiencias web intuitivas y atractivas. Mientras continúo
              desarrollando mis habilidades en el frontend, estoy
              emocionado de explorar nuevas oportunidades en el backend
              para poder ofrecer soluciones web más completas y efectivas.
            </p>
          </div>
          <div className={styles.image}>
            <img src={image} alt="me" />
          </div>
        </section>

        <section id='proyectos'>
        </section>

        <section id='habilidades'>
          <h2>habilidades</h2>
        </section>

        <section id='testimonios'>
          <h2>Testimonios</h2>
        </section>

        <section id='contacto'>
          <h2>Contacto</h2>
        </section>
      </main>

    </div>
  )
}

export default App
