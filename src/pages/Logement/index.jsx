import styles from './Logement.module.css';
import { Fragment } from 'react';
import Tag from '../../components/Tag';
import DropdownList from '../../components/DropdownList';
import DropdownText from '../../components/DropdownText';
import datas from '../../datas/datas.json';
import Slideshow from '../../components/Slideshow';

export async function loader({ request, params }) {
  const id = await params.id;
  const infos = datas.find((elt) => elt.id === id);

  if (!infos) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return infos;
}

function Logement() {
  const tabPath = window.location.pathname.split('/');
  const id = tabPath[tabPath.length - 1];
  const infos = datas.find((elt) => elt.id === id);

  console.log(infos);

  const liste = ['Climatisation', 'Wi-fi', 'Cuisine', 'Espace de travail', 'Fer à repasser', 'Sèche-cheveux', 'Cintres'];
  const text = `Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. 
  Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. 
  Vous êtes à1 station de la gare de l'est (7 minutes à pied).`

  return (
    <main className={styles.main}>
      <Slideshow listImg={infos.pictures} />
      <h1>{infos.title}</h1>
      <em>{infos.location}</em>
      <div>
      {infos.tags.map((tag) => <Tag>{tag}</Tag>)}
      </div>
      
      <DropdownList liste={liste} />
      <DropdownText title='Description' >{text}</DropdownText>
    </main>
  );
}

export default Logement;