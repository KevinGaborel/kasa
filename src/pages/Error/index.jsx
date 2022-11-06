import styles from './Error.module.css';
import { Link } from "react-router-dom";


export default function ErrorPage() {

  return (
    <main>
      <h1 className={styles.title} >404</h1>
      <p className={styles.text} >
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to={`/`} className={styles.link} >Retourner sur la page d’accueil</Link>
    </main>
  );
}