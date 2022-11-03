import styles from './Thumb.module.css';

function Thumb({children}) {
  return (
    <div className={styles.thumb} >
        <h3 className={styles.thumb__Title} >{children}</h3>
    </div>
  );
}

export default Thumb;