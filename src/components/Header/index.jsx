import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";

function Header() {

  let activeStyle = {
    textDecoration: "underline",
  };

  return (

    <header className={styles.header}>
      <img src={logo} alt=""  className={styles.logo}/>
      <nav className={styles.nav} >
        <ul className={styles.liste} >
          <li>
            <NavLink to={`/`} className={styles.link} style={({ isActive }) => isActive ? activeStyle : undefined} >ACCUEIL</NavLink>
          </li>
          <li> 
            <NavLink to={`/a-propos`} style={({ isActive }) => isActive ? activeStyle : undefined} className={styles.link} >A PROPOS</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    
  );
}

export default Header;