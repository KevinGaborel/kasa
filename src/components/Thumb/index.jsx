import styles from './Thumb.module.css';
import React, { useState, useEffect, useRef } from 'react'

function Thumb({children, img, link}) {

  const [height, setHeight] = useState(0);

  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientWidth)
  }, [])

  return (
    <article className={styles.thumb} style={{height: height + 'px'}} >
      <a href={link} className={styles.link} >
        <div className={styles.filtre} ></div>
        <img src={img} alt="" className={styles.img} ref={ref} style={{height: height + 'px'}} />
        <h3 className={styles.thumb__Title} >{children}</h3>
      </a>
    </article>
  );
}

export default Thumb;