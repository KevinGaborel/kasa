import styles from './Apropos.module.css';
import { Fragment } from 'react';
import Tag from '../../components/Tag';

function Apropos() {
  const liste = ['Climatisation', 'Wi-fi', 'Cuisine', 'Espace de travail', 'Fer à repasser', 'Sèche-cheveux', 'Cintres'];
  const text = `Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. 
  Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Apropos parfait pour les voyageurs en solo et les voyageurs d'affaires. 
  Vous êtes à1 station de la gare de l'est (7 minutes à pied).`

  return (
    <Fragment>
      <Tag>Tomate jaune ou rouge</Tag>
      {text}
      {liste.map((elt) => <li>{elt}</li>)}
    </Fragment>
  );
}

export default Apropos;