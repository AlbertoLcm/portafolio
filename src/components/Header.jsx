import styles from '../styles/Header.module.css'
import image from '../assets/images/me.jpg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.image}>
        <img src={image} alt="me" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#acerca_de_mi">Acerca de mí</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#testimonios">Testimonios</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}