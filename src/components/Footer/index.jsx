import styles from './Footer.module.css';
import logo from '../../assets/logo-white.png';

function Footer() {

  return (
    <footer className={styles.footer}>
      <img src={logo} alt="" className={styles.img} />
      <span className={styles.reserved} >© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;