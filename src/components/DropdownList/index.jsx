import styles from './DropdownList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState} from 'react';

function DropdownList({liste}) {

  const [ showList, setShowList] = useState(false);

  return (
    <div className={styles.dropdownList}>

      <div className={styles.title} onClick={() => showList === false ? setShowList(true) : setShowList(false)} >
        <h3 className={styles.h3} >Équipements</h3>
        <FontAwesomeIcon icon={showList === false ? faChevronDown : faChevronUp} className={styles.chevron} />
      </div>

      <ul className={showList === false ? styles.hide : styles.show}>
        {liste.map((eltListe, nb) => <li className={styles.eltListe} key={nb} value={eltListe} >{eltListe}</li>)}
      </ul>

    </div>
  );
}

export default DropdownList;