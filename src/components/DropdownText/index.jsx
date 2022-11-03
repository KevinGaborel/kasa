import styles from './DropdownText.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState} from 'react';

function DropdownText({children, title}) {

  const [ showText, setShowText] = useState(false);

  return (
    <div>

      <div name="equipements" className={styles.title} onClick={() => showText === false ? setShowText(true) : setShowText(false)} >
        <span>{title}</span>
        <FontAwesomeIcon icon={showText === false ? faChevronDown : faChevronUp} className={styles.chevron} />
      </div>

      <p className={showText === false ? styles.hide : styles.show}>
        {children}
      </p>

    </div>
  );
}

export default DropdownText;