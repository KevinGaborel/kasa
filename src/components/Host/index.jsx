import styles from './Host.module.css';

function Host({name, img}) {

  return (
    <div className={styles.Host} >
        <p>{name}</p>
        <img src={img} alt={'photo de ' + name} className={styles.img} />
    </div>
  );
}

export default Host;