import styles from './Dropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState} from 'react';

function Dropdown({children, title}) {

  const [ showText, setShowText] = useState(false);

  return (
    <div className={styles.DropdownText} >

      <div className={styles.title} onClick={() => showText === false ? setShowText(true) : setShowText(false)} >
        <h3 className={styles.h3} >{title}</h3>
        <FontAwesomeIcon icon={showText === false ? faChevronDown : faChevronUp} className={styles.chevron} />
      </div>

      <div className={showText === false ? styles.hide : styles.show} >
        {children}
      </div>

    </div>
  );
}

export default Dropdown;