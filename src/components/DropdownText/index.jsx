import styles from './DropdownText.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState} from 'react';

function DropdownText({children, title}) {

  const [ showText, setShowText] = useState(false);

  return (
    <div className={styles.DropdownText} >

      <div name="equipements" className={styles.title} onClick={() => showText === false ? setShowText(true) : setShowText(false)} >
        <h3 className={styles.h3} >{title}</h3>
        <FontAwesomeIcon icon={showText === false ? faChevronDown : faChevronUp} className={styles.chevron} />
      </div>

      <p className={showText === false ? styles.hide : styles.show}>
        {children}
      </p>

    </div>
  );
}

export default DropdownText;