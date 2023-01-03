import React from 'react';
import styles from './Partners.module.css'
import img1 from '../../assets/Partners/Del Mar Strategy Logo.png'
import img2 from '../../assets/Partners/For Sale Logo.png'
import img3 from '../../assets/Partners/Higher Fit Logo - Untitled Page.png'
import img4 from '../../assets/Partners/InDepth Consulting Logo - Untitled Page.png'
import img5 from '../../assets/Partners/Sentinal Consulting Logo.png'
import img6 from '../../assets/Partners/National Health Logo.png'



function Partners(props) {
    return (
        <div className={styles.wrapper}>
            <img src={img1} alt={'logo'} className={styles.image}/>
            <img src={img2} alt={'logo'} className={styles.image}/>
            <img src={img3} alt={'logo'} className={styles.image}/>
            <img src={img4} alt={'logo'} className={styles.image}/>
            <img src={img5} alt={'logo'} className={styles.image}/>
            <img src={img6} alt={'logo'} className={styles.image}/>
        </div>
    );
}

export default Partners;