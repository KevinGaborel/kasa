import styles from './Thumb.module.css';

function Thumb({children, img, link}) {
  return (
    <article className={styles.thumb} >
      <a href={link} className={styles.link} >
        <div className={styles.filtre} ></div>
        <img src={img} alt="" className={styles.img} />
        <h3 className={styles.thumb__Title} >{children}</h3>
      </a>
    </article>
  );
}

export default Thumb;