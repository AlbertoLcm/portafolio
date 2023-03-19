import './App.css'
import styles from './styles/Home.module.css'
import Header from './components/Header'
import image from './assets/images/test.png'

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
            <p className={styles.codeP}>Front-End y Back-End Developer</p>
            
            <div className={styles.buttons}>
              <button className='buttonPrimary'>Contactame</button>
              <button className='btnSecun'>CV</button>
            </div>
        </section>

        <section id='acerca_de_mi' className={styles.about}>
          <div className={styles.heart}></div>
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
