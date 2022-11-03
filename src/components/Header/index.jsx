import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Header() {
  const [ isHome, setIsHome] = useState(false);
  const [ isAbout, setIsAbout] = useState(false);

  function isUnderline(path){
    if (path === '/'){
      setIsHome(true);
      setIsAbout(false);
    } else if (path === '/a-propos'){
      setIsAbout(true);
      setIsHome(false);
    } else{
      setIsAbout(false);
      setIsHome(false);
    }
  }

  useEffect(()=>{
    isUnderline(window.location.pathname)
  }, [isAbout, isHome]);

  return (

    <header className={styles.header}>
      <img src={logo} alt=""  className={styles.logo}/>
      <nav className={styles.nav} >
        <ul className={styles.liste} >
          <li>
            <Link to={`/`} className={`${styles.link} ${!isHome ? styles.linkNotHere : ''}`} onClick={() => setIsHome(true)} >ACCUEIL</Link>
          </li>
          <li> 
            <Link to={`/a-propos`} className={`${styles.link} ${!isAbout ? styles.linkNotHere : ''}`}  onClick={() => setIsAbout(true)} >A PROPOS</Link>
          </li>
        </ul>
      </nav>
    </header>
    
  );
}

export default Header;