import styles from './Imgbackground.module.css';

function Imgbackground({img}) {
  return (
    <div className={styles.background}>
      <img src={img} alt="" className={styles.img} />
      <span className={styles.filtre}></span>
      <h1 className={styles.text} >Chez vous,partout et ailleurs</h1>
    </div>
  );
}

export default Imgbackground;