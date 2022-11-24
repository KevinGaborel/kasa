import styles from './Logement.module.css';
import Tag from '../../components/Tag';
import Dropdown from '../../components/Dropdown';
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

  return (
    <main className={styles.main}>

      <Slideshow listImg={infos.pictures} />

      <div className={styles.infos} >

        <div >
          <h1 className={styles.title} >{infos.title}</h1>
          <em className={styles.em} >{infos.location}</em>

          <div className={styles.tags} >
            {infos.tags.map((tag, i) => <Tag key={i} >{tag}</Tag>)}
          </div>
        </div>

        <div className={styles.host} >
          <Rating score={infos.rating} />
          <Host name={infos.host.name} img={infos.host.picture} />
        </div>

      </div>
      
      <div className={styles.dropDownContainer}>
        <Dropdown title='Description' >
          <p className={styles.paragraph}>
            {infos.description}
          </p>
        </Dropdown>
        <Dropdown title="Équipements" >
          <ul className={styles.list}>
          {infos.equipments.map((eltListe, nb) => <li className={styles.eltListe} key={nb} value={eltListe} >{eltListe}</li>)}
          </ul>
        </Dropdown>
      </div>

    </main>
  );
}

export default Logement;