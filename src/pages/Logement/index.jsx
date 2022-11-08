import styles from './Logement.module.css';
import { Fragment } from 'react';
import Tag from '../../components/Tag';
import DropdownList from '../../components/DropdownList';
import DropdownText from '../../components/DropdownText';
import datas from '../../datas/datas.json';
import Slideshow from '../../components/Slideshow';
import Rating from '../../components/Rating';
import Host from '../../components/Host';

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

  return (
    <main className={styles.main}>

      <Slideshow listImg={infos.pictures} />

      <h1 className={styles.title} >{infos.title}</h1>
      <em className={styles.em} >{infos.location}</em>

      <div className={styles.tags} >
      {infos.tags.map((tag, i) => <Tag key={i} >{tag}</Tag>)}
      </div>

      <div className={styles.host} >
      <Rating score={infos.rating} />
      <Host name={infos.host.name} img={infos.host.picture} />
      </div>
      
      <DropdownText title='Description' >{infos.description}</DropdownText>
      <DropdownList liste={infos.equipments} />
    </main>
  );
}

export default Logement;