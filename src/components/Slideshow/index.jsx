import styles from './Slideshow.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import ImgNumber from '../ImgNumber';

function Slideshow({listImg}) {

  const [ index, setIndex] = useState(0);

  function changeImage(index){
    if (index === listImg.length){
      setIndex(0);
    } else if (index === -1){
      setIndex(listImg.length - 1);
    }
  }

  console.log(listImg, index);

  useEffect(() => {
    changeImage(index);
  }, [index]);

  return (
   <div className={styles.slideshow}>
    {listImg.map((img, i) => <img src={img} key={i} alt="" className={styles.img} hidden={i === index ? false : true} ></img>)}

    <FontAwesomeIcon icon={faChevronLeft} className={styles.chevronL} onClick={(() => setIndex(index + -1))} />
    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronR} onClick={(() => setIndex(index + 1))} />

    <ImgNumber index={index + 1} numberImg={listImg.length} />

   </div>
   
  );
}

export default Slideshow;