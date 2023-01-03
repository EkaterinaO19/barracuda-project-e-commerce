import React from 'react';
import styles from './PromoComponent.module.css'
import {Link} from "react-router-dom";
import Image from "../../assets/promoComponent/image.png"
import App from "../../assets/promoComponent/app-store.svg";
import Google from "../../assets/promoComponent/google-play.svg"

function PromoComponent(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <img src={Image} alt={'img'}/>
            </div>
            <div className={styles.right}>
                <span className={styles.text}>
                    Enjoy mobile shopping with our <br/>Barracuda Store App!
                </span>
                <div className={styles.buttonsGroup}>
                    <Link to={'/'}><img src={App} alt={'img'}/></Link>
                    <Link to={'/'}><img src={Google} alt={'img'}/></Link>
                </div>
            </div>
        </div>
    );
}

export default PromoComponent;