import styles from './Imgbackground.module.css';

function Imgbackground({img, text, height}) {
  const size = height === '111' ? styles.small : styles.tall

  return (
    <div className={styles.background + ' ' + size}>
      <img src={img} alt="" className={styles.img} />
      <span className={styles.filtre}></span>
      <h1 className={styles.text} >{text}</h1>
    </div>
  );
}

export default Imgbackground;