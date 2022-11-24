import styles from './Apropos.module.css';
import imgDesktop from '../../assets/a-propos.png';
import imgPhone from '../../assets/a-propos-phone.png';
import Imgbackground from '../../components/Imgbackground';
import DropdownText from '../../components/Dropdown';

function Apropos() {
  const isPhone = window.matchMedia("only screen and (max-width: 800px)").matches;

  return (
    <main className={styles.main} >
      <Imgbackground img={isPhone ? imgPhone : imgDesktop} text=''/>

      <div className={styles.dropdowns} >
        <DropdownText title='Fiabilité'>
          <p className={styles.paragraph}>
            Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
          </p>
        </DropdownText>

        <DropdownText title='Respect' >
          <p className={styles.paragraph}>
            La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </p>
        </DropdownText>

        <DropdownText title='Service' >
          <p className={styles.paragraph}>
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
            N'hésitez pas à nous contacter si vous avez la moindre question.
          </p>
        </DropdownText>

        <DropdownText title='Sécurité'>
          <p className={styles.paragraph}>
            La sécurité est la priorité de Kasa. 
            Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
            En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </DropdownText>
      </div>
    </main>
  );
}

export default Apropos;