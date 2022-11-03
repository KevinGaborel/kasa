import styles from './Home.module.css';
import { Fragment } from 'react';
import Tag from '../../components/Tag';
import Thumb from '../../components/Thumb';
import DropdownList from '../../components/DropdownList';
import DropdownText from '../../components/DropdownText';
import Imgbackground from '../../components/Imgbackground';
import background from '../../assets/home.png';

function Home() {
  const liste = ['Climatisation', 'Wi-fi', 'Cuisine', 'Espace de travail', 'Fer à repasser', 'Sèche-cheveux', 'Cintres'];
  const text = `Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. 
  Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. 
  Vous êtes à1 station de la gare de l'est (7 minutes à pied).`

  return (
    <Fragment>
      <Imgbackground img={background} />
      <Tag>tag-name</Tag>
      <Thumb>Titre de la location</Thumb>
      <DropdownList liste={liste} />
      <DropdownText title='Description' >{text}</DropdownText>
    </Fragment>
  );
}

export default Home;