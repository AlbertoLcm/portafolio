import styles from '../styles/Header.module.css'
import image from '../assets/lcm.svg'
import { useState } from 'react';
import { Fragment } from 'react';

const HeaderBurger = ({ action }) => {
  return (
    <header className={styles.burger__container}>
      <div onClick={() => action(false)} className={styles.burger}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f3f3f3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <div className={styles.image}>
        <img src={image} alt="me" />
      </div>
      <nav className={styles.nav__header}>
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

const ButtonBurger = ({ action }) => {
  return (
    <div className={styles.burger} onClick={() => action(true)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#f3f3f3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
    </div>
  )
}

export default function Header() {

  const [burger, setBurger] = useState(false);

  const showBurger = (boolean) => setBurger(boolean);

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.image}>
          <img src={image} alt="me" />
        </div>
        <nav className={styles.nav__header}>
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

      <ButtonBurger action={showBurger} />
      {burger && <HeaderBurger action={showBurger} />}
    </Fragment>
  )
}