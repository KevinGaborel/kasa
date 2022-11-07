import styles from './Home.module.css';
import Thumb from '../../components/Thumb';
import Imgbackground from '../../components/Imgbackground';
import background from '../../assets/home.png';
import datas from '../../datas/datas.json';

function  Home() {
  console.log(datas);
  return (
    <main className={styles.main}>
      <Imgbackground img={background} text='Chez vous,partout et ailleurs' height="111" />
      {datas.map((data) => <Thumb key={data.id} img={data.cover} link={'logement/' + data.id} >{data.title}</Thumb>)}
    </main>
  );
}

export default Home;