import styles from './Home.module.css';
import Thumb from '../../components/Thumb';
import Imgbackground from '../../components/Imgbackground';
import background from '../../assets/home.png';
import datas from '../../datas/datas.json';

function  Home() {
  return (
    <main className={styles.main}>
      <Imgbackground img={background} text='Chez vous,partout et ailleurs' height="111" />

      <div className={styles.cardContainer} >
        {datas.map((data) => <Thumb key={data.id} img={data.cover} link={'logement/' + data.id} >{data.title}</Thumb>)}
      </div>
      
    </main>
  );
}

export default Home;