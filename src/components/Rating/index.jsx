import styles from './Rating.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Rating({score}) {

    let tabStar = [];

    for (let i=1; i < 6; i++){

        if (i > parseInt(score) ){
            tabStar.push(<FontAwesomeIcon icon={faStar} key={i} className={styles.starEmpty} />);
        } else{
            tabStar.push(<FontAwesomeIcon icon={faStar} key={i} className={styles.star} />);
        }
    } 

  return (
    <div className={styles.rating} >
        {tabStar.map((elt) => elt)}
    </div>
  );
}

export default Rating;