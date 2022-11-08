import styles from './Host.module.css';

function Host({name, img}) {
  const tabName = name.split(' ');

  return (
    <div className={styles.host} >
      <div className={styles.name} >
        <span>{tabName[0]}</span>
        <span>{tabName[1]}</span>
      </div>
      <img src={img} alt={'photo de ' + name} className={styles.img} />
    </div>
  );
}

export default Host;