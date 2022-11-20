import styles from './ImgNumber.module.css';
import { useState, useEffect } from 'react';

function ImgNumber({index, numberImg}) {
  return (

   <div className={styles.number} >
    {index + '/' + numberImg }
   </div>
   
  );
}

export default ImgNumber;